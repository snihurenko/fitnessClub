
const sliderServices = () => {
    const slider = document.querySelector('.services-slider'),
        slide = slider.querySelectorAll('.slide');

    let currentSlide = 0,
        slidesToShow = 4;

    slide.forEach(elem => {
        elem.style.flex = '0 0 25%';
        elem.style.margin = '0 auto';
        console.log(22);
    });

    document.addEventListener('click', event => {
        const target = event.target;

        if (!target.matches('.slider-arrow')) {
            return;
        }

        if (target.matches('#serv-arrow-right')) {
            event.preventDefault();
            currentSlide++;
            if (currentSlide >= slide.length - slidesToShow) {
                currentSlide = 0;
            }
            slider.style.transform = `translateX(-${currentSlide * 25}%)`;
        }

        if (target.matches('#serv-arrow-left')) {
            event.preventDefault();
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slide.length - slidesToShow;
            }
            slider.style.transform = `translateX(-${currentSlide * 25}%)`;
        }

    });
};

export default sliderServices;