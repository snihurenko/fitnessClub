'use strict';

import dropdownMenu from './modules/dropdownMenu';
import modalVisitForm from './modules/modalVisitForm';
import modalCallBackForm from './modules/modalCallbackForm';
import modalGift from './modules/modalGift';
import sliderMainPage from './modules/sliderMainPage';
import { sliderGallery, showDots } from './modules/sliderGallery';

dropdownMenu();

modalVisitForm();
modalCallBackForm();
modalGift();

sliderMainPage();
showDots();
sliderGallery();
