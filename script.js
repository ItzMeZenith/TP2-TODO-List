let lista = [];

const agregar = () => {
    let tareaIngresada = document.getElementById("tarea").value;
    const ahora = new Date()

    if(tareaIngresada != "")
    lista.push({
        tarea: tareaIngresada,
        checked: false,
        dateAhora: ahora
    });

    mostrarEnPantalla();
}

const mostrarEnPantalla = () => {
    document.getElementById("listado").innerHTML = "";
    lista.forEach((p, i) => {
        let tachado = "";
        if (p.checked) {
            tachado = "checked";
            document.getElementById("listado").innerHTML += `<input ${tachado} onchange=tachar(${i}) type="checkbox" id="tarea" name="tarea"><del>${p.tarea}</del></input> <br>`;
        }
        else{
        document.getElementById("listado").innerHTML += `<input ${tachado} onchange=tachar(${i}) type="checkbox" id="tarea" name="tarea">${p.tarea} ${p.dateAhora}</input> <br>`;}
    });
}

const tachar = (indice) => {
    lista[indice].checked = !lista[indice].checked;
    mostrarEnPantalla();
}

mostrarEnPantalla();

//al tachar y crear agregar dateTime