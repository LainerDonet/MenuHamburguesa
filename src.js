const nav = document.querySelector("#nav");
const abrir =  document.querySelector("#btnAbrir");
const cerrar = document.querySelector("#btnCerrar");

abrir.addEventListener("click",()=>{
    nav.classList.add("visible");
    abrir.classList.add("ocultar");
})
cerrar.addEventListener("click",()=>{
    nav.classList.remove("visible");
    abrir.classList.remove("ocultar")
})
