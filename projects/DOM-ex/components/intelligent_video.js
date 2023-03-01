export default function intelligentVideo(video) {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
    }
  
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          entry.target.firstElementChild.pause();
          } else {
            if(entry.isIntersecting) {
              entry.target.firstElementChild.play();
              } else if (!(entry.isIntersecting)) {
                entry.target.firstElementChild.pause();
                }
           }
      });
      if(entry.isIntersecting) {
        entry.target.firstElementChild.play();
        } else if (!(entry.isIntersecting)) {
          entry.target.firstElementChild.pause();
        }
    });
  };
  
  let observer = new IntersectionObserver(callback, options);
  
  let targets = document.querySelectorAll('div[data-smart-video]');

  targets.forEach( e => {
    observer.observe(e);
  });

};