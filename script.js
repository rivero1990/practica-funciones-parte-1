const miTitulo = document.querySelector("#titulo-principal");
const miImagen = document.querySelector("#imagen");
const miEnlace = document.querySelector("#enlace");
const cuerpoDePagina = document.querySelector("body");

const IMAGEN_UNO = "https://th.bing.com/th?id=OIP.BWHJsDkfkdH0cnqkQqzVWQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
const IMAGEN_DOS = "https://th.bing.com/th/id/OIP.Nnrs5nrwB9RhHp9_Dss8bQHaEK?w=284&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
const IMAGEN_TRES = "https://th.bing.com/th/id/OIP.OWSpGf2FL9Jpee7t_AO41wHaFb?w=205&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"

const ENLACE_1 = "https://erick-c3.github.io/Trayecto-de-Programador-/"
const ENLACE_2 = "https://discord.com/"
const ENLACE_3 = "https://stackoverflow.com/"


let opcionRecibida = prompt("Ingrese a la pagina : \na\nb\nc");


function modificacionPagina(colorFondo, colorTexto, enlaceImg, enlacePagina ) {
    
    cuerpoDePagina.style.backgroundColor = colorFondo;
    cuerpoDePagina.style.color = colorTexto;
    miImagen.src = enlaceImg;
    miEnlace.href = enlacePagina;

}

if (opcionRecibida == "a"){
    modificacionPagina("orange", "black", IMAGEN_UNO, ENLACE_1);
}else if(opcionRecibida == "b"){
    modificacionPagina("black", "white", IMAGEN_DOS, ENLACE_2);
}else if(opcionRecibida == "c"){
    modificacionPagina("pink", "green", IMAGEN_TRES, ENLACE_3);
    
}


