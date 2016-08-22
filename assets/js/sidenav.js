
// MULTIPLES OF THIS EXIST
function hasVisibleClass(el) {
	var result = false;
	if ( el.className.match(/(?:^|\s)visible(?!\S)/) ) {
		result = true;
	}
	return result;
}


function reverseDelayOrder(el) {



    //
	// if ( el.className.match(/(?:^|\s)delay-1(?!\S)/) ) {
    	// el.classList.remove("delay-1");
    	// // el.className += " delay-12";
	// }
	// else if ( el.className.match(/(?:^|\s)delay-2(?!\S)/) ) {
    	// el.classList.remove("delay-2");
    	// // el.className += " delay-11";
	// }
	// else if ( el.className.match(/(?:^|\s)delay-3(?!\S)/) ) {
    	// el.classList.remove("delay-3");
    	// // el.className += " delay-10";
	// }
	// else if ( el.className.match(/(?:^|\s)delay-4(?!\S)/) ) {
    	// el.classList.remove("delay-4");
    	// // el.className += " delay-9";
	// }


	// else
	if ( el.className.match(/(?:^|\s)delay-5(?!\S)/) ) {
    	el.classList.remove("delay-5");
    	el.className += " delay-12";
	}
	else if ( el.className.match(/(?:^|\s)delay-6(?!\S)/) ) {
    	el.classList.remove("delay-6");
    	el.className += " delay-11";
	}
	else if ( el.className.match(/(?:^|\s)delay-7(?!\S)/) ) {
    	el.classList.remove("delay-7");
    	el.className += " delay-10";
	}
	else if ( el.className.match(/(?:^|\s)delay-8(?!\S)/) ) {
    	el.classList.remove("delay-8");
    	el.className += " delay-9";
	}
	else if ( el.className.match(/(?:^|\s)delay-9(?!\S)/) ) {
    	el.classList.remove("delay-9");
    	el.className += " delay-8";
	}
	else if ( el.className.match(/(?:^|\s)delay-10(?!\S)/) ) {
    	el.classList.remove("delay-10");
    	el.className += " delay-7";
	}
	else if ( el.className.match(/(?:^|\s)delay-11(?!\S)/) ) {
    	el.classList.remove("delay-11");
    	el.className += " delay-6";
	}
	else if ( el.className.match(/(?:^|\s)delay-12(?!\S)/) ) {
    	el.classList.remove("delay-12");
    	el.className += " delay-5";
	}
	// DO THIS 10 TIMES !!
}



function removeShift(article) {
	if (document.documentElement.clientWidth <= 420) {
		article.classList.remove("shiftRightMobile");
	}
	else {
		article.classList.remove("shiftRight");
	}
}

function fixContentShift(content) {
	function hide() {
		content.classList.remove("shiftRightMobileContent");
	}
	setTimeout(hide, 2000);
}

function contentTransition(contents, expanding) {
	if (document.documentElement.clientWidth <= 420) {

		Array.prototype.forEach.call(contents, function(content) {
			// if (hasVisibleClass(content)) {
				if (expanding) {
					content.classList.remove("shiftRightMobileContent");
					// content.classList.remove("delay-15");

					content.classList.add("animated");
					content.classList.add("shiftLeftMobileContent");

				}
				else {
					content.classList.remove("shiftLeftMobileContent");
					// content.classList.add("delay-15");
					content.classList.add("animated");

					content.classList.add("shiftRightMobileContent");
					fixContentShift(content);

				}
			// }
		});
	}
}


function fixArticleShift(article) {
	function hide() {
		article.classList.remove("shiftRightMobile");
	}
	setTimeout(hide, 2000);
}

