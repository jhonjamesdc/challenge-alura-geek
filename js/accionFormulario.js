export function accionFormulario() {
    const botonLimpiar = document.querySelector("[data-limpiar]");
    const elFormulario = document.querySelector("[data-formulario]");

    botonLimpiar.addEventListener("click", (evento) => {
        evento.preventDefault();
        Swal.fire({
            title: '¿Está seguro de limpiar los campos del formulario?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, limpiarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                elFormulario.reset();
                Swal.fire(
                    'Formulario limpiado con exito',
                );
            }
        });
    });
}