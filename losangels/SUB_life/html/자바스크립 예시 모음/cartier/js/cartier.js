$(function(){
	//마우스오버시
	$('article').on('mouseover', function() {
		//변수 vid에 video 파일을 참조
		var vid = $(this).find('video').get(0);
		//동영상의 재생위치를 처음으로 설정
		vid.currentTime = 50;
		vid.play();
		
		//article의 width 변화
		$(this).stop().animate({
			width: '35%'
		}, 1000, function(){
			//article의 너비를 35%로 넓힌 후 실행
			$(this).find('h3').stop().animate({
				right: '10px'
			},400);
			$(this).find('p').stop().animate({
				right: '10px'
			},800);
		});
		$(this).find('video').stop().animate({
			opacity: '0.9'
		},1200)
	});
	
	/*마우스 아웃시*/
	$('article').on('mouseout', function() {
		//변수 vid에 video 파일 참조
		var vid = $(this).find('video').get(0);
		vid.pause();
		
		$(this).stop().animate({width: '12%'}, 700);
		$(this).find('video').stop().animate({opacity: 0}, 1500);
		$(this).find('h3').stop().animate({right: '-310px'}, 200);
		$(this).find('p').stop().animate({right: '-310px'}, 500);
	});
});








