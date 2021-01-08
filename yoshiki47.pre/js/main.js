function ham() {
    document.getElementById('top-span').classList.toggle('active1');
    document.getElementById('center-span').classList.toggle('active2');
    document.getElementById('bottom-span').classList.toggle('active3');
    document.getElementById('ham-nav-menu').classList.toggle('in');
    document.getElementById('ham').classList.toggle('ham-fixed');
}
document.getElementById('ham').addEventListener('click', function() {
    ham();
});