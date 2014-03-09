//  
jQuery(document).ready(function ($) {
	


	//banner 自适应
	$(window).load(ResetBannerBGBox);

	$(window).resize(ResetBannerBGBox);  

	
	function ResetBannerBGBox()
	{
		var minDafultWidth=1280;
		var rate=2560/1558;
		var width=$(window).width();

		// 用于 MainIntroductionAnimationFunction 动画效果
		currentScreenHeight=$(window).height();

		//
		if(width>minDafultWidth)
		{
			
			//手动设置背景图大小
			$(".BannnerBG_Box").css("width",width);
			$(".Footer").css("width",width);
		}
		else if(width>1024)
		{
			
			//设置背景图宽度高度与footer宽度
			$(".BannnerBG_Box").css("width",width);
			var height=width/rate;
			$(".BannnerBG_Box").css("height",height);
			
			$(".Footer").css("width",width);
		}
		else
		{
			
			//当小到出现滚动条后,即强制大小
			$(".BannnerBG_Box").css("width",1024);
			var height=width/rate;
			$(".BannnerBG_Box").css("height",height);
			
			$(".Footer").css("width",1024);
		}
		
		
		resetBannerElement();
	}

	function resetBannerElement()
 	{
 		
 		var height=$(".BannerBG_Image").height();
 		
 		var offset=height/3;
 		var rate=338/814;
 		
 		//设置phoneview大小 
 		var imageHeight=offset/(rate*0.9);
 		$("#PhoneViewBox img").css("height",imageHeight);
 		
 		//设置位置
 		$("#PhoneViewBox").css("margin-top",offset);
 		$("#leftPanelElementBox ").css("margin-top",offset);
 		
 	}

 	//滚动动画
 	//初始化 隐藏
 	
 	//$(".Main_IntroductionBox").fadeTo(1,0.01);

 	var currentScreenHeight=$(window).height();
 	//该值因为介绍图的长短有所变化
 	var RateOfChanging=1.5;
 	$(window).scroll(MainIntroductionAnimationFunction);

 	function MainIntroductionAnimationFunction()
 	{
 		var scrollBarToTop= $(window).scrollTop();
 		var FadeToFunctionFactor=((scrollBarToTop-currentScreenHeight)/currentScreenHeight)*RateOfChanging;

 		if(FadeToFunctionFactor>=0&&FadeToFunctionFactor<=1)
 		{
 			//animate implementation
			$(".Main_IntroductionBox").animate({opacity: FadeToFunctionFactor},1);

 			//fadeto implementation
 			//$(".Main_IntroductionBox").fadeTo(10,FadeToFunctionFactor);
 		}
 		else if(FadeToFunctionFactor<0)
 		{
 			//$(".Main_IntroductionBox").fadeTo("fast",0.01);
 		}



 		
 	}



});