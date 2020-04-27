import {inicializador} from './asideLeftNotes.js'
import {tableCandidaturesGenerator} from './dataAccessCandidatures.js'
import {createNavbar} from './navbar.js'


window.onload = () => {
    inicializador();
    createNavbar();
    tableCandidaturesGenerator();
}

console.log('\'Allo \'Allo!');