function helloTransition(article, contents,  expanding) {
	if (document.documentElement.clientWidth <= 420) {
		if (expanding) {
			// article.classList.remove("delay-12");
			article.classList.remove("shiftRightMobile");
			// article.classList.add("delay-6");
			article.classList.add("animated");

			article.classList.add("shiftLeftMobile");
			contentTransition(contents, expanding);
			fixArticleShift(article);
		}
		else {

			// on closing delay shift to allow navigation to retreat first
			function hide() {
				article.classList.remove("shiftLeftMobile");
				article.classList.add("shiftRightMobile");
				contentTransition(contents, expanding);
				fixArticleShift(article);
			}
			setTimeout(hide, 700);

		}
	}
	else {
		if (expanding) {
			article.classList.remove("delay-15");
			article.classList.remove("shiftRight");
			article.classList.add("animate");
			article.classList.add("shiftLeft");
			contentTransition(contents, expanding);
		}
		else {
			article.classList.remove("animate");
			article.classList.remove("shiftLeft");
			article.classList.add("delay-15");
			article.classList.add("shiftRight");
			contentTransition(contents, expanding);

		}
	}
	return;

}
function aboutTransition(article, contents,  expanding) {
	if (document.documentElement.clientWidth <= 420) {
		if (expanding) {
			// article.classList.remove("delay-12");
			article.classList.remove("shiftRightMobile");
			article.classList.add("animated");
			article.classList.add("shiftLeftMobile");
			contentTransition(contents, expanding);
			fixArticleShift(article);
		}
		else {


			// on closing delay shift to allow navigation to retreat first
			function hide() {
				article.classList.remove("shiftLeftMobile");
				// article.classList.add("delay-12");
				article.classList.add("shiftRightMobile");
				contentTransition(contents, expanding);
				fixArticleShift(article);
			}
			setTimeout(hide, 700);

		}
	}
	else {
		if (expanding) {
			article.classList.remove("delay-15");
			article.classList.remove("shiftRight");
			article.classList.add("animate");
			article.classList.add("shiftLeft");
			contentTransition(contents, expanding);
		}
		else {
			article.classList.remove("animate");
			article.classList.remove("shiftLeft");
			article.classList.add("delay-15");
			article.classList.add("shiftRight");
			contentTransition(contents, expanding);

		}
	}
	return;
}
function whatTransition(article, contents,  expanding) {
	if (document.documentElement.clientWidth <= 420) {
		if (expanding) {
			// article.classList.remove("delay-12");
			article.classList.remove("shiftRightMobile");
			article.classList.add("animated");
			article.classList.add("shiftLeftMobile");
			contentTransition(contents, expanding);
			fixArticleShift(article);
		}
		else {

			// on closing delay shift to allow navigation to retreat first
			function hide() {
				article.classList.remove("shiftLeftMobile");
				// article.classList.add("delay-12");
				article.classList.add("shiftRightMobile");
				contentTransition(contents, expanding);
				fixArticleShift(article);
			}
			setTimeout(hide, 700);
		}
	}
	else {
		if (expanding) {
			article.classList.remove("delay-15");
			article.classList.remove("shiftRight");
			article.classList.add("animate");
			article.classList.add("shiftLeft");
			contentTransition(contents, expanding);
		}
		else {
			article.classList.remove("animate");
			article.classList.remove("shiftLeft");
			article.classList.add("delay-15");
			article.classList.add("shiftRight");
			contentTransition(contents, expanding);

		}
	}
	return;
}
function meetTransition(article, contents,  expanding) {

	var portrait = document.getElementById("team-portrait");


	if (document.documentElement.clientWidth <= 420) {
		if (expanding) {
			// article.classList.remove("fadeIn");
			// article.classList.add("fadeOut");
			article.classList.remove("delay-12");
			article.classList.remove("shiftRightMobile");
			// article.classList.add("animated");
			article.classList.add("shiftLeftMobile");
			contentTransition(contents, expanding);
			fixArticleShift(article);




			// Array.prototype.forEach.call(contents, function(content) {
			// 	// if (hasVisibleClass(content)) {
			// 	// if (contents.id = "team-portrait") {
			// 		content.classList.remove("fadeIn");
			// 		content.classList.add("fadeOut");
			// 	// }
			// });


			// portraits = document.getElementsByClassName("team-portrait");
			// Array.prototype.forEach.call(portraits, function(el) {
			// 	el.classList.remove("fadeIn");
			// 	el.classList.add("fadeOut");
			// });






		}
		else {


			// on closing delay shift to allow navigation to retreat first
			function hide() {
				article.classList.remove("shiftLeftMobile");
				// article.classList.add("delay-12");
				article.classList.add("shiftRightMobile");
				contentTransition(contents, expanding);
				fixArticleShift(article);
			}
			setTimeout(hide, 800);



			// article.classList.add("fadeIn");
			// article.classList.remove("fadeOut");
			// article.classList.add("delay-12");
            //
            //
			// article.classList.remove("shiftLeftMobile");
			// article.classList.add("shiftRightMobile");
            //
			// contentTransition(contents, expanding);
			// fixArticleShift(article);


			// portraits = document.getElementsByClassName("team-portrait");
			// Array.prototype.forEach.call(portraits, function(el) {
			// 	el.classList.remove("fadeOut");
			// 	el.classList.add("fadeIn");
			// });

		}
	}
	else {
		if (expanding) {
			article.classList.remove("delay-15");
			article.classList.remove("shiftRight");
			article.classList.add("animate");
			article.classList.add("shiftLeft");
			// contents.classList.add("shiftLeftMobileContent");
			contentTransition(contents, expanding);
		}
		else {
			article.classList.remove("animate");
			article.classList.remove("shiftLeft");
			article.classList.add("delay-15");
			article.classList.add("shiftRight");
			contentTransition(contents, expanding);

		}
	}
	return;
}
function contactTransition(article, contents,  expanding) {

	var form = document.getElementById("contact-form");
	var formPage = document.getElementById("contact-page");


	if (document.documentElement.clientWidth <= 420) {
		if (expanding) {
			article.classList.remove("delay-10");
			article.classList.remove("shiftRightMobile");
			article.classList.add("animate");
			article.classList.add("shiftLeftMobile");

			form.classList.remove("delay-10");
			form.classList.remove("shiftRightMobileContent");
			form.classList.add("shiftLeftMobileContent");

			formPage.classList.remove("delay-10");
			formPage.classList.remove("shiftRightMobileContent");
			formPage.classList.add("shiftLeftMobileContent");

		}
		else {
			article.classList.remove("animate");
			article.classList.remove("shiftLeftMobile");
			article.classList.add("delay-10");
			article.classList.add("shiftRightMobile");

			form.classList.remove("shiftLeftMobileContent");
			form.classList.add("shiftRightMobileContent");
			form.classList.add("delay-10");



			formPage.classList.remove("shiftLeftMobileContent");
			formPage.classList.add("shiftRightMobileContent");
			formPage.classList.add("delay-10");

			function hide() {
				form.classList.remove("shiftRightMobileContent");
				formPage.classList.remove("shiftRightMobileContent");
			}
			setTimeout(hide, 1500);

		}
	}
	else {
		if (expanding) {
			article.classList.remove("delay-15");
			article.classList.remove("shiftRight");
			article.classList.add("animate");
			article.classList.add("shiftLeft");
		}
		else {
			article.classList.remove("animate");
			article.classList.remove("shiftLeft");
			article.classList.add("delay-15");
			article.classList.add("shiftRight");

		}
	}
}

