import * as data from '../data/offers.json';
import {sortTable} from './sorttable.js'

const table = document.getElementById('my_table');

const header = ['data', 'company', 'titulation', 'number', 'email'];

const offers_need = element => ({
    data: new Date(
        parseInt(element['dataPresentacion'].slice(0, 4)),
        parseInt(element['dataPresentacion'].slice(4, 6)),
        parseInt(element['dataPresentacion'].slice(6, 8))
        ).toLocaleDateString(),
    company: element['companyData']['company'],
    titulation: element['requestPrimaryTitulation']['name'],
    number: element['numberPositionsOffered'].toString(),
    email: element['companyData']['email'],
});


const theadGenerator = () => {
    return document.createElement('thead');
}

const headRowGenerator = () => {
    return document.createElement('tr');
}

const headColumnGenerator = () => {
    return document.createElement('th');
}

const rowGenerator = () => {
    return document.createElement('tr');
}

const columnGenerator = () => {
    return document.createElement('td');
}

const tbodyGenerator = () => {
    return document.createElement('tbody');
}

const cleanTable = (table) => {
    table.innerText = '';
  }

  const headerGenerator = (header) => {
    let thead = theadGenerator();
    
    const tr = headRowGenerator();

    thead.appendChild(tr);
    table.appendChild(thead);

    for (const value in header) {
        let th = headColumnGenerator();
        
        th.innerText = header[value];
        th.addEventListener('click', (event) => loadCandidaturesSorted(event.target.innerText))
        tr.appendChild(th);
    }
}

export const tableOffersGenerator = () => {
    cleanTable(table);

    headerGenerator(header);

    loadOffers();
}

const loadOffers = () => {

    const offers = data.internshipOffer.map(offers_need); 

    miForEach(offers);
};

const loadCandidaturesSorted = (property) => {
    cleanTable(table);
    
    headerGenerator(header)
 
    const candidaturesSorted = sortTable(data.internshipOffer.map(offers_need), property) 

    miForEach(candidaturesSorted);
};

const miForEach = (mapeo) => {
    let body_table = tbodyGenerator();

    mapeo.forEach(element => {
        let row = rowGenerator(); 

        body_table.appendChild(row);

        for (const key in element) {
            let column = columnGenerator();
            
            column.innerText = element[key];
            row.appendChild(column);
        }
        
       table.appendChild(body_table); 
    })
}


