import {tableCandidaturesGenerator} from './dataAccessCandidatures.js'
import {tableOffersGenerator} from './dataAccessOffers.js'

export const createNavbar = () => { 
    let navBar = document.getElementById('my_nav');
    let ul = document.createElement('ul');

    newLu(ul, tableCandidaturesGenerator, 'CANDIDATURAS');
    newLu(ul, tableOffersGenerator, 'OFERTAS');

    //GENERAR LOS SIGUIENTES BOTONES

    navBar.appendChild(ul);    
}

const newLu = (ul, evento, nombre) => {
    let li = document.createElement('li');
    let button = document.createElement('button');


    button.innerHTML = nombre;
    li.addEventListener('click', evento);
    
    li.appendChild(button);
    ul.appendChild(li);
}