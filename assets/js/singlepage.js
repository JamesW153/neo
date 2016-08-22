
function sendMail(data) {


	$.ajax({
		type: "POST",
		url: "email.php",
		data: data,
		success: function(){
			$('.message-success').fadeIn(1000);
			document.getElementById("contact-form").reset();

			function clearSuccess() {
				$('.message-success').fadeOut(1000);
			}
			setTimeout(clearSuccess, 9000);
		},
		error: function(){
			$('.message-success').fadeIn(1000);
			document.getElementById("contact-form").reset();

			function clearFailure() {
				$('.message-failure').fadeOut(1000);
			}
			setTimeout(clearFailure, 9000);
		},
		// error: function(){
		// 	$('.message-failure').fadeIn(1000);
		// }
	});

	return false;
}


$( "#form-submit" ).click(function() {

	var name = $('#name_field').val();
	var email = $('#email_field').val();
	var tel = $('#tel_field').val();
	var message = $('#message_field').val();


	var errors = {};


	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}



	if (name == "" || name.length >= 40) {
		errors["name"] = "Please enter a valid name";
	}
	if (!validateEmail(email) )
	{
		errors["email"] = "Please enter a valid email address.";
	}
	if (tel == "" || tel.length >= 30) {
		errors["tel"] = "Please enter a valid contact number";
	}
	if (message == "" || message.length >= 1000) {
		errors["message"] = "Please enter a valid message";
	}




	if (!jQuery.isEmptyObject(errors)) {
		if(errors.name){
			var n = document.getElementById("name-error");
			n.classList.add("visible");
		}
		if(errors.email){
			var e = document.getElementById("email-error");

			e.classList.add("visible");

		}
		if(errors.tel){
			var t = document.getElementById("tel-error");
			t.classList.add("visible");

		}
		if(errors.message){
			var m = document.getElementById("message-error");
			m.classList.add("visible");

		}
	}
	else {

		var data = {
			form_name: name,
			form_email: email,
			form_tel: tel,
			form_message: message }

		sendMail(data);
	}

});


