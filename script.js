document.addEventListener('DOMContentLoaded', function () {
    // Función para mostrar la sección seleccionada
    function showSection(hash) {
        // Ocultar todas las secciones
        var sections = document.querySelectorAll('.gallery-section');
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = 'none';
        }

        // Mostrar la sección actual
        var activeSection = document.querySelector(hash);
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    }

    // Manejar el cambio de hash en la URL
    window.addEventListener('hashchange', function () {
        showSection(window.location.hash);
    });

    // Mostrar la sección inicial
    showSection(window.location.hash || '#abstracto');
});
