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

/**
 * Fragmento de codigo para agregar el estilo active a los enlaces
 */
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
});



/* Este fragmento de código es responsable de gestionar la funcionalidad relacionada con la visualización y 
la gestión de las tarjetas de la collecion de productos */
document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.querySelector('.cards');
    const loadMoreBtn = document.querySelector('.load-more-btn'); // Botón para cargar más y menos
  
    const allCards = Array.from(cardsContainer.children); // Todas las cards
    const totalCards = allCards.length;
    let currentIndex = 4; // Cards visibles inicialmente en desktop
  
    // Función para actualizar la visibilidad en desktop
    function updateDesktopVisibility() {
      allCards.forEach((card, index) => {
        if (index < currentIndex) {
          card.style.display = 'flex'; // Muestra las cards visibles
        } else {
          card.style.display = 'none'; // Oculta las demás
        }
      });
  
      // Cambiar texto del botón según el estado
      if (currentIndex >= totalCards) {
        loadMoreBtn.textContent = 'VIEW LESS';
      } else {
        loadMoreBtn.textContent = 'VIEW ALL';
      }
    }
  
    // Alternar entre mostrar más y mostrar menos en desktop
    loadMoreBtn.addEventListener('click', function () {
      if (showMore) {
        currentIndex += 4; // Muestra 4 más
        if (currentIndex > totalCards) {
          currentIndex = totalCards; // Ajusta al total
        }
      } else {
        currentIndex = 4; // Regresa a las primeras 4
      }
      updateDesktopVisibility();
    });
  
    // Detecta el tamaño de pantalla y ajusta el comportamiento
    function updateView() {
      if (window.innerWidth <= 768) {
        // Modo móvil: mostrar todas las imágenes con desplazamiento
        allCards.forEach((card) => {
          card.style.display = 'flex';
        });
        loadMoreBtn.style.display = 'none'; // Oculta el botón
      } else {
        // Modo desktop: aplicar paginación
        updateDesktopVisibility();
        loadMoreBtn.style.display = 'block'; // Muestra el botón
      }
    }
  
    // Escuchar cambios de tamaño de ventana
    window.addEventListener('resize', updateView);
  
    // Inicialización
    updateView();
  });
  
  
  

