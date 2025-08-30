let puzzleContainer = document.getElementById("puzzle");
let mensaje = document.getElementById("mensaje");
let cronometro = document.createElement("p");
cronometro.id = "cronometro";
mensaje.insertAdjacentElement("afterend", cronometro);

let piezas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];
let estado = [];
let imagenesPiezas = [
    "img/pieza1.png", "img/pieza2.png", "img/pieza3.png", "img/pieza4.png",
    "img/pieza5.png", "img/pieza6.png", "img/pieza7.png", "img/pieza8.png",
    "img/pieza9.png", "img/pieza10.png", "img/pieza11.png", "img/pieza12.png",
    "img/pieza13.png", "img/pieza14.png", "img/pieza15.png", "img/pieza16.png", ""
];


let tiempo = 10;
let timerInterval;

function iniciarCronometro() {
    detenerCronometro();
    tiempo = 10;  
    cronometro.innerText = "Tiempo: " + tiempo + "s";
    timerInterval = setInterval(() => {
        tiempo--;
        cronometro.innerText = "Tiempo: " + tiempo + "s";
        
        if (tiempo <= 0) {
            detenerCronometro();
            mensaje.innerText = "¡PERDISTE! Se acabó el tiempo";
             alert("¡Perdiste! El tiempo se ha agotado.");
        }

    }, 1000);
}

function detenerCronometro() {
    clearInterval(timerInterval);
}

function mezclar(array) {
    let copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function dibujar() {
    puzzleContainer.innerHTML = "";
    estado.forEach((valor, i) => {
        let celda = document.createElement("div");
        celda.classList.add("celda");
        if (valor === "") {
            celda.classList.add("vacio");
        } else {
            let indiceImagen = piezas.indexOf(valor);
            celda.style.backgroundImage = `url(${imagenesPiezas[indiceImagen]})`;
            celda.style.backgroundSize = "cover";
            celda.addEventListener("click", () => mover(i));
        }
        puzzleContainer.appendChild(celda);
    });
}

function mover(indice) {
    let vacio = estado.indexOf("");
    let filas = 4;
    let col = indice % filas;
    let fila = Math.floor(indice / filas);
    let colVacio = vacio % filas;
    let filaVacio = Math.floor(vacio / filas);
    if ((Math.abs(col - colVacio) === 1 && fila === filaVacio) ||
        (Math.abs(fila - filaVacio) === 1 && col === colVacio)) {
        [estado[indice], estado[vacio]] = [estado[vacio], estado[indice]];
        dibujar();
        verificar();
    }
}

function verificar() {
    if (JSON.stringify(estado) === JSON.stringify(piezas)) {
        detenerCronometro();
        mensaje.innerText = "¡FELICIDADES! Completaste el Rompecabezas en " + tiempo + "s";
          alert("¡FELICIDADES! Completaste el Rompecabezas");
    }
}

function reiniciar() {
    estado = mezclar(piezas);
    mensaje.innerText = "";
    dibujar();
    iniciarCronometro();
}

window.onload = reiniciar;
