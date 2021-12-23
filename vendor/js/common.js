!(function ($) {
	"use strict";
	var a = {
		accordionOn: ["xs"]
	};
	$.fn.responsiveTabs = function (e) {
		var t = $.extend({}, a, e),
			s = "";
		return (
			$.each(t.accordionOn, function (a, e) {
				s += " accordion-" + e;
			}),
			this.each(function () {
				var a = $(this),
					e = a.find("> li > a"),
					t = $(e.first().attr("href")).parent(".tab-content"),
					i = t.children(".tab-pane");
				a.add(t).wrapAll('<div class="responsive-tabs-container" />');
				var n = a.parent(".responsive-tabs-container");
				n.addClass(s),
					e.each(function (a) {
						var t = $(this),
							s = t.attr("href"),
							i = "",
							n = "",
							r = "";
						t.parent("li").hasClass("active") && (i = " active"),
							0 === a && (n = " first"),
							a === e.length - 1 && (r = " last"),
							t
								.clone(!1)
								.addClass("accordion-link" + i + n + r)
								.insertBefore(s);
					});
				var r = t.children(".accordion-link");
				e.on("click", function (a) {
					a.preventDefault();
					var e = $(this),
						s = e.parent("li"),
						n = s.siblings("li"),
						c = e.attr("href"),
						l = t.children('a[href="' + c + '"]');
					s.hasClass("active") ||
						(s.addClass("active"),
							n.removeClass("active"),
							i.removeClass("active"),
							$(c).addClass("active"),
							r.removeClass("active"),
							l.addClass("active"));
				}),
					r.on("click", function (t) {
						t.preventDefault();
						var s = $(this),
							n = s.attr("href"),
							c = a.find('li > a[href="' + n + '"]').parent("li");
						s.hasClass("active") ||
							(r.removeClass("active"),
								s.addClass("active"),
								i.removeClass("active"),
								$(n).addClass("active"),
								e.parent("li").removeClass("active"),
								c.addClass("active"));
					});
			})
		);
	};
})(jQuery);

$(document).ready(function(){
	$(".navbar-toggler").click(function(){
	  $(".navbar-toggler-icon").toggleClass("navbar-toggler-icon-x",3000);
	});
	
	$(".nav-link").click(function () {
		// If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
		if ($(this).hasClass("active")) {
		  $(".nav-link").removeClass("active");
		}
		// Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
		else {
		  $(".nav-link").removeClass("active");
		  $(this).addClass("active");
		}
	  });


  });

//   form validation
  
    function regform() {
	var firstname = 
		document.forms["RegForm"]["firstname"];
	var lastname = 
		document.forms["RegForm"]["lastname"];
	var email = 
		document.forms["RegForm"]["email"];
	var number = 
		document.forms["RegForm"]["number"];
	 var selectprog = 
	 	document.forms["RegForm"]["selectprog"];
	 var selectdelivery = 
	 	document.forms["RegForm"]["selectdelivery"];
	 var selectcom = 
	 document.forms["RegForm"]["selectcom"];

	if (firstname.value == "") {
		window.alert("Please enter your first name.");
		firstname.focus();
		return false;
	}

	if (lastname.value == "") {
		window.alert("Please enter your last name.");
		lastname.focus();
		return false;
	}

	if (email.value == "") {
		window.alert(
		  "Please enter a valid e-mail address.");
		email.focus();
		return false;
	}

	if (number.value == "") {
		window.alert(
		  "Please enter your telephone number.");
		number.focus();
		return false;
	}

	 if (selectprog.selectedIndex < 1) {
	 	window.alert("Please select program");
	 	selectprog.focus();
	 	return false;
	 }

	 if (selectdelivery.selectedIndex < 1) {
	 	alert("Please select delivery type.");
	 	selectdelivery.focus();
	 	return false;
	}


	 if (selectcom.selectedIndex < 1) {
	 	alert("Please select communication type.");
	 	selectcom.focus();
	 	return false;
	 }	

	return true;
}
//   form validation