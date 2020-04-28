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

const cleanTable = (table) => {
    table.innerText = '';
  }

  const headerGenerator = (header) => {

    const tr = headRowGenerator();
    table.appendChild(tr);

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

    loadOffers(table);
}

const loadOffers = (table) => {

    const offers = data.internshipOffer.map(offers_need); 

    offers.forEach(element => {
        let row = rowGenerator();

        for (const key in element) {
            let column = columnGenerator();
            
            column.innerText = element[key];
            row.appendChild(column);
        }
        
        table.appendChild(row);
    })
};

const loadCandidaturesSorted = (property) => {
    cleanTable(table);
    
    headerGenerator(header)
 
    const candidaturesSorted = sortTable(data.internshipOffer.map(offers_need), property) 

    candidaturesSorted.forEach(element => {
        let row = rowGenerator();

        for (const key in element) {
            let column = columnGenerator();
            
            column.innerText = element[key];
            row.appendChild(column);
        }
        
        table.appendChild(row);
    })   
};
