const contenedorDeInformacion = document.getElementById("contenedorInformacion");
const contenedorDeInformacionEducacion = document.getElementById("contenedorInformacionEducacion");
const contenedorDeExperiencia = document.getElementById("contenedorInformacionExperiencia");
const fotoDePerfil = document.getElementById("fotoPerfil");


const botonPerfil = document.getElementById("botonPerfil");
botonPerfil.addEventListener("click", () => {
    contenedorDeInformacion.style.display = "inline";
    contenedorDeInformacionEducacion.style.display = "none";
    contenedorDeExperiencia.style.display = "none";
    fotoDePerfil.style.filter = " grayscale(100%)";
    fotoDePerfil.style.width = "80px";
    botonPerfil.style.borderBottom = "0.1px solid #e9007d";
    botonEducacion.style.border = "hidden";
    botonExperiencia.style.border = "hidden";
});

const botonEducacion = document.getElementById("botonEducacion");
botonEducacion.addEventListener("click", () => {
    contenedorDeInformacion.style.display = "none";
    contenedorDeInformacionEducacion.style.display = "inline";
    contenedorDeExperiencia.style.display = "none";
    fotoDePerfil.style.filter = "none";
    fotoDePerfil.style.width = "100px";
    botonPerfil.style.border = "hidden";
    botonExperiencia.style.border = "hidden";
    botonEducacion.style.borderBottom = "0.1px solid #e9007d";

    ;

});

const botonExperiencia = document.getElementById("botonExperiencia");
botonExperiencia.addEventListener("click", () => {
    contenedorDeInformacion.style.display = "none";
    contenedorDeInformacionEducacion.style.display = "none";
    contenedorDeExperiencia.style.display = "inline";
    fotoDePerfil.style.filter = "none";
    fotoDePerfil.style.width = "100px";
    botonPerfil.style.border = "hidden";
    botonEducacion.style.border = "hidden";
    botonExperiencia.style.borderBottom = "0.1px solid #e9007d";





});
