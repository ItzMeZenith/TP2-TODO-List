let lista = [
    {
        tarea:""
    }];

const agregar = () => {
    let tareaIngresada = document.getElementById("tarea").value;

    if(tareaIngresada != "")
    lista.push({
        tarea: tareaIngresada,
    });

    mostrarEnPantalla();
}

const mostrarEnPantalla = () => {
    document.getElementById("listado").innerHTML = "";
    lista.forEach(p => {
        document.getElementById("listado").innerHTML += `<input type="checkbox" id="tarea" name="tarea" onclick="validarCheckbox()"> ${p.tarea} </input> <br>`;
    });
}

const validarCheckbox = () => {
    if (document.getElementById("tarea").checked) {
        console.log("checked");
    } else {
        console.log("unchecked");
    }
    
    //strike()
}

mostrarEnPantalla();