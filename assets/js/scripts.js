$(document).ready(init);

$(window).resize(sizeContent);

$(window).scroll(scroller);

function init() {
	
	sizeContent();
    
	var navHeight = $(".nav-background").height();
    $('a[href*=\\#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
				if(true) targetOffset -= navHeight;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });

	$("#nav-cytosplore").addClass("nav-active-indicator");
    
    document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
        toggleResponsiveNav();
    });
    
    var navitems = document.querySelectorAll( ".nav-item" )
    for (var i = 0, len = navitems.length; i < len; i++) {
        navitems[i].addEventListener( "click", function() {
            if( $( window ).width() < 640 ){ toggleResponsiveNav(); }
        });
    }
}

function toggleResponsiveNav() {
    $('#nav-toggle').toggleClass( "active" );
    $('#nav-full').slideToggle(250);
    $('.nav-background').toggleClass("nav-toggled");
}

function resetResponsiveNav() {
    $('#nav-toggle').removeClass( "active" );
    $('#nav-full').hide();
    $('.nav-background').removeClass("nav-toggled");
}

function sizeContent() {
	
	var w = $('.main-wrapper').width() - 65;
	if( $( window ).width() >= 640 ) w -= 35;
	$('#actionvideo').width(w);
	$('#actionvideo').height(w*9/16);
    
    resetResponsiveNav();
    
    if($( window ).width() < 640)
    {
        var hamburger = ($( window ).width() * 0.95 - 45) + "px"; 
        $('#nav-hamburger').css("left", hamburger);
        
        $('#nav-hamburger').show();
        $('#nav-full').hide();
        
    } else {
        $('#nav-hamburger').hide();
        $('#nav-full').show();
    }
}
function scroller() {
	
	var scrollPosition = $(window).scrollTop() + 100;
	
	var p0 = 0;
	var p1 = $("#team").offset().top;
	var p2 = $("#publications").offset().top;
	var p3 = $("#get").offset().top;
	
	if( scrollPosition > p3 || $(window).scrollTop() + $(window).height() > $(document).height() - 100 )
	{
		$("#nav-cytosplore").removeClass("nav-active-indicator");
		$("#nav-team").removeClass("nav-active-indicator");
		$("#nav-publications").removeClass("nav-active-indicator");
		$("#nav-download").addClass("nav-active-indicator");
		$("#nav-about").removeClass("nav-active-indicator");
	}
	else if( scrollPosition > p2 )
	{
		$("#nav-cytosplore").removeClass("nav-active-indicator");
		$("#nav-team").removeClass("nav-active-indicator");
		$("#nav-publications").addClass("nav-active-indicator");
		$("#nav-download").removeClass("nav-active-indicator");
		$("#nav-about").removeClass("nav-active-indicator");
	}
	else if( scrollPosition > p1 )
	{
		$("#nav-cytosplore").removeClass("nav-active-indicator");
		$("#nav-team").addClass("nav-active-indicator");
		$("#nav-publications").removeClass("nav-active-indicator");
		$("#nav-download").removeClass("nav-active-indicator");
		$("#nav-about").removeClass("nav-active-indicator");
	}
	else
	{
		$("#nav-cytosplore").addClass("nav-active-indicator");
		$("#nav-team").removeClass("nav-active-indicator");
		$("#nav-publications").removeClass("nav-active-indicator");
		$("#nav-download").removeClass("nav-active-indicator");
		$("#nav-about").removeClass("nav-active-indicator");
	}
}