import { EventEmitter } from "events";

const sliderServices = () => {
    const slider = document.querySelector('.services-slider'),
        slide = slider.querySelectorAll('.slide');

    let currentSlide = 0,
        slidesToShow = 4;

    slide.forEach(elem => {
        //elem.style.flex = `0 0 ${Math.floor(100/slidesToShow)}%;`
        elem.style.flex = '0 0 25%';
    });

    document.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;

        if (!target.matches('.slider-arrow')) {
            return;
        }

        if (target.matches('#serv-arrow-right')) {
            currentSlide++;
            if (currentSlide >= slide.length - slidesToShow) {
                currentSlide = 0;
            }
            slider.style.transform = `translateX(-${currentSlide * 25}%)`;
        }

        if (target.matches('#serv-arrow-left')) {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slide.length - slidesToShow;
            }
            slider.style.transform = `translateX(-${currentSlide * 25}%)`;
        }

    });
};

export default sliderServices;