export default function formValidations() {
    let $form = document.querySelector('.form-validation'),
    $inputs = document.querySelectorAll(".form-validation *[required]");
    $inputs.forEach(e => {
        const $span = document.createElement('span');
        $span.id = e.name;
        $span.textContent = e.title;
        $span.classList.add('contact-form-error', 'none');
        e.insertAdjacentElement('afterend', $span);
    });

    document.addEventListener('keyup', e => {
        if(e.target.matches(".form-validation [required]")) {
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;

            if(pattern && $input.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ? document.getElementById($input.name).classList.add('is-active')
                : document.getElementById($input.name).classList.remove('is-active')
            }
            if(!pattern) {
                return $input.value === ""
                ? document.getElementById($input.name).classList.remove('is-active')
                : document.getElementById($input.name).classList.remove('is-active')

            }
        }
    });
    document.addEventListener('submit', e => {

        if(e.target.matches('.form-validation'))
        e.preventDefault();
        
        let $loader = document.querySelector('.contact-form-loader'),
        $response = document.querySelector('.contact-form-response');
        $loader.classList.remove('none');

        fetch("https://formsubmit.co/ajax/roquenicolasmolina@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: $form.name.value,
                email: $form.email.value,
                subject: $form.subject.value,
                message: $form.comment.value
                })
                })
    .then(response => response.json())
    .then(data => {
        $form.reset();
        $loader.classList.add('none');
        console.log(data);
        $response.innerHTML = `<p>${data.message}</p>`;
        $response.classList.remove('none');
    })
    .catch(error => console.log(error))
    .finally(() => {
        setTimeout(() => {
            $response.classList.add('none');
            $response.innerHTML = "";
        }, 4000);
      });
    })
}
