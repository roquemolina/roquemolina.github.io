export function SearchCard (props) {
    let {title, url, _embedded} = props;

    return `
    <article class="post-card">
        <h4>${title}</h4>
        <a href="${url}" rel="noopener" target="_blank">See original post</a>
        <a href="#/${_embedded.self[0].slug}">See post</a>
    </article>
    
    `;
}