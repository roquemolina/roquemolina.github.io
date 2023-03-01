import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router() {

    let {hash} = location;

    document.querySelector("#main").innerHTML = null;

    if(!hash || hash === "#/") {
    await ajax({
        url: api.POSTS,
        cbSuccess: (posts) => {
            let html = "";
            posts.forEach(post => html += PostCard(post));
            document.querySelector('#main').innerHTML = html;
        }
    });
    } else if (hash.includes("#/search")) {

        let query = `${api.SEARCH}${localStorage.getItem('wpSearch')}`;

        if(localStorage.getItem('wpSearch') === "") {
            document.querySelector('.loader').style.display = "none";
            return false;
        };

        await ajax({
            url: query,
            cbSuccess: (search) => {
                let html = "";
                if (search.length === 0) {
                    html = '<h2>No results found</h2>'
                } else {
                    search.forEach(result => html += SearchCard(result));
                };
                document.querySelector('#main').innerHTML = html;
            }
        });
    } else if (hash === "#/contact") {
        
        document.querySelector('#main').appendChild(ContactForm());

    } else {

        let postUrl = `${api.POST}?slug=${hash.slice(2, hash.length)}`;

        await ajax({
            url: postUrl,
            cbSuccess: (post) => {
                document.querySelector('#main').innerHTML = Post(post);
            }
        });
    };
    document.querySelector('.loader').style.display = "none";
}