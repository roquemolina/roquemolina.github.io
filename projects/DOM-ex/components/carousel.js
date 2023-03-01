export default function slider() {
    const $next = document.querySelector('.next'),
    $prev = document.querySelector('.prev'),
    $slides = document.querySelectorAll('.slider-slide');
    let i = 0;

    document.addEventListener('click', e => {
        if(e.target === $prev) {
            e.preventDefault();
            $slides[i].classList.remove('active');
            i--;
            
            if(i < 0) {
                i = $slides.length -1;
            };

            $slides[i].classList.add('active');
        }

        if(e.target === $next) {
            e.preventDefault();
            $slides[i].classList.remove('active');
            i++;
            
            if(i > $slides.length -1) {
                i = 0;
            };

            $slides[i].classList.add('active');
        }
    });
    
    setInterval((e) => {
        $slides[i].classList.remove('active');
            i++;
            
            if(i > $slides.length -1) {
                i = 0;
            };

            $slides[i].classList.add('active');
    }, 6000);
}