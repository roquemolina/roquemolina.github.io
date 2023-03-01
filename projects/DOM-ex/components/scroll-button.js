export default function botonScroll(scrollBtn) {
    const d = document;
    
    const $boton = d.querySelector(scrollBtn);
  
    window.addEventListener('scroll', e =>

    /*
    (window.scrollY <= 600)
    ? $boton.remove() :
     $panel.insertAdjacentElement('afterend', $boton)
    )
*/    

    {
      if (window.scrollY <= 600) {
        $boton.style.setProperty('visibility', 'hidden');
        $boton.style.setProperty('opacity', '0');
      } else {
        $boton.style.setProperty('visibility', 'inherit');
        $boton.style.setProperty('opacity', '1');
      };
    });

    d.addEventListener('click', e => {
      if(e.target.matches(scrollBtn) || e.target.matches(`${scrollBtn} *`)) {
        window.scrollTo({
          top: 0
        });
      };
    });
  };