function transitionForSidebar(article, contents,  expanding) {

	// if (document.documentElement.clientWidth <= 420) {

	// }


	if (article.id == "article-hello") {

		helloTransition(article, contents,  expanding);
	}
	else if (article.id == "article-about") {
		aboutTransition(article, contents,  expanding);
	}
	else if (article.id == "article-what-we-do") {
		whatTransition(article, contents,  expanding);
	}
	else if (article.id == "article-meet-the-team") {
		meetTransition(article, contents,  expanding);
	}
	else if (article.id == "article-get-in-touch") {
		contactTransition(article, contents,  expanding);
	}
	// removeShift(article);
}


function showHideSidebar() {

	var nav = document.getElementById("nav");

	if ( nav.className.match(/(?:^|\s)hide(?!\S)/) ) {
		nav.classList.toggle("hide");
	}
	else {

		var els = document.getElementsByClassName("sidenav-item");

		Array.prototype.forEach.call(els, function(el) {
			reverseDelayOrder(el);
			el.classList.remove("fadeInRight");
			el.classList.add("fadeOutRight");
		});

		function hide() {

			Array.prototype.forEach.call(els, function(el) {
				reverseDelayOrder(el);
				el.classList.remove("fadeOutRight");
				el.classList.add("fadeInRight");
				nav.classList.add("hide");
			});
		}
		setTimeout(hide, 1000);

	}

}



function enableSidebar() {

	var navTrigger = document.getElementById("nav-trigger");
	var expanding = false;
	if (navTrigger.className.match(/(?:^|\s)change(?!\S)/)) {
		expanding = true;
	}




	var articles = document.getElementsByClassName("article");
	Array.prototype.forEach.call(articles, function(article) {




		if (hasVisibleClass(article)) {

			var contents  = article.getElementsByClassName("article-content-lead");

			transitionForSidebar(article, contents,  expanding);
			showHideSidebar();
		}
	});
}




function toggleFunction(x) {
	// x.classList.toggle("change");
	x.classList.toggle("change");

	enableSidebar();
	var navTrigger = document.getElementById("nav-trigger");
	navTrigger.classList.remove("change");
	var nav = document.getElementById("nav");
	nav.classList.remove("change");


}



function myFunction(x) {
	x.classList.toggle("change");

	enableSidebar();

	function fixMulyiclickIssue() {   // IMPORTANT!
		var navTrigger = document.getElementById("nav-trigger");
		var expanding = false;
		if (navTrigger.className.match(/(?:^|\s)change(?!\S)/)) {

			var nav = document.getElementById("nav");

			if ( nav.className.match(/(?:^|\s)hide(?!\S)/) ) {

				enableSidebar();

			}
		}
	}
	setTimeout(fixMulyiclickIssue, 1000);
}

