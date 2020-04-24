import * as data from '../data/candidatures.json';

const divTable = document.getElementById("table_div");

const header = ["   ", "Data", "Apellidos", "DNI", "Email", "Titulación"];

const candidatures_need = element => ({
    dataP: element["dataPresentacion"],
    name: element["surname"] + " " + element["surname2"],
    dni: element["dni"],
    telf: element["telf"],
    email: element["email"],
    titulacion: element["titulacionPracticas"]["name"]
});

const headRowGenerator = () => {
    return document.createElement("tr");
}

const headColumnGenerator = () => {
    return document.createElement("th");
}

const rowGenerator = () => {
    return document.createElement("tr");
}

const columnGenerator = () => {
    return document.createElement("td");
}

export const tableGenerator = () => {
    let table = document.createElement("table");
    table.setAttribute("id", "mi_tabla");

    const tr = headRowGenerator();
    table.appendChild(tr);

    for (const value in header) {
        let th = headColumnGenerator();

        th.innerText = header[value];
        tr.appendChild(th);
    }

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
