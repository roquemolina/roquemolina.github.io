const d = document;

export default function conectionStatus(conectionMsg) {
    const $msg = d.querySelector(conectionMsg);

    window.addEventListener('offline', (e) => {
        $msg.style.setProperty('visibility', 'visible');
        $msg.style.setProperty('opacity', '1');
        $msg.style.setProperty('background-color', 'red');
        $msg.textContent = "Conection Lost";

        setTimeout(() => {
            $msg.style.setProperty('visibility', 'hidden');
            $msg.style.setProperty('opacity', '0');
        }, 3000);
    });

    window.addEventListener('online', (e) => {
        $msg.style.setProperty('visibility', 'visible');
        $msg.style.setProperty('opacity', '1');
        $msg.style.setProperty('background-color', 'green');
        $msg.textContent = "Conection Restored";

        setTimeout(() => {
            $msg.style.setProperty('visibility', 'hidden');
            $msg.style.setProperty('opacity', '0');
        }, 3000);
    });
  };