//  
jQuery(document).ready(function ($) {
	
	$(window).load(resetBannerBG);

	$(window).resize(resetBannerBG);          
    function resetBannerBG()
    {

	//
		var rate=2560/1993;
		var width=$(window).width();
		var height=rate*width;
		$(".BannnerBG_Box").css("height",height);

		var marginTop=-($(".BannerElementBox").height()+$(".Header").height());
		$(".BannnerBG_Box").css("margin-top",marginTop);

		$(".Main_IntroductionBox").css("margin-top",-height*0.4);
    }
 
});