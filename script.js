const forceDivs = document.querySelectorAll('.force');

forceDivs.forEach(div => {
    div.addEventListener('click', () => {
        forceDivs.forEach(d => d.style.backgroundColor = '');

        div.style.backgroundColor = '#e0e0e0';
    });
});

////////////////////////


document.querySelector('.haha').addEventListener('click', () => {
    let sneakers = document.querySelector('.puma_js')
    if (sneakers) {
        if (sneakers.style.display === 'block') {
            sneakers.style.display = 'none';
        } else {
            sneakers.style.display = 'block';
        }
    }
    // document.querySelector('.puma_js').style.display = '';
});

//////

const size = document.querySelectorAll('.size');

size.forEach(div => {
    div.addEventListener('click', () => {
        size.forEach(d => d.style.backgroundColor = '');
        size.forEach(d => d.style.color = '');

        div.style.backgroundColor = '#F14F4F';
        div.style.color = 'white'
    });
});

// ////

document.querySelector('.show_more_btn').addEventListener('click', () => {
    document.querySelector('.sneakers_catalog_all').style.display = 'block';
});

///////////

document.querySelector('.plus_img').addEventListener('click', function () {
    const complexAll = document.querySelector('.plus .complex_all');
    if (complexAll) {
        if (complexAll.style.display === 'block') {
            complexAll.style.display = 'none';
        } else {
            complexAll.style.display = 'block';
        }
    }
});

document.querySelector('.no_img').addEventListener('click', function () {
    const complex = document.querySelector('.no .complex');
    if (complex) {
        if (complex.style.display === 'block') {
            complex.style.display = 'none';
        } else {
            complex.style.display = 'block';
        }
    }
});

/////

const slider = document.querySelector('.header_bg');
const images = ['air_max2.jpg', 'air_max3.jpg', 'air_max4.jpg', 'air_max5.jpg', 'air_max6.jpg'];

let index = 0;

function moveSlider() {
    if (index >= images.length - 1) {
        index = 0;
    } else {
        index++;
    }
    slider.style.backgroundImage = `url('./public/${images[index]}')`;
}

setInterval(moveSlider, 1000);

/////

const page = document.querySelectorAll('.bg_three');
const nextBtn = document.querySelectorAll('.next_step_btn');
let pages = 0;

page.forEach((page, index) => {
    if (index !== 0) {
        page.style.display = 'none';
    }
});

nextBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (pages < page.length - 1) {
            page[pages].style.display = 'none';
            pages++;
            page[pages].style.display = 'block';
        }
    });
});

////
