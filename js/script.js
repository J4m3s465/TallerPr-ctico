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

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;

    if (telefono.length !== 10 || isNaN(telefono)) {
        alert("El número de teléfono debe tener 10 dígitos numéricos.");
        return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor ingrese un email válido.");
        return false;
    }

    return true;
}

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (validarFormulario()) {
        this.submit();
    }
});
