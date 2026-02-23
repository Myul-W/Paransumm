
// header 스크롤

$(function () {
    // 윈도우 스크롤 시 실행
    $(window).scroll(function () {
        //스크롤이 100 넘으면,
        if ($(this).scrollTop() > 100) {
            //.header_scrolled 클래스 추가
            $("#header").addClass("header_scrolled");
        } else {
            //스크롤이 위로 올라가면 클래스 제거
            $("#header").removeClass("header_scrolled");
        }
    });

    //마우스를 올렸을 때(hover 시)
    $("#header").hover(function () {
        //header_scrolled 클래스 제거
        $(this).removeClass("header_scrolled");
    },
        function () {
            //마우스가 나갔을 때, 스크롤이 100이상이면 다시 header_scrolled 적용
            if ($(window).scrollTop() > 100) {
                $(this).addClass("header_scrolled");
            }
        }
    );



    /* ==================================================== */

    // visual 슬라이더
    // 1. 썸네일 슬라이더
    var thumbs = new Swiper("#visual .thumbSwiper", {
        slidesPerView: 3,
        spaceBetween: 15,
        watchSlidesProgress: true,
    });

    // 2. 메인 슬라이더 연결
    var main = new Swiper("#visual .mainSwiper", {
        loop: true,
        effect: "fade", // 부드러운 전환
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: thumbs,
        },
    });

    /* ==================================================== */

    // section1 슬라이더
    var swiper = new Swiper('.section1_swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        // centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.section1_swiper-button-next',
            prevEl: '.section1_swiper-button-prev',
        },
    });
    /* ==================================================== */

    // section2 슬라이더
    const slides = document.querySelectorAll('.flex-slide');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            // 모든 슬라이드에서 active 클래스 제거
            slides.forEach(s => s.classList.remove('active'));
            // 클릭한 슬라이드에 active 클래스 추가
            slide.classList.add('active');
        });
    });

    /* ==================================================== */

    // // section3 슬라이더
    if ($('.section3_swiper').length > 0) {
        const imageSwiper = new Swiper('.section3_swiper', {
            slidesPerView: 3.5,
            spaceBetween: 30,
            scrollbar: { el: '.swiper-scrollbar', draggable: true }
        });

        // ⚠️ 오류 수정: textSwiper가 정의되어 있을 때만 실행하여 스크립트 멈춤 방지
        imageSwiper.on('slideChangeTransitionEnd', () => {
            if (typeof textSwiper !== 'undefined') {
                textSwiper.slideToLoop(imageSwiper.realIndex);
            }
        });
    }

    /* ==================================================== */
    // section5 스크롤

const $section5 = $('#section5');
if ($section5.length > 0) {
    const $cardRail = $('#cardRail');
    const stickyTop = 100;
    
    // 섹션 높이를 카드레일 높이만큼 동적으로 설정
    const cardRailHeight = $cardRail.outerHeight();
    const viewportHeight = $(window).height();

    // 🔧 카드레일이 끝까지 보이는 정확한 높이 계산
    const maxScroll = cardRailHeight - viewportHeight + stickyTop;
    $section5.css('height', maxScroll + viewportHeight);  // 딱 맞게 설정

    // $section5.css('height', cardRailHeight + viewportHeight);

    $(window).on('scroll', function () {
        const sectionOffsetTop = $section5.offset().top;
        const sectionHeight = $section5.outerHeight();
        const scrollTop = $(window).scrollTop();
        
        const sectionStart = sectionOffsetTop - stickyTop;
        const sectionEnd = sectionOffsetTop + sectionHeight - viewportHeight;

        if (scrollTop >= sectionStart && scrollTop <= sectionEnd) {
            const scrolledAmount = scrollTop - sectionStart;
            const maxScroll = cardRailHeight - viewportHeight + stickyTop;
            const limitedScroll = Math.min(scrolledAmount, maxScroll);
            
            $cardRail.css('transform', `translateY(-${limitedScroll}px)`);
        } else if (scrollTop < sectionStart) {
            $cardRail.css('transform', 'translateY(0px)');
        }
        // scrollTop > sectionEnd일 때는 마지막 위치 유지
    });
}
    /* ==================================================== */

    // section6 슬라이더
    if ($(".section6_swiper").length > 0) {
        new Swiper(".section6_swiper", {
            slidesPerView: 4.8,
            spaceBetween: 45,
            loop: true,
            speed: 2000,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            freeMode: true,
            freeModeMomentum: false,
        });
    }
});


  /* ==================================================== */
  /* ==================================================== */
    // sub1

    // section1 탭
