import {inicializador} from './asideLeftNotes.js'
import {tableGenerator} from './dataAccess.js'

window.onload = () => {
    inicializador();
    tableGenerator();
}

console.log('\'Allo \'Allo!');