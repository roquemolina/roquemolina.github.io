//Change NAME with any other Wordpress page. ;) bye! Thanks for watching my portfolio. roque https://malvestida.com/search?_embed&search=

//const NAME = "css-tricks",
const NAME = "css-tricks",
DOMAIN = `https://${NAME}.com`,
SITE = `${DOMAIN}/wp-json`,
API_WP = `${SITE}/wp/v2`,
PER_PAGE = 9,
POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
POST = `${API_WP}/posts`,
SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1;

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    PER_PAGE,
    POSTS,
    POST,
    SEARCH,
    page
}
