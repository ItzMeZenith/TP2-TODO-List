let lista = [];

const agregar = () => {
    let tareaIngresada = document.getElementById("tareainput").value;
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
            document.getElementById("listado").innerHTML += `<input ${tachado} onchange=tachar(${i}) type="checkbox" id="tarea" name="tarea"><del>${p.tarea} ⸻⸻ ${p.dateTachado}</del></input> <br>`;
        }
        else{
        document.getElementById("listado").innerHTML += `<input ${tachado} onchange=tachar(${i}) type="checkbox" id="tarea" name="tarea">${p.tarea} ⸻⸻ ${p.dateAhora}</input> <br>`;}
    });
}

const tachar = (i) => {
    lista[i].checked = !lista[i].checked;
    
    if (lista[i].checked) {
        lista[i].dateTachado = new Date();
    } else {
        lista[i].dateTachado = undefined;
    }
    mostrarEnPantalla();
}

mostrarEnPantalla();

function enterKeySubmit(){
	document.getElementById("tareainput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("botonsubmit").click();
        }
    });
}

enterKeySubmit()

const borrarTareas = () => {
    lista = [];
    mostrarEnPantalla();
    document.getElementById("tareaMasRapida").innerHTML = "La tarea mas rapido en completarse es: "
};

const tareaMasRapida = () => {
    let tareaMasRapida = ""; 
    let tareaViejaRapida = new Date();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].checked == true){
            if ((lista[i].dateTachado.getTime()-lista[i].dateAhora.getTime()) < tareaViejaRapida) {
                tareaViejaRapida = (lista[i].dateTachado.getTime()-lista[i].dateAhora.getTime());
                tareaMasRapida = lista[i].tarea;
            }
        }
        document.getElementById("tareaMasRapida").innerHTML = "La tarea mas rapido en completarse es: " + tareaMasRapida;
    }
}
