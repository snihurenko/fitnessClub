const burgerMenu = () => {
    const btn = document.querySelector('.menu-button'),
        menu = document.querySelector('.popup-menu'),
        topMenu = document.querySelector('.top-menu');

    document.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.menu-button') ){
            menu.style.display = 'flex'
        }         
    });

    menu.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.close-menu-btn') || !target.matches('li>a') ) {
            menu.style.display = 'none';
        }
    });

    window.addEventListener('scroll', () => {
        const sticky = btn.offsetTop;

        if (window.pageYOffset >= sticky) {
            topMenu.classList.add('menu-fix')
        } 
        if (window.pageYOffset === 0) {
            topMenu.classList.remove('menu-fix');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 768){
            btn.classList.remove('hidden-large');
        } else if (window.innerWidth > 768){
            btn.classList.add('hidden-large');
        }
    });
};

export default burgerMenu;