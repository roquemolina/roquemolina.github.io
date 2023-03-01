export function Post(props) {
    let [{date, title, content}] = props;
    console.log(props);
    return `
    <section class="post-page">
        <aside>
            <h2>${title.rendered}</h2>
            <time datetime="${date.toString().slice(0, -9)}">${date.toString().slice(0, -9)}</time>
        </aside>
        <hr>
        <article>${content.rendered}</aside>
    </section>
    `;
}