/* =========================================================
   Cafe Ondo 오픈 안내 페이지 — JavaScript 과제

   아래 6개 기능을 순서대로 완성하세요.
   각 블록 위 주석에 적힌 선택자(class, id) 이름을 그대로 사용해야
   HTML·CSS와 연결됩니다. 이름이 다르면 동작하지 않습니다.
   ========================================================= */


/* =========================================================
   1. 헤더 메뉴 토글
   - 버튼: .btn-menu
   - 메뉴: .main-nav
   - 버튼을 클릭하면 .main-nav에 'open-menu' 클래스를 토글한다.
   - 버튼 글자를 'Menu' ↔ 'Close'로 바꾼다.
   ========================================================= */
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
    if (btn.innerHTML === 'Menu') {
        btn.innerHTML = 'Close';
    } else {
        btn.innerHTML = 'Menu';
    }
});

/* =========================================================
   2. 다크 모드
   - 버튼: .mode-switch
   - 버튼을 클릭하면 body에 'dark' 클래스를 토글한다.
   - body에 'dark' 클래스가 있으면 버튼 글자를 '☀️', 없으면 '🌙'로 바꾼다.
   ========================================================= */
const themeBtn = document.querySelector('.mode-switch');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        themeBtn.innerHTML = '☀️';
    } else {
        themeBtn.innerHTML = '🌙';
    }
});

/* =========================================================
   3. Menu 카테고리 탭
   - 버튼: .cat-btn (여러 개, 각 버튼에는 data-category 속성이 있다)
   - 패널: .cat-panel (여러 개, 버튼의 data-category 값과 같은 id를 가진다)
   - 버튼을 클릭하면:
     ① 모든 버튼과 패널에서 'active' 클래스를 제거한다.
     ② 클릭한 버튼에 'active'를 추가한다.
     ③ 클릭한 버튼의 data-category 값과 같은 id를 가진 패널에 'active'를 추가한다.
   ========================================================= */
const tabBtns = document.querySelectorAll('.cat-btn');
const tabPanels = document.querySelectorAll('.cat-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // ① 모든 버튼과 패널에서 'active' 클래스를 제거한다.
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        // ② 클릭한 버튼에 'active'를 추가한다.
        btn.classList.add('active');

        // ③ 클릭한 버튼의 data-category 값과 같은 id를 가진 패널에 'active'를 추가한다.
        const category = btn.getAttribute('data-category');
        document.getElementById(category).classList.add('active');
    });
});

/* =========================================================
   4. 사진 갤러리
   - 큰 이미지: .photo-main
   - 작은 이미지(썸네일): .photo-list 안의 img (여러 개)
   - 썸네일을 클릭하면:
     ① 큰 이미지의 src, alt를 클릭한 썸네일의 src, alt로 바꾼다.
     ② 모든 썸네일에서 'active' 클래스를 제거한다.
     ③ 클릭한 썸네일에 'active'를 추가한다.
   ========================================================= */
const galleryMain = document.querySelector('.photo-main');
const galleryThumbs = document.querySelectorAll('.photo-list img');

galleryThumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    // 큰 이미지의 주소(src)와 설명(alt)을 클릭한 썸네일 것으로 바꾼다.
    galleryMain.src = thumb.src;
    galleryMain.alt = thumb.alt;

    // 선택 표시(active)를 클릭한 썸네일로 옮긴다.
    galleryThumbs.forEach((t) => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

/* =========================================================
   5. 예약 요청사항 글자 수 세기
   - 입력 칸: .form-message (textarea, maxlength="200")
   - 표시 문단: .msg-count
   - 글자를 입력할 때마다('input' 이벤트):
     ① 입력된 글자 수를 '숫자 / 200자' 형식으로 .msg-count에 표시한다.
     ② 글자 수가 180자 이상이면 .msg-count에 'warn' 클래스를 추가하고,
        180자 미만이면 'warn' 클래스를 제거한다.
   ========================================================= */

const textarea = document.querySelector('.form-message');
// .msg-count 요소를 가져와 charCount 변수에 저장
const charCount = document.querySelector('.msg-count');

// textarea 요소에 input 이벤트 리스너를 추가
textarea.addEventListener('input', () => {
    // textarea의 현재 글자 수를 가져와 length 변수에 저장
    const length = textarea.value.length;
    // charCount 요소의 텍스트를 현재 글자 수와 최대 글자 수(200)를 표시하도록 업데이트
    charCount.textContent = `${length} / 200자`;
    if (length >= 180) {
        charCount.classList.add('warn');
    } else {
        charCount.classList.remove('warn');
    }
});


/* =========================================================
   6. 실시간 시계 (날짜 + 시각)
   - 날짜 표시: .now-date
   - 시각 표시: .now-time
   - 현재 날짜(년, 월, 일, 요일)를 '2026년 11월 7일 (토)' 형식으로 .now-date에 표시한다.
   - 현재 시각(시:분:초)을 '09:05:03' 형식(두 자리, 0으로 채움)으로 .now-time에 표시한다.
   - 1초마다 자동으로 갱신되어야 한다.
   ========================================================= */
const clockDate = document.querySelector('.now-date');
const clockTime = document.querySelector('.now-time');
const days = ['일', '월', '화', '수', '목', '금', '토'];

function updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
    const date = now.getDate();
    const day = days[now.getDay()]; //요일은 0(일)부터 6(토)까지
    clockDate.textContent = `${year}년 ${month}월 ${date}일 ${day}`;

    // ----- 시각---------
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clockTime.textContent = `${h}:${m}:${s}`;
}

updateClock(); // 페이지 로드 시 즉시 시계 업데이트

setInterval(updateClock, 1000); // 1초마다 시계 업데이트