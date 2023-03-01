let d = document,
n = navigator,
ua = n.userAgent;

export default function userDeviceInfo(id) {
    const $id = d.getElementById(id),
    isMobile = {
        //w/ regular expressions
        android: () => ua.match(/Android/),
        ios: () => ua.match(/iPhone|iPad|iPod/),
        any: function () {
            return this.android() || this.ios() || this.windows;
        },
    },
    isDesktop = {
        linux: () => ua.match(/Linux/),
        windows: () => ua.match(/Windows/),
        macBook: () => ua.match(/macOS/),
        any: function () {
            return this.linux() || this.windows() || this.macBook();
        },

    },
    isBrowser = {
        chrome: () => ua.match(/Chrome/),
        safari: () => ua.match(/Safari/),
        opera: () => ua.match(/Opera/),
        firefox: () => ua.match(/Firefox/),
        edge: () => ua.match(/Edge/),
        brave: () => ua.match(/Brave/),

        any: function () {
            return this.chrome() || this.safari() || this.opera() || this.firefox() || this.edge() || this.brave();
        },
    };

//    console.log(isMobile.any());
//    console.log(isDesktop.any());
//    console.log(isBrowser.any());

    $id.innerHTML = `
    <ul>
        <li>User Agent: <b> ${ua}</li>
        <li>Platform: <b> ${isMobile.any()? isMobile.any(): isDesktop.any()} </li>
        <li>Browser: <b> ${isBrowser.any()? isBrowser.any(): null}</li>
    </ul>
    `;

    if(isBrowser.firefox()) {
        $id.innerHTML += `<p><mark> Only available on Firefox </mark></p>`;
    };
    if(isBrowser.safari()) {
        $id.innerHTML += `<p><mark> Only available on safari </mark></p>`;
    };
};

