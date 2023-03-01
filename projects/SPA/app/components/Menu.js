export function Menu() {
    const $menu = document.createElement('nav');
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <a href="#/">Home</a>
        <span>-</span>
        <a href="#/search">Search</a>
        <span>-</span>
        <a href="#/contact">Contact</a>
        <span>-</span>
        <a href="https://roquemolina.github.io" target="_blank" rel="noopener">Back</a>
    `;
    return $menu;
}