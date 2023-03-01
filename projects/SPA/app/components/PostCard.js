export function PostCard(props) {
    let {date, title, link, _embedded, slug} = props;
    let urlPoster =  _embedded['wp:featuredmedia'][0].source_url || "./app/assets/favicon.ico";

    //${urlPoster}
    return `
    <article class="post-card">
        <img src="${urlPoster}" alt="${title.rendered}">
        <h2>${title.rendered}</h2>
        <p>
            <p>${_embedded.author[0].name}</p>
            <time datetime="">${date.toString().slice(0, -9)}</time>
            <a href="${link}" rel="noopener" target="_blank">See original post</a>
            <a href="#/${slug}">See post</a>
        </p>
    </article>
    `;
}