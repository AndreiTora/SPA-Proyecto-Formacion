function add_note() {
   let new_note = document.getElementById("new_note").value;

    if(new_note.length > 0) {
        let li = document.createElement('li');

        li.id = new_note;
        li.innerHTML = new_note;
        
        document.getElementById("notes_list").appendChild(li);
    }

    return false;
}
 
function remove_note(element) {
   var id = element.parentNode.getAttribute("id");
   node = document.getElementById(id);
   node.parentNode.removeChild(node);
}

window.onload = function() {
    let aside = document.getElementById("aside_left_notes");

    let container = document.createElement("div");
    let input = document.createElement("input");
    let button = document.createElement("button");
    let list = document.createElement("ul");

    input.setAttribute("id", "new_note");
    button.setAttribute("id", "add_note");
    button.innerHTML = "Crear Nota";
    list.setAttribute("id", "notes_list");

    aside.appendChild(container);
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(list);

    button.addEventListener("click", add_note);
    
}