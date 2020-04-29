import * as data from '../data/candidatures.json';
import {sortTable} from './sorttable.js'

const table = document.getElementById('my_table');

const header = ['data', 'name', 'dni', 'telf', 'email', 'titulacion'];

const search = {};

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

const generateInput = () => {
    return document.createElement('input');
} 

export const tableCandidaturesGenerator = () => {
    cleanTable(table); 

    headerGenerator(header);

    let body_table = tbodyGenerator();
    body_table.setAttribute('id','table_body')

    table.appendChild(body_table);

    loadCandidatures();

}

const cleanTable = () => {
    table.innerText = '';
  }

const cleanTbody = () => {
    let tbody = document.getElementById('table_body');
    tbody.innerText = '';
}

  

const headerGenerator = (header) => {

    let thead = theadGenerator();

    const tr = headRowGenerator();

    thead.appendChild(inputHeadGenerator());

    thead.appendChild(tr);
    table.appendChild(thead);  

    for (const value in header) {
        let th = headColumnGenerator();
        
        th.innerText = header[value];
        th.addEventListener('click', (event) => loadCandidaturesSorted(event.target.innerText));
        tr.appendChild(th);
    }
}

const loadCandidatures = () => {

    const candidatures = data.candidatures.map(candidatures_need); 

    miForEach(candidatures);
    
};

const loadCandidaturesSorted = (property) => {
    cleanTable(table);
    headerGenerator(header);

    let body_table = tbodyGenerator();
    body_table.setAttribute('id','table_body')

    table.appendChild(body_table);
 
    const candidaturesSorted = sortTable(data.candidatures.map(candidatures_need), property) 

    miForEach(candidaturesSorted);

};

const loadCandidaturesFiltered = (resultado) => {
    cleanTbody();

    miForEach(resultado);

};

const miForEach = (mapeo) => {

    const body_table = document.getElementById('table_body');

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

const inputHeadGenerator = () => {
    let row = rowGenerator();
  
    header.forEach(element => {
      let elementColumn =  headColumnGenerator();
      let elementInput = generateInput();

      elementInput.setAttribute('name', `${element}`);
      elementInput.setAttribute('id', `${element}`);
      elementInput.onkeyup = (event) => filterColumn(event);
  
      elementColumn.appendChild(elementInput);
      row.appendChild(elementColumn)
    })
  
    return row;
  }

const filterColumn = (event) => {

    const key = event.target.name;
    const value = document.getElementById(key).value;
    
    search[key] = value;

    let mapeo = data.candidatures.map(candidatures_need);

    let resultado = mapeo.filter(candidate => {
        let isValid = true;
        Object.keys(search).forEach(key => {
          
           if (!new RegExp(`${search[key]}`, "i").test(candidate[key])) {
               isValid = false;
          }
        });
        return isValid;
    });

    loadCandidaturesFiltered(resultado);
}