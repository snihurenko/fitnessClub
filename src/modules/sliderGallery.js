const sliderGallery = () => {
    const slide = document.querySelectorAll('.gallery-slide'),
        dot = document.querySelectorAll('.slider-dots'),
        slider = document.querySelector('.gallery-slider');

    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlider = () => {
        prevSlide(slide, currentSlide, 'gallery-slide-active');
        prevSlide(dot, currentSlide, 'gallery-dot-active');      
        currentSlide--;
        if (currentSlide <= slide.length - (slide.length + 1)) {
            currentSlide = slide.length -1;
        }
        nextSlide(slide, currentSlide, 'gallery-slide-active');
        nextSlide(dot, currentSlide, 'gallery-dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlider, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        
        if (!target.matches('.slider-arrow, .slider-dots')) {
            return;
        }

        prevSlide(slide, currentSlide, 'gallery-slide-active');
        prevSlide(dot, currentSlide, 'gallery-dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide--;
        }
        if (target.matches('#arrow-left')) {
            currentSlide++;
        }
        if (target.closest('.slider-dots')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'gallery-slide-active');
        nextSlide(dot, currentSlide, 'gallery-dot-active');
    });

    slider.addEventListener('mouseover', event => {
        if (event.target.matches('.slider-arrow') || event.target.matches('.slider-dots')) {
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', event => {
        if (event.target.matches('.slider-arrow') || event.target.matches('.slider-dots')) {
            startSlide();
        }
    });

    startSlide(3000);
};

const showDots = () => {
    const dotsContainer = document.querySelector('.slider-dots-container'),
        slide = document.querySelectorAll('.gallery-slide');

    for (let i = 0; i < slide.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('slider-dots');
        dotsContainer.append(dot);
    }

    const firstDot = document.querySelectorAll('.slider-dots');
    firstDot[slide.length - 1].classList.add('gallery-dot-active');
};

export { sliderGallery, showDots };