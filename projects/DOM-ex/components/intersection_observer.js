export default function intersectionObs() {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  }

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        let link = entry.target.getAttribute('id');
        document.querySelector(`a[href='#${link}']`).classList.add('active');

      } else if (!(entry.isIntersecting)){
        let link = entry.target.getAttribute('id');
        document.querySelector(`a[href='#${link}']`).classList.remove('active');
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);

  let targets = document.querySelectorAll('.section');

  targets.forEach( e => {
    observer.observe(e);

  })
};