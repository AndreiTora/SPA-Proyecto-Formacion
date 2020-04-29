export const sortAlpha = (array, property) => {
    return array.sort(function (a,b) {
        if(a[property].toLowerCase() < b[property].toLowerCase()) return -1;
        if(a[property].toLowerCase() > b[property].toLowerCase()) return 1;
        return 0;
    })
}

export const sortTable = (document, property) => {  
    return sortAlpha(document, property);
}

