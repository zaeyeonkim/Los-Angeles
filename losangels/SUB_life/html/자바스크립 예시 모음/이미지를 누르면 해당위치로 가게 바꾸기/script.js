var mainImage = document.getElementById('mainImage');
var contentDiv = document.getElementById('content');
var title = document.getElementById('title');
var paragraph = document.getElementById('paragraph');

mainImage.addEventListener('click', function() {
    contentDiv.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// 스크롤 이벤트를 감지하여 요소들의 투명도를 처리합니다.
window.addEventListener('scroll', function() {
    var titleRect = title.getBoundingClientRect();
    var paragraphRect = paragraph.getBoundingClientRect();
    
    // 제목이 스크린에 나타나면 투명도를 서서히 조절하여 보이게 합니다.
    if (titleRect.top < window.innerHeight && titleRect.bottom >= 0) {
        var opacity = (window.innerHeight - titleRect.top) / window.innerHeight;
        title.style.opacity = opacity;
        title.style.transition = 'opacity 0.5s ease';
    }

    // <p> 요소의 위치에 따라 투명도를 조절하여 보이게 합니다.
    if (paragraphRect.top < window.innerHeight && paragraphRect.bottom >= 0) {
        paragraph.style.opacity = 1;
        paragraph.style.transition = 'opacity 0.5s ease';
    } else {
        paragraph.style.opacity = 0;
    }
});