<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Neobred</title>
    <script src="assets/js/jquery-1.12.4.js"></script>
    <script src="assets/js/jquery.mobile-1.4.5.min.js"></script>
    <script src="assets/js/jquerymobile-swipeupdown.js"></script>
    <script src="assets/js/sidenav.js"></script>
    <!-- <script src="assets/js/neobred-header.min.js"></script> -->



    <link rel="stylesheet" type="text/css" href="assets/css/section-theme.css">
    <link rel="stylesheet" type="text/css" href="assets/css/fix.css">
    <link rel="stylesheet" type="text/css" href="assets/css/transitions.css">
    <link rel="stylesheet" type="text/css" href="assets/css/neobred-top.css">
    <link rel="stylesheet" type="text/css" href="assets/css/sidenav.css">
        <!-- <link rel="stylesheet" type="text/css" href="assets/css/neobred.min.css"> -->

</head>
<body>

<div class="flex-container transitionIn white" id="flex-container">
    <header class=" delay-1 animated fadeInLeft">
       <img class="company-logo" src="assets/images/neobred_logo.svg">
    </header>
    <div id="nav-trigger" class="nav-trigger" onclick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
    <nav id="nav" class="nav hide">
      <ul id="sidenav-items" class="sidenav-items v-align">
        <li class="sidenav-item delay-9 animated fadeInRight"><a id="article-about-link" class="sidenav-link article-about" href="#">About</a></li>
        <li class="sidenav-item delay-10 animated fadeInRight"><a id="article-what-we-do-link" class="sidenav-link article-what-we-do" href="#">What we do</a></li>
        <li class="sidenav-item delay-11 animated fadeInRight"><a id="article-meet-the-team-link" class="sidenav-link article-meet-the-team" href="#">Meet the team</a></li>
        <li class="sidenav-item delay-12 animated fadeInRight"><a id="article-get-in-touch-link" class="sidenav-link article-get-in-touch" href="#">Contact</a></li>
      </ul>
    </nav>
    <article id="article-hello" class="article article1 visible">
        <header class="article-title article-header--hello delay-1 animated fadeInLeft">
            <img class="article-title--image--hello" src="assets/images/hello.svg">
            <img class="hello-dot animated2 delay-6 fadeIn" src="assets/images/red_dot.svg">
        </header>
        <section class="article-content article-content--hello animated fadeInUp delay-6 visible">
            <p class="lead article-content-lead animated visible">We're Neo<span class="red">bred</span><span class="red">.</span> A new breed of reckless creatives<span class="red">.</span> We conceive original and mind-bending ideas to get your brand noticed<span class="red">.</span> And then we brag about it<span class="red">.</span></p>
        </section>
    </article>
    <article id="article-about" class="article article2">
        <header class="article-title article-header--about delay-1 animated fadeInLeft">
            <img class="article-title--image--about" src="assets/images/about.svg">
            <img class="about-dot animated delay-6 fadeIn" src="assets/images/red_dot.svg">
        </header>

        <section class="article-content article-content--about animated fadeInUp delay-6 visible">
            <p class="lead article-content-lead animated visible">Neo<span class="yellow">bred</span> is not only a creative agency, we are a new way of thinking<span class="yellow">.</span> </br>A new way of doing things<span class="yellow">.</span> A new way of getting the right results<span class="yellow">.</span> </br></br> Drop us a <span class="underline">line</span> to see how we can help your brand<span class="yellow">.</span></p>
        </section>

        <section class="article-content article-content--about animated fadeInUp delay-6">
            <p class="lead article-content-lead animated">Fusce sed pellentesque augue, a vehicula lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean vestibulum ipsum at ligula sodales finibus.</p>
        </section>

        <aside id="section-numbers" class="section-numbers about--section-numbers animated fadeIn delay-3">
            <h3 id="about-section-1" class="section-number active yellow section-1">1</h3>
            <h3 id="about-section-2" class="section-number section-2">2</h3>
        </aside>

    </article>
    <article id="article-what-we-do" class="article article3">
        <header class="article-title article-header--what-we-do delay-1 animated fadeInLeft">
            <img class="article-title--image--what" src="assets/images/what.svg">
            <img class="article-title--image--we-do" src="assets/images/we_do.svg" >
            <img class="what-dot animated delay-6 fadeIn" src="assets/images/red_dot.svg" >
        </header>
        <section class="article-content article-content--what-we-do animated fadeInUp visible">
            <p class="lead article-content-lead animated">In a world full of competition, brands need to take risks to get noticed<span class="pink">.</span> Neo<span class="pink">bred</span> is a full-service marketing, communications and creative agency specialising in making you stand out<span class="pink">.</span></p>
        </section>
        <section class="article-content article-content--what-we-do animated fadeInUp">
            <p class="lead article-content-lead animated">We create a tailored service, from scratch, individually designed to your brand's exact needs<span class="pink">.</span> No two brands are ever the same, so no work should ever be too<span class="pink">.</span></p>
        </section>
        <aside id="section-numbers" class="section-numbers what--section-numbers animated fadeIn delay-3 visible">
            <h3 id="what-we-do-section-1" class="section-number active pink section-1">1</h3>
            <h3 id="what-we-do-section-2" class="section-number section-2">2</h3>
        </aside>
    </article>





    <article id="article-meet-the-team" class="article article4 animated ">

        <header class="article-title article-header--meet-the-team delay-1 animated fadeInLeft">
            <img class="article-title--image--meet" src="assets/images/meet.svg">
            <img class="article-title--image--the-team" src="assets/images/the_team.svg">
            <img class="meet-dot animated delay-6 fadeIn" src="assets/images/red_dot.svg">
        </header>

        <section class="article-content article-content--meet-the-team animated fadeInUp visible">
            <img class="team-portrait animated" src="assets/images/portrait.png" >
            <h1 class="team-name">Jman</h1>
            <h1 class="team-role blue">BADMAN designer</h1>
            <p class="team-about">Praesent felis neque, porta a scelerisque mollis, commodo nec nunc</p>
        </section>

        <section class="article-content article-content--meet-the-team animated fadeInUp">
            <img class="team-portrait animated" src="assets/images/portrait.png">
            <h1 class="team-name">Chloe</h1>
            <h1 class="team-role blue">Marketing</h1>
            <p class="team-about">Nunc ullamcorper mattis nisl, ut efficitur nisi lobortis quis</p>
        </section>

        <section class="article-content article-content--meet-the-team animated fadeInUp">
            <img class="team-portrait animated" src="assets/images/portrait.png">
            <h1 class="team-name">Jimi</h1>
            <h1 class="team-role blue">Developer</h1>
            <p class="team-about">In in dolor maximus, dapibus ipsum vel, luctus risus</p>
        </section>

        <section class="article-content article-content--meet-the-team animated fadeInUp">
            <img class="team-portrait animated" src="assets/images/portrait.png">
            <h1 class="team-name">Bert</h1>
            <h1 class="team-role blue">CEO</h1>
            <p class="team-about">Praesent felis neque, porta a scelerisque mollis, commodo nec nunc</p>
        </section>

        <aside id="section-numbers" class="section-numbers team--section-numbers animated fadeIn visible delay-3">
            <h3 id="meet-the-team-section-1" class="section-number active blue section-1">1</h3>
            <h3 id="meet-the-team-section-2" class="section-number section-2">2</h3>
            <h3 id="meet-the-team-section-3" class="section-number section-3">3</h3>
            <h3 id="meet-the-team-section-4" class="section-number section-4">4</h3>
        </aside>

    </article>


    <article id="article-get-in-touch" class="article article5">
        <header class="article-title article-header--get-in-touch delay-1 animated fadeInLeft">
           <img class="article-title--image--get" src="assets/images/get.svg">
           <img class="article-title--image--in-touch" src="assets/images/in_touch.svg">
           <img class="contact-dot animated delay-6 fadeIn" src="assets/images/red_dot.svg">
        </header>
        <section class="article-content  article-content--get-in-touch animated fadeInUp delay-6 visible">
            <p class="lead contact-form article-content-lead animated visible">
            <p id="post-success" class="post-success message-success" style="">Message Sent</p>
            <p id="post-failure" class="post-success message-failure" style="color:red;">Message Failed</p>
            <p id="article-content-section-one-lead" class=" lead article-content-lead delay-1 animated">We'll take you out for lunch<span class="blue">(on-us)</span> and see what we can do to make your brand pop<span class="blue">.</span></p>
            <form id="contact-form" class="lead contact-form article-content-lead animated visible" action="action_page.php">
                <fieldset>
                    <div class="contact_details">
                        <input id="name_field" type="text" class="contact-name" name="contact-name" placeholder="Name" autofocus>
                         <div id="name-error" class="error contact-details-error name-error">*</div>
                        <input id="email_field"  type="text" class="contact-email" name="contact-email" placeholder="Email">
                         <div id="email-error" class="error contact-details-error email-error">*</div>
                        <input id="tel_field"  type="text" class="contact-tel" name="contact-tel" placeholder="Tel">
                         <div id="tel-error" class="error contact-details-error tel-error ">*</div>
                    </div>
                    <div class="message">
                        <textarea id="message_field" placeholder="Message" rows="" cols="" style="overflow:hidden"></textarea>
                         <div id="message-error" class="error message-error">*</div>
                    </div>
                    <a class="submit" id="form-submit" href="#" onclick="">Send</a>
                </fieldset>
            </form>
            </p>
        </section>
        <section id="contact-page" class="article-content article-content--get-in-touch article-content--get-in-touch--part-two animated">
            <p  class="lead article-content-lead delay-6 animated fadeInUp">We'll take you out for lunch<span class="blue">(on-us)</span> and see what we can do to make your brand pop<span class="blue">.</span></br></br>Drop us a line</br><span class="blue">+44(0)7963365438</span></br></br>Mail us</br><span class="blue">hello</span>@neobred.com</p>
        </section>
        <aside id="section-numbers" class="section-numbers contact--section-numbers animated fadeIn visible delay-3">
            <h3 id="contact-section-1" class="section-number active blue section-1">1</h3>
            <h3 id="contact-section-2" class="section-number section-2">2</h3>
        </aside>
    </article>
    <aside id="icons" class="icons ">
        <img class="mouse animated2 fadeIn delay-9" src="assets/images/mouse.png">
    </aside>
    <aside id="page-number" class="page-number"><h5>1 / 5</h5></aside>
    <footer class="page-footer">
      <p class="animated fadeInUp">
        <span class="page-footer-contact animated red fadeIn">T&nbsp; </span>07963 365438
        &nbsp;
        <span class="page-footer-contact animated red fadeIn">E&nbsp; </span>info@neobred.com
      </p>
      <p class="animated delay-9 fadeInDownCopy">&copy; NEOBRED LIMITED 2016</p>
    </footer>
    <script src="assets/js/singlepage.js"></script>
  </div>
</body>
</html>
