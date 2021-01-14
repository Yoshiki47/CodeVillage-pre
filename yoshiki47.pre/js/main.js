// 各idにクラスを追加
function ham() {
    document.getElementById('top-span').classList.toggle('active1');
    document.getElementById('center-span').classList.toggle('active2');
    document.getElementById('bottom-span').classList.toggle('active3');
    document.getElementById('ham-nav-menu').classList.toggle('in');
    document.getElementById('ham').classList.toggle('ham-fixed');
}

// ハンバーガーメニュークリック時にクラス追加
document.getElementById('ham').addEventListener('click', function() {
    ham();
});

// 各idからクラスを削除
function removeClass() {
    document.getElementById('top-span').classList.remove('active1');
    document.getElementById('center-span').classList.remove('active2');
    document.getElementById('bottom-span').classList.remove('active3');
    document.getElementById('ham-nav-menu').classList.remove('in');
}

// id="ham"からham-fixedクラスを削除
function removeFixed() {
    document.getElementById('ham').classList.remove('ham-fixed');
}

// ハンバーがアーメニュークリック時に追加されたclassを画面クリック時に削除
document.getElementById('ham-nav-menu').addEventListener('click', function() {
    removeClass();
    removeFixed();
});


// スムーズスクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 0
        const target = rect + offset - gap;
        window.scrollTo( {
            top: target,
            behavior: 'smooth',
        });
    });
}