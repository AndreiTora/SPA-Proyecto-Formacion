let estado = false;

export const sortAlpha = (array, property) => {
    if (estado === true) {
        estado = false;
    return array.sort(function (a,b) {
        if(a[property].toLowerCase() < b[property].toLowerCase()) return -1;
        if(a[property].toLowerCase() > b[property].toLowerCase()) return 1;
        return 0;
    })
    }else {
        estado = true;
        return array.sort(function (a,b) {
            if(a[property].toLowerCase() < b[property].toLowerCase()) return -1;
            if(a[property].toLowerCase() > b[property].toLowerCase()) return 1;
            return 0;
        }).reverse();
    }
}

export const sortTable = (document, property) => {  
    return sortAlpha(document, property);
}

