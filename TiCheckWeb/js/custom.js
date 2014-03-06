//  
jQuery(document).ready(function ($) {
	
	$(window).load(ResetBannerBGBox);

	$(window).resize(ResetBannerBGBox);  



	function ResetBannerBGBox()
	{
		var minDafultWidth=1280;
		var rate=2560/1558;
		var width=$(window).width();
		
		if(width>minDafultWidth)
		{
			$(".BannnerBG_Box").css("width",width);
		}
		else if(width>1024)
		{
			
			$(".BannnerBG_Box").css("width",width);
			
			var height=width/rate;
			$(".BannnerBG_Box").css("height",height);
		}
		else
		{
			
			$(".BannnerBG_Box").css("width",1024);
			
			var height=width/rate;
			$(".BannnerBG_Box").css("height",height);
		}
		
		
		resetBannerElement();
	}

	function resetBannerElement()
 	{
 		
 		var height=$(".BannerBG_Image").height();
 		
 		var offset=height/3;
 		var rate=338/814;
 		
 		var imageHeight=offset/(rate*0.9);
 		$("#PhoneViewBox img").css("height",imageHeight);
 		
 		$("#PhoneViewBox").css("margin-top",offset);
 		$("#leftPanelElementBox ").css("margin-top",offset);
 		
 	}




















    function resetBannerBG2()
    {

	//
		var rate=2560/1993;
		var width=$(window).width();
		if(width<=1280)
		{
			width=1280;
			$(".BannnerBG_Box").css("width",width);
		}
			//
			var height=rate*width;
			$(".BannnerBG_Box").css("height",height);

			var offset=resetBannerElement(height);
			
			//
			//var marginTop=-($(".BannerElementBox").height()+$(".Header").height()+offset);
			//$(".BannnerBG_Box").css("margin-top",marginTop);

			//
			$(".Main_IntroductionBox").css("margin-top",-height*0.4);



		/*}
		else
		{
			var height=rate*width;
			$(".BannnerBG_Box").css("height",height);

			var marginTop=-($(".BannerElementBox").height()+$(".Header").height());
			$(".BannnerBG_Box").css("margin-top",marginTop);

			$(".Main_IntroductionBox").css("margin-top",-height*0.4);
		}*/
    }


 	
});