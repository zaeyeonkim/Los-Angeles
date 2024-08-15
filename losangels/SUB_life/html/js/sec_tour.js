// 해당 부분 이동
$(function() {
    // 나이트 GNB 클릭 시 sec_shop로 이동
    $('header .gnb li:nth-child(5) a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#sec_tour').offset().top
        }, 600);
    });
});