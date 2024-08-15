// 관광명소(GNB) 누르면 이동
$(function() {
    let tab = $('.tab li');

    $('header .gnb li:nth-child(1) a').on('click', function(event) {
        event.preventDefault();

        let mainBottom = $('main').offset().top + $('main').outerHeight();
        $('html, body').animate({scrollTop: mainBottom}, 600);
    });
});

// 버튼(tab)을 누르면 이미지 변경
$(function() {
    let tab = $('.tab li');

    tab.on('click', function(){
        let idx = $(this).index();
        let tab_cont = $(this).parents('.tab').siblings('.tab_content').eq(idx);

        // 1. 클릭된 li에 on 클래스 추가
        $(this).addClass('on');

        // 현재 클릭된 li의 형제요소들은 클래스 제거
        $(this).siblings().removeClass('on');

        // tab_content에도 add/remove 클래스 적용
        tab_cont.addClass('on');
        tab_cont.siblings().removeClass('on');

        // sec_best에 on 클래스 추가/제거
        $('#sec_best').addClass('on');
        $('#sec_best').siblings().removeClass('on');
    });

    $(".pic").on('mouseover', function(){

        $(this).find('span').stop().animate({
            opacity: 1
        });
        $(this).find('.text').stop().animate({
            bottom: '-30%'
        });
    }).on('mouseout', function() {
        $(this).find('span').stop().animate({
            opacity: 0
        });
        $(this).find('.text').stop().animate({
            bottom: '-120%'
        });
    });
});