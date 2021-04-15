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

// ハンバーガーメニュークリック時に追加されたclassを画面クリック時に削除
document.getElementById('ham-nav-menu').addEventListener('click', function() {
	removeClass();
	removeFixed();
});

// スムーズスクロール
window.addEventListener('DOMContentLoaded', () => {
	const anchorLinks = document.querySelectorAll('a[href^="#"]');
	const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

	anchorLinksArr.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			const targetId = link.hash;
			const targetElement = document.querySelector(targetId);
			const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
			window.scrollTo({
				top: targetOffsetTop,
				behavior: 'smooth'
			});
		});
	});
});
