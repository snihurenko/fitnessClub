const modalVisitForm = () => {
    const form = document.getElementById('free_visit_form');

    document.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.open-popup') ){
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
export default modalVisitForm;