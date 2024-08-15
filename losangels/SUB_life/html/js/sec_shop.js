// 해당 부분 이동
$(function() {
    // 쇼핑 GNB 클릭 시 sec_shop로 이동
    $('header .gnb li:nth-child(3) a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#sec_shop').offset().top
        }, 600);
    });
});


//작은 이미지 클릭시 큰이미지 변경
const bigImg = document.querySelector("#img_best01"); //큰이미지 변수저장
const smallImgs = document.querySelectorAll(".small"); //작은 이미지 저장
for (let i = 0; i<smallImgs.length; i++) {
    smallImgs[i].addEventListener('click', changePic); 
}
function changePic() {
    let newImg = this.src; //클릭 이벤트가 발생한 대상의 src값을 변수에 저장
    bigImg.setAttribute('src', newImg); //newImg가 가지고 있는 작은 이미지의 src 속성을 큰 이미지의 src 경로로 대체
}


// 작은 이미지 클릭 시 desc_area 변경
const descAreas = document.querySelectorAll("#desc_area");
for (let i = 0; i < smallImgs.length; i++) {
    smallImgs[i].addEventListener('click', function () {
        // 작은 이미지의 인덱스에 해당하는 desc_area를 보여주고 나머지는 숨김
        for (let j = 0; j < descAreas.length; j++) {
            if (i === j) {
                descAreas[j].classList.add('on');
            } else {
                descAreas[j].classList.remove('on');
            }
        }

        // 선택된 작은 이미지를 큰 이미지에 표시
        let newImg = this.src;
        bigImg.setAttribute('src', newImg);
    });
}

// address에 마우스를 올리면 지도가 뜨고 X표시 누르면 닫기
document.addEventListener("DOMContentLoaded", function() {
    const addressLinks = document.querySelectorAll('.address');
    const mapPopups = document.querySelectorAll('.map');
    const closeButtons = document.querySelectorAll('.close');

    addressLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // 해당 주소의 지도 팝업을 보여주기
            mapPopups[index].classList.add('on');
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 닫기 버튼을 누르면 팝업 닫기
            this.closest('.map').classList.remove('on');
        });
    });
});

// call을 누르면 전화걸기
document.addEventListener("DOMContentLoaded", function() {
    const callLinks = document.querySelectorAll('.call');

    callLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // a 태그의 텍스트 가져오기
            const buttonText = this.innerText.trim();

            // 전화 걸기 여부 확인
            const confirmCall = confirm(`${buttonText}\n전화하시겠습니까?`);

            // 확인 창 결과에 따라 동작 설정
            if (confirmCall) {
                alert('전화를 거는 중...');
                // 전화 걸기에 대한 추가 로직을 여기에 추가할 수 있습니다.
            } else {
                alert('전화 걸기가 취소되었습니다.');
            }
        });
    });
});