const d = document,
w = window,

$youTubeIFrame = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
$youTubeLink = `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Watch video</a>`,
$gMapsIFrame = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15540.393909450095!2d-72.55520428202293!3d-13.156187907156674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9af39d171929%3A0x1a0650ff9fea69d6!2sHuayna%20Picchu!5e0!3m2!1sen!2sar!4v1675911018348!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
$gMapsLink = `<a href="https://goo.gl/maps/9VPi3UqDuopStA438" target="_blank">Watch place</a>`;


export default function responsiveLinks(youTube, gMaps, mq) {
    let $youTube = d.querySelector(youTube),
    $gMaps = d.querySelector(gMaps),
    breakpoint = w.matchMedia(mq);

    function responsive(e) {
        if (e.matches) {
            // Viewport is less or equal to 700 pixels wide
            $youTube.innerHTML =$youTubeLink;
            $gMaps.innerHTML = $gMapsLink;
          } else {
            // Viewport is greater than 700 pixels wide
            $youTube.innerHTML =$youTubeIFrame;
            $gMaps.innerHTML = $gMapsIFrame;
          };
    }
    /*
    const responsive = (e) => {
        console.log(e);
        if (e.matches) {
            // Viewport is less or equal to 700 pixels wide
            $youTube.innerHTML =$youTubeLink;
            console.log(breakpoint);
            $gMaps.innerHTML = $gMapsLink;
          } else {
            // Viewport is greater than 700 pixels wide
            $youTube.innerHTML =$youTubeIFrame;
            $gMaps.innerHTML = $gMapsIFrame;
          };
    };
    */
    
    //breakpoint.addListener(responsive);
    breakpoint.addEventListener('change', responsive);
    responsive(breakpoint);
    };

/*

    
    w.addEventListener('resize', (e) =>{
        if(w.innerWidth < 700){
            $youTube.innerHTML =$youTubeLink;
            $gMaps.innerHTML = $gMapsLink;
        } else {
            $youTube.innerHTML =$youTubeIFrame;
            $gMaps.innerHTML = $gMapsIFrame;
        }
    })
    
};
*/