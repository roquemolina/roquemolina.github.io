const d = document; 

const date1 = new Date('Jan 01, 2024 00:00:00');
let date2,
days,
hours,
minutes,
seconds;

export function tikTok(countDown){
    let timer = setInterval(() => {
        date2 = new Date().getTime();

        days = Math.floor((date1.getTime() - date2)/ (1000 * 60 * 60 *24));

        hours = Math.floor((date1.getTime() - date2) % (1000 * 60 * 60 *24) / (1000 * 60 * 60));

        minutes = Math.floor((((date1.getTime() - date2) % (1000 * 60 * 60 * 24) % (1000 * 60 * 60)) % (1000 * 60 * 60)) / (1000 * 60));

        seconds = Math.floor(((((date1.getTime() - date2) % (1000 * 60 * 60 * 24) % (1000 * 60 * 60)) % (1000 * 60 * 60)) % (1000 * 60)) / (1000));
        
        d.querySelector(countDown).textContent = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds to New Year`;
        
        if ((date1.getTime() - date2) <= 0) {
            clearInterval(timer);
            d.querySelector(countDown).textContent = `Happy New Year!!`;
        }
    }, 1000);
};