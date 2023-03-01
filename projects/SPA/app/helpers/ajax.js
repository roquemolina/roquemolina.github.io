export async function ajax(props) {
    let {url, cbSuccess} = props;

    await fetch(url)
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(json => cbSuccess(json))
    .catch(err => {
        let msg = err.statusText || 'Ups, something went wrong. Error status text is not available';
        document.querySelector('.loader').style.display = "none";
        document.querySelector('#main').innerHTML = `
        <div class="error">
            <p>Error: ${err.status}. ${msg}</p>
        </div>
        `;
        console.log(err);
    })
}