'use strict';

import dropdownMenu from './modules/dropdownMenu';
import modalVisitForm from './modules/modalVisitForm';
import modalCallBackForm from './modules/modalCallbackForm';
import modalGift from './modules/modalGift';
import burgerMenu from './modules/burgerMenu';
import sliderMainPage from './modules/sliderMainPage';
import sliderServices from './modules/sliderServices';
import { sliderGallery, showDots } from './modules/sliderGallery';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';
import maskPhone from './modules/maskPhone';

maskPhone('.form_phone', '+_(___) ___-__-__')
dropdownMenu();
burgerMenu();

modalVisitForm();
modalCallBackForm();
modalGift();

sliderMainPage();
sliderServices();
showDots();
sliderGallery();

calculator();
sendForm();

// const header = document.querySelector('.header-main');
// header.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


