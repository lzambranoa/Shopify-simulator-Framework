/**
 * Este código de Javascript activa y desactiva el on listener del scroll
 * para poder agregar los estilos de transparencia del header
 */
window.onscroll = function() {
    const header = document.getElementById("header");
    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};
