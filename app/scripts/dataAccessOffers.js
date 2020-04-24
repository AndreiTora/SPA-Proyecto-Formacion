import * as data from '../data/offers.json';

const divTable = document.getElementById("table_div_2");

const header = ["Data", "Company", "Request Titulation", "Name", "Email"];

const offers_need = element => ({
    data: element["dataPresentacion"],
    company: element["companyData"]["company"],
    titulation: element["requestPrimaryTitulation"]["name"],
    numberOffers: element["numberPositionsOffered"],
    email: element["email"],
});

console.log(offers_need);

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


export const tableOffersGenerator = () => {
    let table = document.createElement("table");
    table.setAttribute("id", "mi_tabla2");

    const tr = headRowGenerator();
    table.appendChild(tr);

    for (const value in header) {
        let th = headColumnGenerator();

        th.innerText = header[value];
        tr.appendChild(th);
    }

    loadOffers(table);
    divTable.appendChild(table);
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
