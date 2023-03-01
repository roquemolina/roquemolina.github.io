const d = document;

export function shortcuts (e) {
    /*
    console.log(e);
    console.log(e.type);
    console.log(e.keyCode);
    console.log(e.key);
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    */
    //console.log(e.keyCode);
    if(e.keyCode === 65 && e.altKey) {
        alert(`Alert w/ key shorcut`);
    };
    if(e.keyCode === 80 && e.altKey) {
        prompt(`Promp w/ key shorcut`);
    };
    if(e.keyCode === 67 && e.altKey) {
        confirm(`Confirm w/ key shorcut`);
    };
};