const sliderMainPage = () => {
    const slider = document.querySelector('.main-slider'),
        slide = slider.querySelectorAll('.slide');

    let slideIndex = 0;
    
    const carousel = () => {
        slide[slideIndex].style.display = "none";
        slideIndex++;

        if (slideIndex >= slide.length) {
            slideIndex = 0
        }

        slide[slideIndex].style.display = "block";
    };

    setInterval(carousel, 3000);
};

export default sliderMainPage;