const modalCallBackForm = () => {
    const form = document.getElementById('callback_form');

    document.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.callback-btn') ){
            form.style.display = 'block'
        }         
    });

    form.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('close_icon') || !target.closest('.form-content')) {
            form.style.display = 'none';
        }
    });

};
export default modalCallBackForm;