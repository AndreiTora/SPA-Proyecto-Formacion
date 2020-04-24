import {inicializador} from './asideLeftNotes.js'
import {tableGenerator} from './dataAccessCandidatures.js'

window.onload = () => {
    inicializador();
    tableGenerator();
}

console.log('\'Allo \'Allo!');