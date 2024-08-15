showLandmark('해변');

function showLandmark(place) {
    var placeDisplay = document.getElementById('placeDisplay');
    placeDisplay.innerHTML = ''; // 기존 내용 초기화

    // 선택한 장소에 따라 이미지 추가
    switch (place) {
        case '해변':
            for (var i = 1; i <= 4; i++) {
                var img = document.createElement('img');
                img.src = 'img/sec_best/' + i + '.jpg';
                img.style.width = '270px';
                img.style.height = '440px';
                placeDisplay.appendChild(img);
            }
            break;
        case '거리':
            for (var i = 5; i <= 8; i++) {
                var img = document.createElement('img');
                img.src = 'img/sec_best/' + i + '.jpg';
                img.style.width = '270px';
                img.style.height = '440px';
                placeDisplay.appendChild(img);
            }
            break;
        case '공원':
            for (var i = 9; i <= 12; i++) {
                var img = document.createElement('img');
                img.src = 'img/sec_best/' + i + '.jpg';
                img.style.width = '270px';
                img.style.height = '440px';
                placeDisplay.appendChild(img);
            }
            break;
        case '박물관':
            for (var i = 13; i <= 16; i++) {
                var img = document.createElement('img');
                img.src = 'img/sec_best/' + i + '.jpg';
                img.style.width = '270px';
                img.style.height = '440px';
                placeDisplay.appendChild(img);
            }
            break;
        default:
            placeDisplay.innerHTML = '장소 정보를 찾을 수 없습니다.';
            break;
    }
}

