import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js"

export function infiniteScroll() {
    let query = localStorage.getItem("wpSearch"),
    apiURL,
    Component; //High Order Component HOC

    window.addEventListener("scroll", async e => {
        let {scrollTop, scrollTopMax} = document.documentElement;
        let {hash} = window.location;

        if (scrollTop === scrollTopMax) {
            api.page++;
        };

        if(!hash || hash === "#/") {
            apiURL = `${api.POSTS}&page=${api.page}`;
            Component = PostCard;
        }else if (hash.includes('#/search')) {
            apiURL = `${api.SEARCH}${query}&page=${api.page}`;
            Component = SearchCard;
        } else {
            return false;
        }

        if(scrollTop === scrollTopMax) {
            document.querySelector('.loader').style.display = "block";
            await ajax({
                url: apiURL,
                cbSuccess: (posts) => {
                    let html = "";
                    posts.forEach(post => html += Component(post));
                    document.querySelector('#main').insertAdjacentHTML('beforeend', html);
                }
            });
            document.querySelector('.loader').style.display = "none";
        }
        
    });
};