const sliderServices = () => {
    const slider = document.querySelector('.services-slider'),
        slide = slider.querySelectorAll('.slide');

    console.log(slide);

    // const slidesToShow = 5;
    // const widthSlide = Math.floor(100/slidesToShow);
    // slider.style.flex = `0 0 ${widthSlide}% `;


    let currentSlide = 0;

    // const prevSlide = (elem, index, strClass) => {
    //     elem[index].classList.remove(strClass);
    // };
    // const nextSlide = (elem, index, strClass) => {
    //     elem[index].classList.add(strClass);
    // };

    slider.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        console.log(target);

        if (!target.matches('.slider-arrow')) {
            return;
        }

        //prevSlide(slide, currentSlide, 'gallery-slide-active');

        if (target.matches('#serv-arrow-right')) {
            currentSlide++;
            slider.style.transform = `translateX(-${currentSlide * 25}%)`;
            console.log('right');
        }
        if (target.matches('#serv-arrow-left')) {
            currentSlide--;
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        //nextSlide(slide, currentSlide, 'gallery-slide-active');
    });
};

export default sliderServices;