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

// id="ham"からha,-fixedクラスを削除
function removeFixed() {
    document.getElementById('ham').classList.remove('ham-fixed');
}

// ハンバーがアーメニュークリック時に追加されたclassを画面クリック時に削除
document.getElementById('ham-nav-menu').addEventListener('click', function() {
    removeClass();
    removeFixed();
});