var header = document.getElementById("myHeader");
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px"; 
    prevScrollPos = currentScrollPos;
}
}
let btnSolicitarInformacion = document.getElementById("btn-solicitar-informacion");

let modalInformacion = document.getElementById("modal-informacion");

btnSolicitarInformacion.addEventListener("click", function() {
    modalInformacion.classList.add('show');
    modalInformacion.style.display = 'block';
    modalInformacion.setAttribute('aria-hidden', 'false');
});

let btnCerrarModal = document.querySelectorAll('[data-bs-dismiss="modal"]');

btnCerrarModal.forEach(function(btn) {
    btn.addEventListener('click', function() {
        modalInformacion.classList.remove('show');
        modalInformacion.style.display = 'none';
        modalInformacion.setAttribute('aria-hidden', 'true');
    });
});