$( function() {

	var articlesArr=[];

	var articles=[
		"article-hello",
		"article-about",
		"article-what-we-do",
		"article-meet-the-team",
		"article-get-in-touch"
	];


	var colors = { 
		"article-hello":"white",
		"article-about":"yellow",
		"article-what-we-do":"pink",
		"article-meet-the-team":"blue",
		"article-get-in-touch":"blue"
	}; 

	var nextArticleIndex=0;

	var currentArticle="";  // TODO: this is not the same as presentArticle

	var presentArticle="";
	var presentArticleForNav="";

	var articleMovingOut = "";
	// if (presentArticle = "undefined") {
	// 	presentArticle = "article-hello";
	// }


	var articleAboutSection2 = false;

	function hasVisibleClass(el) {
		var result = false;
		if ( el.className.match(/(?:^|\s)visible(?!\S)/) ) {
			result = true;
		}
		return result;
	}

	function forSubElementReplaceWith(subElement, oldClass, newClass) {

		Array.prototype.forEach.call(articlesArr, function(el) {
			if ( hasVisibleClass(el) ) {
				var se = el.getElementsByClassName(subElement)[0];
				if (se.className.match(oldClass)) {
					se.classList.remove(oldClass);
					se.classList.add(newClass)
				}
			}
		});

	}

	function replaceElementClassWith(subElement, oldClass, newClass) {





		Array.prototype.forEach.call(articlesArr, function(el) {
			// if ( hasVisibleClass(el) ) {



				if (el.getElementsByClassName(subElement)[0]) {
					var se = el.getElementsByClassName(subElement);

					Array.prototype.forEach.call(se, function(el) {
						if (el.className.match(oldClass)) {


							el.classList.remove(oldClass);
							el.classList.add(newClass)
						}
					});



				}

			// }
		});

	}


	function replaceFlexContainerClassWith(oldClass, newClass) {

		// Array.prototype.forEach.call(articlesArr, function(el) {
		// 	// if ( hasVisibleClass(el) ) {
		// 		var se = el.getElementsByClassName(subElement)[0];
		// 		if (se.className.match(oldClass)) {
		// 			se.classList.remove(oldClass);
		// 			se.classList.add(newClass)
		// 		}
		// 	// }
		// });

		flex = document.getElementsByClassName("flex-container");
		Array.prototype.forEach.call(flex, function(el) {

			el.classList.remove(oldClass);
			el.classList.add(newClass);

		});

	}


	function replaceSectionNumbersClassWith(oldClass, newClass) {

				var se = document.getElementById("section-numbers");

				if (se.className.match(oldClass)) {
					se.classList.remove(oldClass);
					se.classList.add(newClass)
				}

	}

	function addClassToElement(subElement, klass) {

		Array.prototype.forEach.call(articlesArr, function(el) {
			if ( hasVisibleClass(el) ) {
				var se = el.getElementsByClassName(subElement)[0];
				// if (se.className.match(oldClass)) {
				// 	se.classList.remove(oldClass);

				se.classList.add(klass);
				// }
			}
		});

	}

	function removeClassFromArticle(article, klass) {

		var se = document.getElementById(article);
		if (se.className.match(klass)) {
			se.classList.remove(klass);
		}

	}

	function removeClassFromElement(subElement, klass) {

		Array.prototype.forEach.call(articlesArr, function(el) {
			if ( hasVisibleClass(el) ) {

				if (el.getElementsByClassName(subElement)[0]) {
					var se = el.getElementsByClassName(subElement)[0];
					if (se.className.match(klass)) {
						se.classList.remove(klass);
					}
				}

			}
		});

	}

	function updatePageColor() {

		footerElementsArr = document.getElementsByClassName("page-footer-contact");
		Array.prototype.forEach.call(footerElementsArr, function(el) {
			// var se = el.getElementsByClassName(subElement)[0];
			// if (el.className.match(oldClass)) {
			// 	el.classList.remove(oldClass);
			// 	el.classList.add(newClass);

				// TODO: Change this to a loop
				el.classList.remove("white");
				el.classList.remove("red");
				el.classList.remove("yellow");
				el.classList.remove("pink");
				el.classList.remove("blue");


			if (colors[currentArticle] == "white") {
				el.classList.add("red");
			}
			else if (currentArticle == "article-meet-the-team") {
				el.classList.add("red");
			}
			else {
				el.classList.add(colors[currentArticle]);
			}




				// sections[next].classList.add();

			// }
		});

		flex = document.getElementsByClassName("flex-container");
		Array.prototype.forEach.call(flex, function(el) {

			el.classList.remove("white");
			el.classList.remove("red");
			el.classList.remove("yellow");
			el.classList.remove("pink");
			el.classList.remove("blue");

			if (currentArticle == "article-meet-the-team") {
				el.classList.add("red");
			}
			else {
				el.classList.add(colors[currentArticle]);
			}

		});
        //
		// el.getElementsByClassName("flex-container")[0].remove("red");
		// el.getElementsByClassName("flex-container")[0].remove("yellow");
		// el.getElementsByClassName("flex-container")[0].remove("pink");
		// el.getElementsByClassName("flex-container")[0].remove("blue");
		// el.getElementsByClassName("flex-container")[0].add(colors[currentArticle]);

	}



	function addClassToSectionNumbers(klass) {

		// if ( hasVisibleClass(el) ) {
		var se = document.getElementById("section-numbers");
		// if (se.className.match(oldClass)) {
		// 	se.classList.remove(oldClass);

		se.classList.add(klass);
		// }
		// }
		// });

	}


	function removeClassToSectionNumbers(klass) {

		// if ( hasVisibleClass(el) ) {
		var se = document.getElementById("section-numbers");
		// if (se.className.match(oldClass)) {
		// 	se.classList.remove(oldClass);

		se.classList.remove(klass);
		// }
		// }
		// });

	}

	function removeClassFromSectionNumbers(klass) {

		var se = document.getElementById("section-numbers");
		if (se.className.match(klass)) {
			se.classList.remove(klass);
		}

	}

	function startTransitionIn() {

		replaceFlexContainerClassWith("transitionOut", "transitionIn");


		meet = document.getElementsByClassName("article-content--meet-the-team");
			Array.prototype.forEach.call(meet, function(el) {
				
					el.classList.remove("fadeOutDown");
					// el.classList.remove("delay-6");
					el.classList.add("fadeInUp");
				
			});



		if (currentArticle == "article-hello") {
			addClassToElement("article-header--hello", "delay-1");
			addClassToElement("article-content--hello", "delay-6");
			replaceElementClassWith("article-header--hello", "fadeOutUp", "fadeInLeft");
			replaceElementClassWith("article-content--hello", "fadeOutDown", "fadeInUp");
			replaceElementClassWith("hello--section-numbers", "fadeOut", "fadeIn");
			removeClassToSectionNumbers("visible");
			addClassToSectionNumbers("delay-3");
			updatePageColor();


		}
		else if (currentArticle == "article-about") {
			addClassToElement("article-header--about", "delay-1");
			addClassToElement("article-content--about", "delay-6");
			replaceElementClassWith("article-header--about", "fadeOutUp", "fadeInLeft");
			replaceElementClassWith("article-content--about", "fadeOutDown", "fadeInUp");
			replaceElementClassWith("about--section-numbers", "fadeOut", "fadeIn");
			addClassToSectionNumbers("visible");
			addClassToSectionNumbers("delay-3");
			updatePageColor();



		}
		else if (currentArticle == "article-what-we-do") {
			addClassToElement("article-header--what-we-do", "delay-1");
			addClassToElement("article-content--what-we-do", "delay-6");
			replaceElementClassWith("article-header--what-we-do", "fadeOutUp", "fadeInLeft");
			replaceElementClassWith("article-content--what-we-do", "fadeOutDown", "fadeInUp");
			replaceElementClassWith("what--section-numbers", "fadeOut", "fadeIn");
			addClassToSectionNumbers("visible");
			addClassToSectionNumbers("delay-3");
			updatePageColor();

		}
		else if (currentArticle == "article-meet-the-team") {
			addClassToElement("article-header--meet-the-team", "delay-1");
			addClassToElement("article-content--meet-the-team", "delay-6");
			replaceElementClassWith("article-header--meet-the-team", "fadeOutUp", "fadeInLeft");
			replaceElementClassWith("article-content--meet-the-team", "fadeOutDown", "fadeInUp");
			replaceElementClassWith("article-content--meet-the-team", "fadeOutDown", "fadeInUp");
			replaceElementClassWith("team--section-numbers", "fadeOut", "fadeIn");
			addClassToSectionNumbers("visible");
			addClassToSectionNumbers("delay-3");
			updatePageColor();
			// replaceElementClassWith("team-portrait", "fadeOutRight", "fadeInRight");



			teamPortraits = document.getElementsByClassName("team-portrait");

			Array.prototype.forEach.call(teamPortraits, function(el) {
				if (screen.width < 544) {

					if (el.className.match(/(?:^|\s)fadeOutRight(?!\S)/)) {
						replaceElementClassWith("team-portrait", "fadeOutRight", "fadeInRight");
					} else {
						el.classList.add("fadeInRight");
					}

				} else {
					if (el.className.match(/(?:^|\s)fadeOutDown(?!\S)/)) {
						replaceElementClassWith("team-portrait", "fadeOutDown", "fadeInUp");
					} else {
						el.classList.add("fadeInUp");
					}
				}
			});



			// meet = document.getElementsByClassName("article-content--meet-the-team");
			// Array.prototype.forEach.call(meet, function(el) {
			// 	if ( hasVisibleClass(el) ) {

			// 		el.classList.remove("fadeOutleft");
			// 		el.classList.remove("delay-6");
			// 		el.classList.add("fadeInUp");

			// 	}
			// });

		}
		else if (currentArticle == "article-get-in-touch") {
			addClassToElement("article-header--get-in-touch", "delay-1");
			addClassToElement("article-content--get-in-touch", "delay-6");
			replaceElementClassWith("article-header--get-in-touch", "fadeOutUp", "fadeInLeft");
			replaceElementClassWith("article-content--get-in-touch", "fadeOutDown", "fadeInUp");
			replaceSectionNumbersClassWith("fadeOut", "fadeIn");
			replaceElementClassWith("contact--section-numbers", "fadeOut", "fadeIn");

			addClassToSectionNumbers("visible");
			addClassToSectionNumbers("delay-3");
			updatePageColor();



			// var getInTouchText = ;
			if (screen.width < 768) {
				document.getElementById("article-content-section-one-lead").classList.add("hide");
			}


		}

		function delatNavTriggerClick() {
			// Re-enable the nav trigger
			document.getElementById('nav-trigger').style.pointerEvents = 'auto';
		}

		setTimeout(delatNavTriggerClick, 100);


	}



	function startTransitionOut() {


		// Disable the nav-trigger
		document.getElementById('nav-trigger').style.pointerEvents = 'none';


		replaceFlexContainerClassWith("transitionIn", "transitionOut");


		removeClassFromElement("article-content-lead", "shiftRightMobileContent");
		removeClassFromElement("article-content-lead", "shiftRightMobile");


			meet = document.getElementsByClassName("article-content--meet-the-team");
			Array.prototype.forEach.call(meet, function(el) {
				if ( hasVisibleClass(el) ) {

					el.classList.remove("fadeInUp");
					// el.classList.remove("delay-6");
					el.classList.add("fadeOutDown");

				} else {
					el.classList.remove("fadeOutDown");
					// el.classList.remove("delay-6");
					el.classList.add("fadeInUp");
				}
			});

		if (presentArticle == "article-hello") {
			removeClassFromElement("article-header--hello", "delay-1");
			removeClassFromElement("article-content--hello", "delay-6");
			replaceElementClassWith("article-header--hello", "fadeInLeft", "fadeOutUp");
			replaceElementClassWith("article-content--hello", "fadeInUp", "fadeOutDown");
			replaceSectionNumbersClassWith("fadeIn", "fadeOut");
			removeClassFromSectionNumbers("delay-3");


			 // animated  visible

			// TODO: TRY WRAPPING THIS IN AN IF!
			removeClassFromArticle(presentArticle, "shiftRight");
			// removeClassFromArticle(presentArticle, "shiftRightMobileContent");
			removeClassFromElement(currentArticle, "shiftRightMobile");
			removeClassFromElement("article-header--hello", "shiftRightMobile");
			removeClassFromElement("article-content--hello ", "shiftRightMobileContent");

		}
		else if (presentArticle == "article-about") {
			removeClassFromElement("article-header--about", "delay-1");
			removeClassFromElement("article-content--about", "delay-6");
			replaceElementClassWith("article-header--about", "fadeInLeft", "fadeOutUp");
			replaceElementClassWith("article-content--about", "fadeInUp", "fadeOutDown");
			replaceElementClassWith("article-content--about", "delay-6", "delay-2");
			replaceElementClassWith("about--section-numbers", "fadeIn", "fadeOut");

			// replaceSectionNumbersClassWith("fadeIn", "fadeOut");
			removeClassFromSectionNumbers("delay-3");
			removeClassFromArticle(presentArticle, "shiftRight");




		}
		else if (presentArticle == "article-what-we-do") {
			removeClassFromElement("article-header--what-we-do", "delay-1");
			removeClassFromElement("article-content--what-we-do", "delay-6");
			replaceElementClassWith("article-header--what-we-do", "fadeInLeft", "fadeOutUp");
			replaceElementClassWith("article-content--what-we-do", "fadeInUp", "fadeOutDown");
			replaceElementClassWith("what--section-numbers", "fadeIn", "fadeOut");
			// replaceSectionNumbersClassWith("fadeIn", "fadeOut");
			removeClassFromSectionNumbers("delay-3");
			removeClassFromArticle(presentArticle, "shiftRight");

		}
		else if (presentArticle == "article-meet-the-team") {
			removeClassFromElement("article-header--meet-the-team", "delay-1");
			removeClassFromElement("article-content--meet-the-team", "delay-6");

			replaceElementClassWith("article-header--meet-the-team", "fadeInLeft", "fadeOutUp");
			replaceElementClassWith("article-content--meet-the-team", "fadeInUp", "fadeOutDown");

			replaceElementClassWith("team--section-numbers", "fadeIn", "fadeOut");


			teamPortraits = document.getElementsByClassName("team-portrait");

			Array.prototype.forEach.call(teamPortraits, function(el) {
				if (screen.width < 544) {

					if (el.className.match(/(?:^|\s)fadeOutRight(?!\S)/)) {
						replaceElementClassWith("team-portrait", "fadeInRight", "fadeOutRight")
					} else {
						el.classList.add("fadeOutRight");
					}

				} else {
					if (el.className.match(/(?:^|\s)fadeOutDown(?!\S)/)) {
						replaceElementClassWith("team-portrait", "fadeInUp", "fadeOutDown");
					} else {
						el.classList.add("fadeOutDown");
					}
				}
			});





			// replaceElementClassWith("team--section-numbers", "fadeIn", "fadeOut");
			// replaceElementClassWith("team-portrait", "fadeInUp", "fadeOutRight");
			// replaceSectionNumbersClassWith("fadeIn", "fadeOut");
			// 			replaceElementClassWith("team-portrait", "fadeInRight", "fadeOutRight");
            //
			//
			//
			//
			//
			//
			//
			//
			// if (screen.width < 544) {
			// 	replaceElementClassWith("team-portrait", "fadeInRight", "fadeOutRight");
			// } else {
			// 	replaceElementClassWith("team-portrait", "fadeInUp", "fadeOutDown");
			// }

			removeClassFromSectionNumbers("delay-3");
			removeClassFromArticle(presentArticle, "shiftRight");


		}
		else if (presentArticle == "article-get-in-touch") {
			removeClassFromElement("article-header--get-in-touch", "delay-1");
			removeClassFromElement("article-content--get-in-touch", "delay-6");
			replaceElementClassWith("article-header--get-in-touch", "fadeInLeft", "fadeOutUp");
			replaceElementClassWith("article-content--get-in-touch", "fadeInUp", "fadeOutDown");
			// replaceSectionNumbersClassWith("fadeIn", "fadeOut");
			replaceElementClassWith("contact--section-numbers", "fadeIn", "fadeOut");

			removeClassFromSectionNumbers("delay-3");
			removeClassFromArticle(presentArticle, "shiftRight");


			var form = document.getElementById("contact-form");
			Array.prototype.forEach.call(form, function(el) {
				el.classList.remove("shiftRightMobileContent");
			});


			var formPage = document.getElementById("contact-page");
			Array.prototype.forEach.call(formPage, function(el) {
				el.classList.remove("shiftRightMobileContent");
			});

			var article1 = document.getElementById("article-get-in-touch");
				article1.classList.remove("shiftRightMobile");

			var article = document.getElementById("contact-page");
				article.classList.add("fadeOutDown");
				article.classList.remove("delay-10");

			var navTrigger = document.getElementById("nav-trigger");
			navTrigger.classList.add("enable-pointer-events");












			// var article2 = document.getElementById("article-get-in-touch");
			// Array.prototype.forEach.call(article2, function(el) {
			// 	el.classList.remove("shiftLeftMobile");
			// });

			function delatNavTriggerClick() {
				// Re-enable the nav trigger
				article.classList.remove("fadeOutDown");

			}

			setTimeout(delatNavTriggerClick, 1000);

		}


	}

	function getVisibleSection(el) {
		
		var result = false

    	var sections = el.querySelectorAll("section");
		var i;

		for (i = 0; i < sections.length; i++) {
			if ( sections[i].className.match(/(?:^|\s)visible(?!\S)/) ) {
		    	result = i;
	    	}
		}

		return result;

	}


	

	function addSectionNumbers(article) {




		// when the document loads check if it contains sections
		if (hasSections()) {  // TODO: pass in article
			Array.prototype.forEach.call(articlesArr, function(el) {
			    if ( hasVisibleClass(el) ) {
			    	var sections = el.querySelectorAll("section");


					if (sections.length > 1) {


						var visibleSection = getVisibleSection(el);

						visibleSection = visibleSection + 1;


						 var numbers = document.getElementById("section-numbers");




						var html = "";
						for (i = 1; i <= sections.length; i++) {
							if (i == visibleSection) {

								html += '<h3 class="section-number active ' + colors[currentArticle] + ' ' +article+'">' + i + '</h3>';
								// html += '<h3 class="section-number"><a id="' + article + '-link" class="'+article+' section-number active ' + colors[currentArticle] + '" href="#">' + i + '</a></h3>';
							}
							else {

								html += '<h3 class="section-number ' +article+'-section-'+ i +'" >' + i + '</h3>';
							}
						}

						numbers.innerHTML = html;

					}
		    	}
			});
		}	

	}

	function updatePageNumber() {
		var pageNumber = document.getElementById("page-number");
		var html = "";







		if (currentArticle == "article-hello") {
			html += '<h5>1 / 5</h5>';
		}
		else if (currentArticle == "article-about") {
			html += '<h5>2 / 5</h5>';
		}
		else if (currentArticle == "article-what-we-do") {
			html += '<h5>3 / 5</h5>';
		}
		else if (currentArticle == "article-meet-the-team") {
			html += '<h5>4 / 5</h5>';
		}
		else if (currentArticle == "article-get-in-touch") {
			html += '<h5>5 / 5</h5>';
		}

		pageNumber.innerHTML = html;


	}

	function setActiveSidenavItem() {


		items = document.getElementsByClassName("ui-link");
		Array.prototype.forEach.call(items, function(el) {
			el.classList.remove("actice");

            //
			// if (el.getElementsByClassName(currentArticle)[0]) {
            //
			// 	var se = el.getElementsByClassName(currentArticle)[0];
            //
			// 	se.classList.add("actice");
            //
			// }

		});
		sidenavItems = document.getElementsByClassName("sidenav-item");
		Array.prototype.forEach.call(sidenavItems, function(el) {


			if (el.getElementsByClassName(currentArticle)[0]) {

				var se = el.getElementsByClassName(currentArticle)[0];

				se.classList.add("actice");

			}

		});



		// items = document.getElementsByClassName("sidenav-item");
		// Array.prototype.forEach.call(items, function(el) {
        //
        //
        //
		// 	// if (el.getElementsByClassName(currentArticle)) {
         //    //
		// 	// 	var se = el.getElementsByClassName(currentArticle);
         //    //
		// 	// }
         //    //
        //
        //
		// });

	}


	function switchToArticle(article) {


		Array.prototype.forEach.call(articlesArr, function(el) {
		    if ( hasVisibleClass(el) ) {
		    	el.classList.remove("visible"); // consider using .hide() .show()
	    	}
		});



        // TODO: ERRORS ARE BEING THROWN HERE!


		el = document.getElementById(article);



		// TODO: ERRORS ARE BEING THROWN HERE!

		el.className+= ' visible';

		currentArticle = article;

// add section numbers    TODO: Add if hasSections()
// 		addSectionNumbers(article);

		updatePageNumber();

		setActiveSidenavItem();


		startTransitionIn();
		setPresentArticle(article);

	}

	function getNextArticle(delta) {
	    nextArticleIndex=(delta<=-120)? nextArticleIndex+1 : nextArticleIndex-1 
	    nextArticleIndex=(nextArticleIndex<0)? articles.length-1 : (nextArticleIndex>articles.length-1)? 0 : nextArticleIndex 
		article = articles[nextArticleIndex];
		return article;
	}




	function hasSections() {
		var result = false;
		Array.prototype.forEach.call(articlesArr, function(el) {
		    if ( hasVisibleClass(el) ) {
		    	var sections = el.querySelectorAll("section");
				if (sections.length > 1) {
					result = true;
            		return false;
				} 
	    	}
		});
		return result;
	}

	function switchSectionNumbers(direction) {
		Array.prototype.forEach.call(articlesArr, function(el) {
		    if ( hasVisibleClass(el) ) {

				var sections = el.getElementsByClassName("section-number");


				var current = 0;

				for (i = 0; i < sections.length; i++) {
					if ( sections[i].className.match(/(?:^|\s)active(?!\S)/) ) {
						current = i;
						sections[i].classList.remove("active");
						sections[i].classList.remove(colors[currentArticle]);
						break;
					}
				}

				if (direction == "next") {
					var next = current + 1;

					if (next >= sections.length ) {
						sections[0].classList.add("active");
						sections[0].classList.add(colors[currentArticle]);
					} else {
						sections[next].classList.add("active");
						sections[next].classList.add(colors[currentArticle]);
					}
				} else {
					// direction = previous
					var previous = current - 1;

					if (previous == -1 ) {
						sections[sections.length-1].classList.add("active");
						sections[sections.length-1].classList.add(colors[currentArticle]);
					} else {
						sections[previous].classList.add("active");
						sections[previous].classList.add(colors[currentArticle]);
					}
				}


	    	}
		});
	}


	function nextSection() {
		Array.prototype.forEach.call(articlesArr, function(el) {
		    if ( hasVisibleClass(el) ) {
		    	var sections = el.querySelectorAll("section");
				var i;
				var current = 0;
				for (i = 0; i < sections.length; i++) {
    				if ( sections[i].className.match(/(?:^|\s)visible(?!\S)/) ) {
				    	sections[i].classList.remove("visible");
				    	current=i;
			    	}
				}
				//loop
				if (sections.length > current+1) {
					sections[current+1].classList.add("visible");
				} else {
					sections[0].classList.add("visible");
				}

				switchSectionNumbers("next");
	    	}
		});
	}

	function previousSection() {
		Array.prototype.forEach.call(articlesArr, function(el) {
		    if ( hasVisibleClass(el) ) {
		    	var sections = el.querySelectorAll("section");
				var i;
				var current = 0;
				for (i = 0; i < sections.length; i++) {
    				if ( sections[i].className.match(/(?:^|\s)visible(?!\S)/) ) {
				    	sections[i].classList.remove("visible");
				    	current=i;
			    	}
				} 
				// loop
				if (current != 0) {
					sections[current-1].classList.add("visible");
				} else {
					sections[sections.length-1].classList.add("visible");
				}

				switchSectionNumbers("previous");
	    	}
		});
	}


	function setPresentArticle() {
		nextArticleIndex=(nextArticleIndex<0)? articles.length-1 : (nextArticleIndex>articles.length-1)? 0 : nextArticleIndex
		article = articles[nextArticleIndex];

		presentArticle = article;
	}





	function moveToArticleViaNavigation(article) {

		var x = document.getElementById("nav");

		toggleFunction(x);

		function test() {
			var articles = document.getElementsByClassName("article");
			Array.prototype.forEach.call(articles, function(article) {

				if (hasVisibleClass(article)) {

					articleMovingOut = article;



					if (screen.width < 992) {
						article.classList.remove("shiftLeftMobile");
						article.classList.add("shiftRightMobile");

						var els = document.getElementsByClassName("shiftLeftMobileContent");

						Array.prototype.forEach.call(els, function(el) {
							el.classList.remove("shiftLeftMobileContent");
							el.classList.add("shiftRightMobileContent");
						});

					} else {
						article.classList.remove("shiftLeft");
						article.classList.add("shiftRight");
					}


				}
			});
		}

		setTimeout(test, 1000);

		function doSwitch() {


			// // THIS IS A COPY OF sitenav.js function
			//
			// var els = document.getElementsByClassName("sidenav-item");
			//
			// Array.prototype.forEach.call(els, function(el) {
			//
			// 	if ( el.className.match(/(?:^|\s)hide(?!\S)/) ) {
			//
			// 		// reverseDelayOrder(el);
			//
			// 		el.classList.remove("hide");
			// 		el.className += " fadeInRightSmall";
			// 	}
			// 	else if ( el.className.match(/(?:^|\s)fadeInRightSmall(?!\S)/) ) {
			//
			// 		reverseDelayOrder(el);
			//
			// 		el.classList.remove("fadeInRightSmall");
			// 		el.className += " fadeOutRightSmall";
			// 	}
			// 	else if ( el.className.match(/(?:^|\s)fadeOutRightSmall(?!\S)/) ) {
			//
			// 		reverseDelayOrder(el);
			//
			// 		el.classList.remove("fadeOutRightSmall");
			//
			// 		el.className += " fadeInRightSmall";
			// 	}
			//
			//
			// });
			//
			//





			startTransitionOut();

			function doSwitch() {
				switchToArticle(article);
			}

			setTimeout(doSwitch, 2000);

		}

		setTimeout(doSwitch, 2000);

		function doRemove() {
			articleMovingOut.classList.remove("shiftRight");
		}
		setTimeout(doRemove, 2000);

		// 	UPDATE ARTICLE INDEX
		nextArticleIndex= articles.indexOf(article);
	}


	
	function moveToArticle(e) {



		var evt = window.event || e;


				if (e instanceof Object) {
					var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta;
				} else {
					var delta = e;
				}


				if (delta > 0) {
					delta = +120;
				} else {
					delta = -120;
				}








				setPresentArticle();

				var article = getNextArticle(delta);




				// tidySidenav();
				startTransitionOut();



				//
				// function doTransition() {
				// 	startTransitionOut();
				// }
				//
				// setTimeout(doTransition, 3000);


				function doSwitch() {
					// TODO: ERRORS ARE BEING THROWN HERE!

					switchToArticle(article);
				}


				setTimeout(doSwitch, 1000);

				if (evt.preventDefault) {
					evt.preventDefault()
				}
				else {
					return false
				}
			}

function setNavItemActiveColor(articleId) {

	// var navItem = document.getElementById(articleId);

	var color = colors[articleId];

	var navItem = document.getElementById(articleId+"-link");


	var navItems = document.getElementsByClassName("sidenav-link");



	Array.prototype.forEach.call(navItems, function(item) {
		if (item.className.match(/(?:^|\s)red(?!\S)/)) {
			item.classList.remove("red");
		}
		else if (item.className.match(/(?:^|\s)yellow(?!\S)/)) {
			item.classList.remove("yellow");
		}
		else if (item.className.match(/(?:^|\s)pink(?!\S)/)) {
			item.classList.remove("pink");
		}
		else if (item.className.match(/(?:^|\s)blue(?!\S)/)) {
			item.classList.remove("blue");
		}

	});


	if (articleId == "article-meet-the-team") {
		navItem.classList.add("red");

	}
	else {
		navItem.classList.add(color);
	}

	// if (currentArticle == "article-hello") {
    //
	// }
	// else if (currentArticle == "article-about") {
    //
	// }
	// else if (currentArticle == "article-what-we-do") {
    //
	// }
	// else if (currentArticle == "article-meet-the-team") {
    //
	// }
	// else if (currentArticle == "article-get-in-touch") {
	// }

}


	function disableSidenav() {

		var els = document.getElementsByClassName("sidenav-item");

		Array.prototype.forEach.call(els, function(el) {

			el.classList.add("hide");
			el.classList.remove("fadeInRight");
			el.classList.remove("delay1");
			el.classList.remove("delay2");
			el.classList.remove("delay3");
			el.classList.remove("delay4");
			el.classList.remove("delay5");
			el.classList.remove("delay6");
			el.classList.remove("delay7");
			el.classList.remove("delay8");
			el.classList.remove("delay8");
			el.classList.remove("delay10");
			el.classList.remove("fadeInRight");
			el.classList.remove("fadeInRight");
			el.classList.remove("fadeInRight");
			el.classList.remove("fadeInRight");
			el.classList.add("fadeOutRight");

		});

	}


	function processScroll(e) {
		moveToArticle(e);
	}

	var lastFire = 0;
	var difference = 0;
	var now = 0;

	function scrollEvent(e){

		var nav = document.getElementById("nav");

		if ( nav.className.match(/(?:^|\s)hide(?!\S)/) ) {


			// if firing for the first time
			if (lastFire == 0) {
				now = new Date();
				lastFire = now;
			}


			if (now == lastFire) {
				now = 0;
				processScroll(e);
			}
			else {
				now = new Date();
				difference = (now - lastFire) / 1000;
				if (difference >= 1) {

					lastFire = new Date();
					processScroll(e);
				}
			}
		}
	}

	function addOrAttachEvent() {
		var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";


		if (document.attachEvent) {//if IE (and Opera depending on user setting)
		    document.attachEvent("on"+mousewheelevt, scrollEvent)
		}
		else if (document.addEventListener) { //WC3 browsers
		    document.addEventListener(mousewheelevt, scrollEvent, false)
		}
	}


	function setArticlesArr() {
		articlesArr = document.getElementsByClassName("article");
	}

	setArticlesArr();

	// mouse scroll
	addOrAttachEvent();



	

		// $(document).on("swipeleft",function(){
		// 	var delta = -120;
		// 	if (hasSections()) {
		// 		nextSection();
		// 	}
		// });
        //
		// $(document).on("swiperight",function(){
		//   	var delta = +120;
		//  	if (hasSections()) {
		// 		previousSection();
		// 	}
		// });

		$(document).on("swipeup",function(){
  			var delta = -120;
			// alert("Hello!");
  		  moveToArticle(delta);

		});

		$(document).on("swipedown",function(){
  		  var delta = +120;
			// alert("Hello!");

  		  moveToArticle(delta);

		});


	// Wait for the page to load first
	window.onload = function() {
		// var articleAboutSection2 = document.getElementsByClassName("article-what-we-dosection-2");
		//
        //
        //
        // var articleAboutSection2 = document.getElementById("section-2");


		// articleAboutSection2.onclick = function() {
		// 	return false;
		// }


		var articleAbout = document.getElementById("article-about-link");

		articleAbout.onclick = function() {
			moveToArticleViaNavigation("article-about");
			setNavItemActiveColor("article-about");
			return false;
		}

		var articleWhat = document.getElementById("article-what-we-do-link");

		articleWhat.onclick = function() {
			moveToArticleViaNavigation("article-what-we-do");
			setNavItemActiveColor("article-what-we-do");

			return false;
		}

		var articleMeet = document.getElementById("article-meet-the-team-link");

		articleMeet.onclick = function() {
			moveToArticleViaNavigation("article-meet-the-team");
			setNavItemActiveColor("article-meet-the-team");

			return false;
		}

		var articleContact = document.getElementById("article-get-in-touch-link");

		articleContact.onclick = function() {
			moveToArticleViaNavigation("article-get-in-touch");
			setNavItemActiveColor("article-get-in-touch");

			return false;
		}




		function switchSectionNumbers(section) {

			Array.prototype.forEach.call(articlesArr, function(el) {
				if ( hasVisibleClass(el) ) {

					var sectionNumbers = el.getElementsByClassName("section-number");

					for (i = 0; i < sectionNumbers.length; i++) {
						if ( sectionNumbers[i].className.match(/(?:^|\s)active(?!\S)/) ) {
							current = i;
							sectionNumbers[i].classList.remove("active");
							sectionNumbers[i].classList.remove(colors[currentArticle]);
							break;
						}
					}


					sectionNumbers[section].classList.add("active");
					sectionNumbers[section].classList.add(colors[currentArticle]);


					var sections = el.querySelectorAll("section");
					var i;
					var current = 0;
					for (i = 0; i < sections.length; i++) {
						if ( sections[i].className.match(/(?:^|\s)visible(?!\S)/) ) {
							sections[i].classList.remove("visible");
							current=i;
						}
					}

					sections[section].classList.add("visible");



				}
			});
		}



		document.getElementById("about-section-1").addEventListener("click", aboutSec1);

		document.getElementById("about-section-2").addEventListener("click", aboutSec2);

		document.getElementById("what-we-do-section-1").addEventListener("click", whatSec1);

		document.getElementById("what-we-do-section-2").addEventListener("click", whatSec2);

		document.getElementById("meet-the-team-section-1").addEventListener("click", meetSec1);

		document.getElementById("meet-the-team-section-2").addEventListener("click", meetSec2);

		document.getElementById("meet-the-team-section-3").addEventListener("click", meetSec3);

		document.getElementById("meet-the-team-section-4").addEventListener("click", meetSec4);

		document.getElementById("contact-section-1").addEventListener("click", contactSec1);

		document.getElementById("contact-section-2").addEventListener("click", contactSec2);

		function aboutSec1() {
			switchSectionNumbers(0)
		}
		function aboutSec2() {
			switchSectionNumbers(1)
		}
		function whatSec1() {
			switchSectionNumbers(0)
		}
		function whatSec2() {
			switchSectionNumbers(1)
		}
		function meetSec1() {
			switchSectionNumbers(0)
		}
		function meetSec2() {
			switchSectionNumbers(1)
		}
		function meetSec3() {
			switchSectionNumbers(2)
		}
		function meetSec4() {
			switchSectionNumbers(3)
		}
		function contactSec1() {
			switchSectionNumbers(0)
		}
		function contactSec2() {
			switchSectionNumbers(1)
		}


		// var articleAboutSection2 = document.getElementById("article-about-section-2");
        //
		// // if (articleAboutSection2 != false) {
		// 	articleAboutSection2.onclick = function() {
		// 		return false;
		// 	}
		// // }


	}
} );