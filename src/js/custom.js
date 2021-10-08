$(function() {
	/* intro main */
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});


	//adds the loader timeout
$(document).ready(function() {

  // fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 800);

});

/* adds the hide/show feature to events */
$(".display").click(function() {
  $('#hiddenrows .hidden').slice(0, 2).removeClass('hidden');
  if ($('#hiddenrows .hidden').length == 0) {
    $(this).addClass('hidden');
  }
});

$(".displayhide").click(function() {
  $('#hiddenrows .visible').slice(0, 1).addClass('hidden');
  if ($('#hiddenrows .visible').length == 1) {
    $(this).addClass('hidden');
		$(".display").removeClass('hidden');
  }
});
/* end hide/show feature */


//end loader timeout
//start typerwriter
/* import Typed from 'typed.js';

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

var typed = new Typed('.element', options); */

//turn off inspect element
/* document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
} */


	/* exec */
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	/* constitution */
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	/* constitution button */
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated bounceIn');
	}, {
		offset: '75%'
	});

	/* events */
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});

	/* paper plane */
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated bounceInDown');
	}, {
		offset: '75%'
	});

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });


    $("#to-top").mouseover(function() {
        $("#to-top-copy").animate({opacity: "1"}, "slow");
    });
    $("#to-top").mouseout(function() {
        $("#to-top-copy").animate({opacity: "0"}, "slow");
    });

});
