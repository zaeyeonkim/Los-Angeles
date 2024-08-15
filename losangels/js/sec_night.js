// 해당 부분 이동
$(function() {
    // 나이트 GNB 클릭 시 sec_night로 이동
    $('header .gnb li:nth-child(4) a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#sec_night').offset().top
        }, 600);
    });
});

// mouseover효과
    var bigText = document.getElementById('big_text');
    var smallTexts = document.querySelectorAll('.text_inner.small_text');

    // 마우스가 올라갔을 때 이벤트 리스너 추가
    function addMouseoverEvent(element) {
        element.addEventListener('mouseover', function () {
            bigText.classList.add('active');
        });
    }

    // 마우스가 벗어났을 때 이벤트 리스너 추가
    function addMouseoutEvent(element) {
        element.addEventListener('mouseout', function () {
            bigText.classList.remove('active');
        });
    }

    // 각 small text에 이벤트 리스너 추가
    smallTexts.forEach(function (smallText) {
        addMouseoverEvent(smallText);
        addMouseoutEvent(smallText);
    });
