const d = document,
w = window;

/*
export default function testerWeb(webTested, widthData, heigthData, testButton, closeButton) {

    let $url = d.querySelector(webTested),
    $width = d.querySelector(widthData),
    $heigth = d.querySelector(heigthData),
    windowFeatures = `"left=100,top=100,width=${$width.value},height=${$heigth.value}, popup"`,
    openedWindow;

    function openWindow() {
        openedWindow = window.open($url.value, "mozillaWindow", windowFeatures);
        };

    function closeOpenedWindow() {
        openedWindow.close();
        };

    d.querySelector(testButton).addEventListener('click', (e) => {
        e.preventDefault();
        openWindow();
    });

    d.querySelector(closeButton).addEventListener('click', (e) => {
        e.preventDefault();
        closeOpenedWindow();
    })
}
*/

export default function responsiveTester(form) {
    let $form = d.getElementById(form);
    let tester;

d.addEventListener('submit', (e) => {
    if(e.target === $form) {
        e.preventDefault();
        tester = w.open($form.url.value,'tester', `"left=100,top=100,width=${$form.width.value},height=${$form.heigth.value},`);
    };
});

d.addEventListener('click', (e) => {
    if(e.target === $form.close) {
        tester.close();
        e.preventDefault();
    } 
    });
};
