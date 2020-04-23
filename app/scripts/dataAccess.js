import * as data from '../data/candidatures.json';

const candidatures_need = element => ({
    dataP: element["dataPresentacion"],
    name: element["name"],
    dni: element["dni"]
});

const divTable = document.getElementById("table");

const rowGenerator = () => {
    return document.createElement("tr");
}

const columnGenerator = () => {
    return document.createElement("td");
}

export const tableGenerator = () => {

    let table = document.createElement("table");

    loadCandidatures(table);
    divTable.appendChild(table);
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
