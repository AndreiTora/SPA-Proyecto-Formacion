import {inicializador} from './asideLeftNotes.js'

window.onload = () => {
    inicializador();
}

console.log('\'Allo \'Allo!');

const prueba = () => {
    fetch('data/offers.json')
    .then(respone => respone.json())
    .then(data => {
        console.log(data);
    })
}

prueba();