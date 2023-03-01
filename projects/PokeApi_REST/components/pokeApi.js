export default function getPokeData(url) {
    const $main = document.querySelector("main"),
    $backBtn = document.querySelector('#back'),
    $nextBtn = document.querySelector('#next');
    let $loader = document.querySelector('.loader');

    $loader.classList.remove('none');

    fetch(`${url}`)
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(json => {
        $backBtn.dataset.link = json.previous;
        $nextBtn.dataset.link = json.next;
        const fragment = new DocumentFragment();
        json.results.forEach(el => {
            const img = document.createElement('img');
            fetch(`${el.url}`)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(pokeData => {
                img.setAttribute('src', pokeData.sprites.front_default);
            });
            fragment.append(img);
        })
            $loader.classList.add('none');
            $main.append(fragment);
        })
    .catch(err => {
        console.log(err);
        let msg = err.statusText || "Undefined problem";
        $main.innerHTML = `Error: ${err.status}: ${msg}`;
    });
};