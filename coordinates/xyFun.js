document.addEventListener('DOMContentLoaded', () => {

    const point = document.getElementsByClassName('point');

    function addXY(x, y) {
        point[0].classList.remove('hide')
        point[0].style.marginTop = `${y}px`
        point[0].style.marginLeft = `${x}px`
    }
    addXY(100, 100)

});