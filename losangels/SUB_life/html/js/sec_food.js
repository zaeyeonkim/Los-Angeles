// 해당 부분 이동
$(function() {
    // 쇼핑 GNB 클릭 시 sec_shop로 이동
    $('header .gnb li:nth-child(2) a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#sec_food').offset().top
        }, 600);
    });
});
