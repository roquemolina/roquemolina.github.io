const d = document;

export default function geolocationDetector(id) {
    let $geolocationInfo = d.querySelector(id),
    $status = d.querySelector('#status'),
    $mapLink = d.querySelector('#map-link');
      
    $mapLink.href = '';
    $mapLink.textContent = '';

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        console.log(position);

        let info = `<p>Your current location:</p>
      <br>
      <p><mark>Latitude</mark>:"${latitude}"</p>
      <br>
      <p><mark>Longitude</mark>:"${longitude}"</p>
      <br>
      <p><mark>Accuracy</mark>:"${accuracy} meters"</p>
      `;

      $geolocationInfo.insertAdjacentHTML("afterbegin", info);

      $status.textContent = '';
      $mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      $mapLink.textContent = `Open in openstreetmap.org`;
      };

    function error(err) {
        $status.textContent = 'Unable to retrieve your location';
        console.log(`Error code: ${err.code}, Error : ${err.message}`);
        };

        if (!navigator.geolocation) {
            $status.textContent = 'Geolocation is not supported by your browser';
            } else {
                $status.textContent = 'Locating…';
                navigator.geolocation.getCurrentPosition(success, error);
                };
}

