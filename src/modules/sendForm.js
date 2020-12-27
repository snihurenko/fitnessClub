const sendForm = () => {
    const errorMessage = 'Что-то пошло не так ...',
        dataShareApproveMessage = 'Вы не приняли соглашение об обработке персональных данных';

    const thanksPopup = document.getElementById('thanks');
    
    const preloader = (statusMessage) => {
        statusMessage.insertAdjacentHTML('beforeend', `
            <div class="preloader">
                <div class="preloader__bar js--animate"  data-position="1"></div>
                <div class="preloader__bar" data-position="2"></div>
                <div class="preloader__bar" data-position="3"></div>
            </div>
        `);

            const animation = () => {
                let activeBar = document.querySelector('.preloader .js--animate');
                if (activeBar) {
                    let nextBar = activeBar.nextElementSibling;
                    if (!nextBar) {
                        const parent =  activeBar.parentElement;
                        nextBar = parent.firstElementChild;
                        activeBar.classList.remove('js--animate');
                        nextBar.classList.add('js--animate');
                    } 
                    else {
                        activeBar.classList.remove('js--animate');
                        nextBar.classList.add('js--animate');
                    }
                }
            }
            setInterval(animation, 300);
    };

    const getDataForm = (target) => {
        const statusMessage = document.createElement('div');
        preloader(statusMessage);
        statusMessage.classList.add('statusMessage');
        target.appendChild(statusMessage);

        const formData = new FormData(target);
        let body = {};
        for (let val of formData.entries()){
            body[val[0]] = val[1]
        };

        const outputData = () => {
            const preloader = document.querySelector('.preloader');
            if (preloader) {
                preloader.parentNode.removeChild(preloader);
            }

            thanksPopup.style.display = 'flex';
            thanksPopup.addEventListener('click', event => {
                const target = event.target;
                if (target.classList.contains('close_icon') 
                    || !target.closest('.form-content')
                    || target.classList.contains('close-btn')
                ) {
                    thanksPopup.style.display = 'none';
                }
            });
        };

        const errorData = (error) => {
            console.error(error);
            statusMessage.textContent = errorMessage;
        };

        postData(body)
            .then((response) => {
                if (response.status !== 200){
                    throw new Error('Network status not 200');
                }
                outputData();
            })
            .catch(error => {
                errorData(error);
            });

        target.reset();
    };

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    document.addEventListener('submit', event => {
        event.preventDefault();
        const target = event.target;
        const bannerCheck = document.getElementById('check1');
        const form1Check = document.getElementById('check');
        const form2Check = document.getElementById('check2');
        const cardCheck = document.getElementById('card_check');
        // const footerClub1 = document.getElementById('footer_leto_mozaika').checked;
        // const footerClub2 = document.getElementById('footer_leto_schelkovo').checked;
        // console.log(footerClub1);
        //&& (footerClub1 || footerClub2)

        if (target.matches('#form1') && form1Check.checked
            || target.matches('#form2') && form2Check.checked 
            || target.matches('#footer_form') 
            || target.matches('#banner-form') && bannerCheck.checked
            || target.matches('#card_order') && cardCheck.checked 
        ){
            const statusMessage = document.querySelector('#dataShare');
            if (statusMessage) {
                statusMessage.parentNode.removeChild(statusMessage);
            }
            getDataForm(target)
        } else {
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('statusMessage');
            statusMessage.id = 'dataShare';
            statusMessage.style.color = 'red';
            statusMessage.textContent = dataShareApproveMessage;
            target.appendChild(statusMessage);
        }
    });

    document.addEventListener('input', event => {
        const target = event.target;
        if (target.closest('#form1') || target.closest('#form2') 
            || target.closest('#footer_form') || target.closest('#banner-form')
            || target.closest('#card_order')
        ){
            validateInput(target);
        }
    });

    const validateInput = (target) => {
        if (target.matches('.form_name')){
            target.value = target.value.replace(/[^а-яё\s]/ig, '');
        }
    };

};

export default sendForm;

//#footer_form 
//#form1 
//#form2
//#banner-form
//#card_order

