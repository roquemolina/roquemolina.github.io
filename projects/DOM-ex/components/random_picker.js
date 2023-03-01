export default function pickWinner(sorteo, btn) {
    let options = ['JavaScript', 'PHP', 'JAVA', 'C', 'Python', 'Ruby', 'Go', 'Visual Basic', 'Rust', 'Perl'],
    $sorteo = document.querySelector(sorteo);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
    options.forEach(e => {
        let $li = document.createElement('li');
        $li.textContent = e;
        $sorteo.appendChild($li);
    });

    document.addEventListener('click', e => {
        if(e.target.matches(btn)) {
        let winner = options[getRandomInt(options.length)]
        console.log(winner);
        }
    })
}