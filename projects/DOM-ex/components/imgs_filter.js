export default function imgFilter(cards, template, filter, card) {

    const $cards = document.querySelector(cards),
    $template = document.querySelector(template).content,
    $filter = document.querySelector(filter),
    $fragment = document.createDocumentFragment(),
    cardContent= [
        {
            title: 'Tech',
            img: 'https://placeimg.com/200/200/tech',
            },
       {
            title: 'Animals',
            img: 'https://placeimg.com/200/200/animals',
            },
        {
            title: 'People',
            img: 'https://placeimg.com/200/200/people',
            },
        {
            title: 'Arch',
            img: 'https://placeimg.com/200/200/arch',
            },
        {
            title: 'Nature',
            img: 'https://placeimg.com/200/200/nature',
        },
        {
            title: 'Any',
            img: 'https://placeimg.com/200/200/Any',
        },
    ];

    cardContent.forEach(e => {
        $template.querySelector('img').setAttribute('src', e.img);
        $template.querySelector('img').setAttribute('alt', e.title);
        $template.querySelector('figcaption').textContent = e.title;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
        });

    $cards.appendChild($fragment);


    $filter.addEventListener('input', e => {
        let word = e.target.value.toLowerCase();
        document.querySelectorAll(card).forEach(e => {
            let elem = e.firstElementChild.getAttribute('alt').toLowerCase();
            if(!(elem.includes(word))) {
                e.style.setProperty('display', 'none');
            } else {
                e.style.setProperty('display', '');
            }
        });
        });

};