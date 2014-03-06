//  
jQuery(document).ready(function ($) {
	
	
	$(window).load(ResetBannerBGBox);

	$(window).resize(ResetBannerBGBox);  

	
	function ResetBannerBGBox()
	{
		var minDafultWidth=1280;
		var rate=2560/1558;
		var width=$(window).width();
		
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

});