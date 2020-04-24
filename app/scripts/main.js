import {inicializador} from './asideLeftNotes.js'
import {tableCandidaturesGenerator} from './dataAccessCandidatures.js'
import {tableOffersGenerator} from './dataAccessOffers.js'


window.onload = () => {
    inicializador();
    tableCandidaturesGenerator();
    tableOffersGenerator();
}

console.log('\'Allo \'Allo!');