export default function clock(startClock, stopClock, startAlarm, stopAlarm, clock) {
    const d = document;

    let nIntervId;

    function tempo() {
        if (!nIntervId) {
            nIntervId = setInterval(newTime, 1000);
        }
    };

    function newTime() {
        d.querySelector(clock).textContent = new Date().toLocaleTimeString([], { hour12: false });
      }

      function stopTempo() {
        clearInterval(nIntervId);
        nIntervId = null;
      }

      let nAlarmID;
    let audio = 'Wake up!';
    const speak = (text) => speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    
    function alarmF() {
        if (!nAlarmID) {
            nAlarmID = setInterval(newSound, 1000);
        }
    };

    function newSound() {
        speak(audio);
    }

    function stopAlarmF() {
        clearInterval(nAlarmID);
        // release our intervalID from the variable
        nAlarmID = null;
      }

    d.addEventListener('click', e => {
    
        if(e.target.matches(startClock)) {
            tempo();
            e.target.disabled = true;

        }
      
        if(e.target.matches(stopClock)) {
            stopTempo();
            d.querySelector(clock).textContent = '';
            d.querySelector(startClock).disabled = false;
        }

        if(e.target.matches(startAlarm)) {
            alarmF();
            d.querySelector(startAlarm).disabled = true;
        }

        if(e.target.matches(stopAlarm)) {
            stopAlarmF();
            d.querySelector(startAlarm).disabled = false;
        }
    });
  };