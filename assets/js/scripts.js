$(document).ready(init);

$(window).resize(sizeContent);

$(window).scroll(scroller);

function init() {
	
	sizeContent();

	$("#nav-cytosplore").addClass("nav-active-indicator");
}

function sizeContent() {
	
	var w = $('.main-wrapper').width() - 65;
	if( $( window ).width() > 641 ) w -= 35;
	$('#actionvideo').width(w);
	$('#actionvideo').height(w*9/16);
}

$(function(){
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
});

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