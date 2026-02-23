/* ==================================================== */
/* ==================================================== */
// sub1

// section1 탭
$(".board li a").click(function () {
    $(this).parent().addClass("on").siblings().removeClass("on")
});


// var swiper = new Swiper(".course-swiper2", {
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

var swiper = new Swiper(".course-swiper2", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 600,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
/* ==================================================== */

// section4 슬라이더 (리뷰)
if ($(".review-swiper").length > 0) {
    new Swiper(".review-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        loopedSlides: 10,
        loopAdditionalSlides: 5,
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        freeMode: true,
        freeModeMomentum: false,
        allowTouchMove: false,
        simulateTouch: false,  // 👈 추가! 마우스 드래그 차단
        grabCursor: false,  // 👈 추가! 커서 변경 차단
        preventClicks: true,  // 👈 추가! 클릭 방지
        preventClicksPropagation: true,  // 👈 추가!
    });
}

/* ==================================================== */
// sub2

// section1 슬라이더
var sceneSwiper = new Swiper('.scene-Swiper', {  // HTML 클래스명은 그대로!
    loop: true,
    speed: 600,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    keyboard: {
        enabled: true,
    },

    touchRatio: 1,
    grabCursor: true,
});

// 카운팅
// counterUp 플러그인 사용
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 40,
        time: 1000
    });
});

/* ==================================================== */
// sub3

// section1 스와이퍼

var eventSwiper = new Swiper('.event-swiper', {
    loop: true,
    speed: 600,
    
    pagination: {
        el: '.page-indicator',
        type: 'fraction',
    },
    
    navigation: {
        nextEl: '.arrow-btn.next',
        prevEl: '.arrow-btn.prev',
    },
    
    keyboard: {
        enabled: true,
    },
    
    touchRatio: 1,
    grabCursor: true,
});

// section4 게시글
 // 각 게시판의 현재 페이지를 관리
        const boardState = {
            people: { currentPage: 1, totalPages: 3 },
            space: { currentPage: 1, totalPages: 3 }
        };

        // 버튼 상태 업데이트 함수
        function updateButtons(boardName) {
            const state = boardState[boardName];
            const boards = document.querySelectorAll('.board-magazine');
            let targetBoard = null;
            
            boards.forEach(board => {
                const pageBtn = board.querySelector(`[data-board="${boardName}"]`);
                if (pageBtn) {
                    targetBoard = board;
                }
            });
            
            if (!targetBoard) return;
            
            // 모든 버튼 찾기
            const firstBtn = targetBoard.querySelector('[data-action="first"]');
            const prevBtn = targetBoard.querySelector('[data-action="prev"]');
            const nextBtn = targetBoard.querySelector('[data-action="next"]');
            const lastBtn = targetBoard.querySelector('[data-action="last"]');
            
            // 첫 페이지일 때 << 와 < 비활성화
            if (state.currentPage === 1) {
                firstBtn.disabled = true;
                prevBtn.disabled = true;
            } else {
                firstBtn.disabled = false;
                prevBtn.disabled = false;
            }
            
            // 마지막 페이지일 때 >> 와 > 비활성화
            if (state.currentPage === state.totalPages) {
                nextBtn.disabled = true;
                lastBtn.disabled = true;
            } else {
                nextBtn.disabled = false;
                lastBtn.disabled = false;
            }
        }

        // 페이지 변경 함수
        function changePage(boardName, newPage) {
            const state = boardState[boardName];
            
            // 페이지 범위 체크
            if (newPage < 1 || newPage > state.totalPages) {
                return;
            }
            
            // 현재 페이지 업데이트
            state.currentPage = newPage;
            
            // 해당 게시판 찾기
            const boards = document.querySelectorAll('.board-magazine');
            let targetBoard = null;
            
            boards.forEach(board => {
                const pageBtn = board.querySelector(`[data-board="${boardName}"]`);
                if (pageBtn) {
                    targetBoard = board;
                }
            });
            
            if (!targetBoard) return;
            
            // 모든 post-list 숨기기
            const allLists = targetBoard.querySelectorAll('.post-list');
            allLists.forEach(list => {
                list.classList.remove('active');
            });
            
            // 새 페이지 보이기
            const newList = targetBoard.querySelector(`.post-list[data-page="${newPage}"]`);
            if (newList) {
                newList.classList.add('active');
            }
            
            // 모든 페이지 번호에서 active 클래스 제거
            const pageNumbers = targetBoard.querySelectorAll('.page-number');
            pageNumbers.forEach(num => {
                num.classList.remove('active');
            });
            
            // 현재 페이지 번호에 active 클래스 추가
            const currentPageNumber = targetBoard.querySelector(`.page-number[data-page="${newPage}"]`);
            if (currentPageNumber) {
                currentPageNumber.classList.add('active');
            }
            
            // 버튼 상태 업데이트
            updateButtons(boardName);
        }

        // 버튼 클릭 이벤트 처리
        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                if (this.disabled) return;
                
                const boardName = this.dataset.board;
                const action = this.dataset.action;
                const state = boardState[boardName];
                let newPage = state.currentPage;
                
                // 액션에 따라 페이지 계산
                switch(action) {
                    case 'first':
                        newPage = Math.max(1, state.currentPage - 2); // << : 2페이지 뒤로
                        break;
                    case 'prev':
                        newPage = state.currentPage - 1; // < : 1페이지 뒤로
                        break;
                    case 'next':
                        newPage = state.currentPage + 1; // > : 1페이지 앞으로
                        break;
                    case 'last':
                        newPage = Math.min(state.totalPages, state.currentPage + 2); // >> : 2페이지 앞으로
                        break;
                }
                
                changePage(boardName, newPage);
            });
        });

        // 페이지 번호 클릭 이벤트 처리
        document.querySelectorAll('.page-number').forEach(pageNum => {
            pageNum.addEventListener('click', function() {
                const boardName = this.dataset.board;
                const page = parseInt(this.dataset.page);
                changePage(boardName, page);
            });
        });

        // 초기 페이지 설정
        changePage('people', 1);
        changePage('space', 1);



