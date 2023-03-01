const d = document;


export default function darkMode(darkBtn, dataDark, icon) {

    d.addEventListener('DOMContentLoaded', (e) => {
        if(window.localStorage.getItem('dark-mode')){
            d.querySelectorAll(dataDark).forEach( e => {
                e.classList.toggle('dark-mode');
                d.querySelector(icon).setAttribute('class', 'fa fa-sun-o');
            });
        };
    })
    
    d.addEventListener('click', e => {
        if(e.target.matches(darkBtn)|| e.target.matches(`${darkBtn} *`)) {
            d.querySelectorAll(dataDark).forEach( e => {
                e.classList.toggle('dark-mode');
            });
            if(!(window.localStorage.getItem('dark-mode'))){
                window.localStorage.setItem('dark-mode', null);
                d.querySelector(icon).setAttribute('class', 'fa fa-sun-o');
            } else {
                window.localStorage.removeItem('dark-mode');
                d.querySelector(icon).setAttribute('class', 'fa fa-moon-o');
            }
        };
    });
}