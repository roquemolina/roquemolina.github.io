let itemList = [];

const lista = document.querySelector('ul');
const enter = document.querySelector('input');
const boton = document.querySelector('button');

//activa el boton de llenado y corre la función para llenar el array y actualizar la lista, borro el ingreso
//y le puse un focus
boton.addEventListener('click', () => {
    if (enter.value === '') {
    }else {
itemList.push(enter.value);
enter.focus();
enter.value = '';
fill();}
});

//declaré esta variable para que funcione la funcion llenar de abajo
function fill() {
    newItem = document.createElement('li');
    const deleter = newItem;
    let innerText = document.createElement('span');
    //creo boton eliminar y le doy una clase y lo q dice dentro
    const buttonDel = document.createElement('button');
    buttonDel.className = "button-Del";
    buttonDel.textContent = ' Delete :( ';
    //creo boton modif y le doy una clase y lo que dice dentro
    const modButton = document.createElement('button');
    modButton.className = "button-Modif";
    modButton.textContent = ' Modify :P ';
    //lleno cada item
    innerText.textContent = itemList[itemList.length -1];
    const index = itemList.indexOf(itemList[itemList.length -1]);
    newItem.appendChild(innerText);
    newItem.appendChild(buttonDel);
    newItem.appendChild(modButton);
    lista.appendChild(newItem);
    buttonDel.addEventListener('click', () => {
        itemList.splice(index, 1);
        deleter.remove();
    });
    modButton.addEventListener('click', () => {
        const modific = prompt('New name');
        itemList.splice(index, 1);
        itemList.splice(index, 0, modific);
        innerText.textContent = modific;
    });

}