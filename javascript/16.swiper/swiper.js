creatSwiper();

function creatSwiper(){
    let output = `
            <!--클래스명은 수정하면 안 됨 ! ! ! id를 추가한다거나~는 가능하다-->
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88076/88076232412_727.jpg" alt="위키드 포스터"></div>
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88076/88076231756_727.jpg" alt="위키드 포스터 - 초록마녀"></div>
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88076/88076231755_727.jpg" alt="위키드 포스터 - 분홍마녀"></div>
            ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
        
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>`
        document.querySelector(".swiper").innerHTML = output;

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        slidesPerView: 1, 
        //노출되는 이미지 수 설정 (없으면 자동으로 1장)
        autoplay: {delay: 3000, disableOnInteration: false},
        //초마다 자동 넘기기
        loop: true,
    
        // If we need pagination
        pagination: {
        // el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
        // el: '.swiper-scrollbar',
        },
    });
}

