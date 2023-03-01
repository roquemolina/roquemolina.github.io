import hamburguerMenu from "./components/menu_hamb.js";
import clock from "./components/digital_clock.js"
import { loop } from "./components/keyboard_events.js";
import { shortcuts } from "./components/keyboard.js";
import { tikTok } from "./components/count_down.js";
import botonScroll from "./components/scroll-button.js";
import darkMode from "./components/dark_mode.js";
import responsiveLinks from "./components/responsive_links.js";
import responsiveTester from "./components/responsive-tester.js";
import userDeviceInfo from "./components/device_information.js";
import conectionStatus from "./components/conection_status.js";
import cameraDetector from "./components/camera_detector.js";
import geolocationDetector from "./components/geolocation_ex.js";
import imgFilter from "./components/imgs_filter.js";
import pickWinner from "./components/random_picker.js";
import slider from "./components/carousel.js";
import intersectionObs from "./components/intersection_observer.js";
import intelligentVideo from "./components/intelligent_video.js";
import formValidations from "./components/form-validation.js";
import textToSp from "./components/tts.js";

const d = document;

darkMode('.dark-btn', '.data-dark', '#dark-mode-icon');
textToSp();
conectionStatus("#conection-msg");

d.addEventListener('DOMContentLoaded', e=> {
    hamburguerMenu('.panel-btn', '.panel', '.menu a');
    clock("#start-clock", "#stop-clock", "#start-alarm", "#stop-alarm", "#clock");
    loop();
    tikTok("#countdown");
    botonScroll('.scroll-btn');
    responsiveLinks('#youTube', '#gMaps', "(max-width: 1200px)");
    responsiveTester('tester-form');
    userDeviceInfo('user-device');
    cameraDetector('#show');
    geolocationDetector('#geolocation-info');
    imgFilter('.cards', '#template-card', '#filter', '.card');
    pickWinner('.sorteo', '#pick-button');
    slider();
    intersectionObs();
    intelligentVideo('.intelligent-video');
    formValidations();
});

d.addEventListener('keydown', e => {
    shortcuts(e);
});

