<?php

$nameErr = $emailErr = $telErr = "";
$name = $email = $tel = $message  = "";


$errors = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
// Validate name
    if (empty($_POST["form_name"])) {
        $errors["form_name"] = "Name is required";
    } else {
        $name = test_input($_POST["form_name"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
            $errors["invalid_characters"] = "Only letters and white space allowed";
        }
    }
// Validate email
    if (empty($_POST["form_email"])) {
        $errors["form_email"] = "Email is required";
    } else {
        $email = test_input($_POST["form_email"]);
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors["email_format"] = "Invalid email format";
        }
    }
// Validate message
    if (empty($_POST["form_message"])) {
        $errors["message_empty"] = "Message is required";
    } else {
        $message = test_input($_POST["form_message"]);
    }
// Validate telephone
    if (empty($_POST["form_tel"])) {
        $errors["contact_number"] = "Contact number is required";
    } else {
        $tel = test_input($_POST["form_tel"]);
    }
}



function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}


function sendMail($name, $email, $tel, $message)
{
    $to = "bert@neobred.co.uk";
    $cc = "";
    $subject = "NEOBRED MESSAGE from " . $email;

    $message = "<html>
        <head>
        <title>You have Mail!</title>
        </head>
        <body>
        <h3>From: " . $name . "</h3>
        <h4>Email: " . $email . "</h4>
        <h4>Telephone: " . $tel . "</h4>
        <p>Message: " . $message . "</p>
        </body>
        </html>
        ";

// Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
    $headers .= 'From: <' . $email . '>' . "\r\n";

    if ($cc != "") {
        $headers .= 'Cc: ' . $cc . "\r\n";
    }

    mail($to, $subject, $message, $headers);

}

if (empty($errors)) {
    sendMail($name, $email, $tel, $message);
} else {
    return false;
}
?>