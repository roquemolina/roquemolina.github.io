export function SearchForm() {
    const $searchForm = document.createElement('form'),
    $input = document.createElement('input');
    $searchForm.classList.add('search-form');
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Search...";
    $input.autocomplete = 'off';
    $searchForm.appendChild($input);

    if(location.hash.includes("#/search")) {
        $input.value = localStorage.getItem("wpSearch");
    }

    document.addEventListener('submit', e => {
        if(!e.target.matches(".search-form")) return false;
        e.preventDefault();
        localStorage.setItem('wpSearch', e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;
    })

    return $searchForm;
}