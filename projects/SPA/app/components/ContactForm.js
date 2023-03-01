export function ContactForm() {
    let $form = document.createElement('form'),
    $styles = document.getElementById("dynamic-styles");
    $form.classList.add('form-validation');

    $styles.innerHTML = `

        .form-validation {
            width: inherit;
            text-align: center;
        }
    
        .form-validation > input,
        .form-validation > textarea {
            width: 80%;
            margin: 0.5rem;
            font-size: 1rem;
            font-family: sans-serif;
        }
    
        .form-validation legend,
        .contact-form-response {
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
    
        .form-validation input[type="submit"] {
            width: 50%;
            font-weight: bold;
            cursor: pointer;
        }
    
        .form-validation > textarea {
            height: 5rem;
            resize: none;
        }
    
        .form-validation > input {
            height: 2rem;
        }
    
        .form-validation > input:invalid,
        .form-validation > textarea:invalid {
            box-shadow: 0 0 8px 3px #ff000052;
        }
    
        .form-validation > input[required]:valid,
        .form-validation > textarea:valid {
            box-shadow: 0 0 8px 3px green;
        }
    
        .contact-form-error {
            font-size: 80%;
            background-color: red;
            color: white;
            transition: all 800ms ease;
        }
    
        .contact-form-error.is-active {
            display: block;
            animation: show-message 1s 1 normal 0s ease-out both;
        }
    
        .none {
            display: none;
        }
    
        @keyframes show-message {
            0% {
                visibility: hidden;
                opacity: 0;
            }
        
            100% {
                visibility: visible;
                opacity: 1;
            }
        }
    `;

    $form.innerHTML = `
    <legend>Send your comment</legend>
    <input type="text" name="name" pattern="(^[a-z A-Z ,.'-]+$)" placeholder="Your Name" title="Only accepts a-z, A-Z, , . ' - " required>
    <input type="text" name="email" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" placeholder="Your e-mail" title='Incorrect e-mail' required>
    <input type="text" name="subject" placeholder="Subject" title="Subject is required" required>
    <textarea name="comment" rows="5" placeholder="Comment" title="Comment max length is 255" data-pattern="^.{1,255}$" required></textarea>
    <input type="submit" value="Submit">
    <div class="contact-form-loader none">
        <img src="app/assets/tail-spin.svg" alt="Loading">
    </div>
    <div class="contact-form-response none">
        <p>Info has been sent</p>
    </div>
    `;
    function validations() {
    let $inputs = document.querySelectorAll(".form-validation *[required]");
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
    });
}
    setTimeout(() => {
        validations();
    }, 200);
    return $form;
}