$(function () {
    // 윈도우 스크롤 시 실행
    $(window).scroll(function () {
        //스크롤이 100 넘으면,
        if ($(this).scrollTop() > 100) {
            //.header_scrolled 클래스 추가
            $("#header").addClass("header_scrolled");
        } else {
            //스크롤이 위로 올라가면 클래스 제거
            $("#header").removeClass("header_scrolled");
        }
    });

    //마우스를 올렸을 때(hover 시)
    $("#header").hover(function () {
        //header_scrolled 클래스 제거
        $(this).removeClass("header_scrolled");
    },
        function () {
            //마우스가 나갔을 때, 스크롤이 100이상이면 다시 header_scrolled 적용
            if ($(window).scrollTop() > 100) {
                $(this).addClass("header_scrolled");
            }
        }
    );

    /* ==================================================== */

    // visual 슬라이더
    // 1. 썸네일 슬라이더
    var thumbs = new Swiper("#visual .thumbSwiper", {
        slidesPerView: 3,
        spaceBetween: 15,
        watchSlidesProgress: true,
    });

    // 2. 메인 슬라이더 연결
    var main = new Swiper("#visual .mainSwiper", {
        loop: true,
        effect: "fade", // 부드러운 전환
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: thumbs,
        },
    });

    /* ==================================================== */

    // section1 슬라이더
    var swiper = new Swiper('.section1_swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.section1_swiper-button-next',
            prevEl: '.section1_swiper-button-prev',
        },
    });

    /* ==================================================== */

    // section2 슬라이더
    const slides = document.querySelectorAll('.flex-slide');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            slides.forEach(s => s.classList.remove('active'));
            slide.classList.add('active');
        });
    });

    /* ==================================================== */

    // section3 슬라이더
    if ($('.section3_swiper').length > 0) {
        const imageSwiper = new Swiper('.section3_swiper', {
            slidesPerView: 3.5,
            spaceBetween: 30,
            scrollbar: { el: '.swiper-scrollbar', draggable: true }
        });

        imageSwiper.on('slideChangeTransitionEnd', () => {
            if (typeof textSwiper !== 'undefined') {
                textSwiper.slideToLoop(imageSwiper.realIndex);
            }
        });
    }

    /* ==================================================== */
    
    // section5 스크롤
    const $section5 = $('#section5');
    if ($section5.length > 0) {
        const $cardRail = $('#cardRail');
        const stickyTop = 100;
        
        const cardRailHeight = $cardRail.outerHeight();
        const viewportHeight = $(window).height();

        const maxScroll = cardRailHeight - viewportHeight + stickyTop;
        $section5.css('height', maxScroll + viewportHeight);

        $(window).on('scroll', function () {
            const sectionOffsetTop = $section5.offset().top;
            const sectionHeight = $section5.outerHeight();
            const scrollTop = $(window).scrollTop();
            
            const sectionStart = sectionOffsetTop - stickyTop;
            const sectionEnd = sectionOffsetTop + sectionHeight - viewportHeight;

            if (scrollTop >= sectionStart && scrollTop <= sectionEnd) {
                const scrolledAmount = scrollTop - sectionStart;
                const maxScroll = cardRailHeight - viewportHeight + stickyTop;
                const limitedScroll = Math.min(scrolledAmount, maxScroll);
                
                $cardRail.css('transform', `translateY(-${limitedScroll}px)`);
            } else if (scrollTop < sectionStart) {
                $cardRail.css('transform', 'translateY(0px)');
            }
        });
    }

    /* ==================================================== */

    // section6 슬라이더
    if ($(".section6_swiper").length > 0) {
        new Swiper(".section6_swiper", {
            slidesPerView: 4.8,
            spaceBetween: 45,
            loop: true,
            speed: 2000,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            freeMode: true,
            freeModeMomentum: false,
        });
    }
}); 