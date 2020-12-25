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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

