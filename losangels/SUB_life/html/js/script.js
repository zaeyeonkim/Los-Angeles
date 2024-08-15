$(function() {

    $('.menu').on('click', function(){
      $(this).addClass('on'); 
      //css에서 미리 선언해놓은 클래스명을 추가
      //클래스이 추가되는 것이므로 클래스 구분자(.)을 붙이지 않음.
      $('.gnb').animate({
          left: 0
      })
  });
  $('.gnb').on('click', function() {
      $('.menu').removeClass('on'); 
      $('.gnb').animate({
          left: '-100%'
      })
  })
  })