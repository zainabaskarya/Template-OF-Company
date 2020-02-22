/*global $, document, window */
$(document).ready(function () {
	$('.carousel').carousel({
		interval: 4000
	});

	//show color option when click on the gear
	$(".gear-check").click(function () {
		$(".color-option").fadeToggle();
	});
	//change color on click

	var colorLi = $(".color-option ul li");
	colorLi
		.eq(0).css("backgroundColor", "#E41B17").end()
		.eq(1).css("backgroundColor", "#E426D5").end()
		.eq(2).css("backgroundColor", "#009AFF").end()
		.eq(3).css("backgroundColor", "#FFD500");

	colorLi.click(function () {
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));
	});
	//scroll tooop
	var scrolltop = $("#scroll-top");
	$(window).scroll(function () {
		// if and else المختصره 
		$(this).scrollTop() >= 700 ? scrolltop.show() : scrolltop.hide();
	});
	// click on button to scroll top
	scrolltop.click(function () {
		$("html,body").animate({
			scrollTop: 0
		}, 600);
	});

});
//loading screen

$(window).on('load', function () {

	//loading elements
	$(".loading-overlay .spinner").fadeOut(1000,
		function () {
			//show the scroll
			$("body").css("overflow", "auto");

			$(this).parent().fadeOut(1000,
				function () {
					$(this).remove();
				});

		});
	$(window).scroll(function () {
		console.log($(this).scrollTop());
	});
});
