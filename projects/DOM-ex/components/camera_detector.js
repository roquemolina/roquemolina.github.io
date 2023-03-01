const d = document;

export default function cameraDetector(id) {
    let $show = d.querySelector(id);
    
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: { width: 400, height: 200 }
      })
    .then((mediaStream) => {
        $show.srcObject = mediaStream;
        $show.onloadedmetadata = () => {
            $show.play();
        };
      })
      /* use the stream */
    .catch((err) => {
       /*handle the error */
      let errorCamMsg = `<h3>Camera error</h3>
      <br>
      <p><mark>Error</mark>: "${err}"</p>`;
      $show.insertAdjacentHTML("beforebegin", errorCamMsg);
    }); 
  };
