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

var swiper = new Swiper(".tourSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  mousewheel: true,
  mousewheelControl: true
});

// @media 쿼리 추가
var mediaQuery = window.matchMedia("(max-width: 431px)");
function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    // 화면 너비가 431px 이하일 때
    swiper.params.slidesPerView = 1;
    swiper.update();
  } else {
    // 화면 너비가 431px 이상일 때
    swiper.params.slidesPerView = 3;
    swiper.update();
  }
}

// 페이지 로딩시 한 번 호출
handleMediaQuery(mediaQuery);

// 화면 크기 변경 감지시 호출
mediaQuery.addListener(handleMediaQuery);

// Pagination 아이템 색상 변경
document.querySelectorAll('.swiper-pagination-bullet').forEach(function(bullet) {
bullet.style.backgroundColor = '#eb168a';   
});
