const modalGift = () => {
    const form = document.getElementById('gift');

    document.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.fixed-gift') ){
            form.style.display = 'block';
            document.querySelector('.fixed-gift').style.display = 'none';
        }         
    });

    form.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('close_icon') 
                || !target.closest('.form-content')
                || target.classList.contains('close-btn')) {
                    
            form.style.display = 'none';
        }
    });

};
export default modalGift;