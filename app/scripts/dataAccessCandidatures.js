import * as data from '../data/candidatures.json';

const table = document.getElementById('my_table');


const header = ['data', 'name', 'dni', 'telf', 'email', 'titulacion'];

const candidatures_need = element => ({
    data: new Date(
        parseInt(element['dataPresentacion'].slice(0, 4)),
        parseInt(element['dataPresentacion'].slice(4, 6)),
        parseInt(element['dataPresentacion'].slice(6, 8))
        ).toLocaleDateString(),
    name: element['surname'] + ' ' + element['surname2'],
    dni: element['dni'],
    telf: element['telf'],
    email: element['email'],
    titulacion: element['titulacionPracticas']['name']
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

export const tableCandidaturesGenerator = () => {
    cleanTable(table);
    
    const tr = headRowGenerator();
    table.appendChild(tr);

    for (const value in header) {
        let th = headColumnGenerator();
        
        th.innerText = header[value];
        th.addEventListener('click', (event) => loadCandidaturesSorted(event.target.innerText))
        tr.appendChild(th);
    }

    loadCandidatures(table);
}

const loadCandidatures = (table) => {

    const candidatures = data.candidatures.map(candidatures_need); 

    candidatures.forEach(element => {
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
    
    const tr = headRowGenerator();
    table.appendChild(tr);

    for (const value in header) {
        let th = headColumnGenerator();
        
        th.innerText = header[value];
        tr.appendChild(th);
    }
 
    const candidaturesSorted = sortTable(data.candidatures.map(candidatures_need), property)

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

const sortAlpha = (array, property) => {
    return array.sort(function (a,b) {
        if(a[property].toLowerCase() < b[property].toLowerCase()) return -1;
        if(a[property].toLowerCase() > b[property].toLowerCase()) return 1;
        return 0;
    })
}

const sortTable = (document, property) => {  
    return sortAlpha(document, property);
}



console.log(data.candidatures.map(candidatures_need))
console.log(sortTable(data.candidatures.map(candidatures_need, ), 'name'));
