'use strict';

import dropdownMenu from './modules/dropdownMenu';
import modalVisitForm from './modules/modalVisitForm';
import modalCallBackForm from './modules/modalCallbackForm';
import modalGift from './modules/modalGift';
import sliderMainPage from './modules/sliderMainPage';
import sliderServices from './modules/sliderServices';
import { sliderGallery, showDots } from './modules/sliderGallery';

dropdownMenu();

modalVisitForm();
modalCallBackForm();
modalGift();

sliderMainPage();
sliderServices();
showDots();
sliderGallery();
