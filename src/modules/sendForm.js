const sendForm = () => {
    const errorMessage = 'Что-то пошло не так ...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    
    // const preloader = (statusMessage) => {
    
    //     statusMessage.insertAdjacentHTML('afterend', `
    //         <div class="preloader">
    //             <div class="preloader__bar js--animate"  data-position="1"></div>
    //             <div class="preloader__bar" data-position="2"></div>
    //             <div class="preloader__bar" data-position="3"></div>
    //         </div>
    //     `);

    //         const animation = () => {
    //             let activeBar = document.querySelector('.preloader .js--animate');
    //             if (activeBar) {
    //                 let nextBar = activeBar.nextElementSibling;
    //                 if (!nextBar) {
    //                     const parent =  activeBar.parentElement;
    //                     nextBar = parent.firstElementChild;
    //                     activeBar.classList.remove('js--animate');
    //                     nextBar.classList.add('js--animate');
    //                 } 
    //                 else {
    //                     activeBar.classList.remove('js--animate');
    //                     nextBar.classList.add('js--animate');
    //                 }
    //             }
    //         }
    //         setInterval(animation, 300);
    // };

    const getDataForm = (target) => {
        const statusMessage = document.createElement('div');
        statusMessage.style.color = '#fff'
        statusMessage.textContent = 'sending form'
        console.log(target);
        target.appendChild(statusMessage);
        //preloader(statusMessage);

        const formData = new FormData(target);
        console.log(formData);
        let body = {};
        for (let val of formData.entries()){
            body[val[0]] = val[1]
        };

        const outputData = () => {
            // const preloader = document.querySelector('.preloader');
            // if (preloader) {
            //     preloader.parentNode.removeChild(preloader);
            // }

            statusMessage.textContent = successMessage;

            setTimeout(() => {
                statusMessage.textContent = '';
            }, 3000);
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
        //event.preventDefault();
        const target = event.target;
        console.log(target);
        
        if (target.matches('#form1') || target.matches('#form2') ){
            console.log(target);
            getDataForm(target)
        }
        if (target.matches('#footer_form') ){
            console.log(target);
            getDataForm(target)
        }
    });

    

    
    document.addEventListener('input', event => {
        const target = event.target;
        if (target.closest('#form1') || target.closest('#form2') 
            || target.closest('#footer_form') || target.closest('#banner-form')
        ){
            validateInput(target);
        }
    });

    const validateInput = (target) => {
        // if (target.matches('.form_phone')){
        //     target.value = target.value.replace(/[^\d\+]/g, '');
        // }
        if (target.matches('.form_name')){
            target.value = target.value.replace(/[^а-яё\s]/ig, '');
        }
        // if (target.matches('#form2-message')){
        //     target.value = target.value.replace(/[^а-яё\s\!\?\.,]/ig, '');
        // }
    };

};


export default sendForm;

//#footer_form 
//#form1 
//#form2
//#banner-form
//#card_order

