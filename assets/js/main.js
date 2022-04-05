/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});
	
	function currentTime() {
			var date = new Date(); /* creating object of Date class */
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();
			var midday = "AM";
			midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
			hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
			hour = updateTime(hour);
			min = updateTime(min);
			sec = updateTime(sec);
			document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
			  var t = setTimeout(currentTime, 1000); /* setting timer */
		  }
		  
		  function updateTime(k) { /* appending 0 before time elements if less than 10 */
			if (k < 10) {
			  return "0" + k;
			}
			else {
			  return k;
			}
		  }
		  
		  currentTime();

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});

});
