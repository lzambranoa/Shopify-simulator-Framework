/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("/**\r\n * Este código de Javascript activa y desactiva el on listener del scroll\r\n * para poder agregar los estilos de transparencia del header\r\n */\r\nwindow.onscroll = function() {\r\n    const header = document.getElementById(\"header\");\r\n    if (window.pageYOffset > 0) {\r\n        header.classList.add(\"sticky\");\r\n    } else {\r\n        header.classList.remove(\"sticky\");\r\n    }\r\n};\r\n\r\n/**\r\n * Fragmento de codigo para agregar el estilo active a los enlaces\r\n */\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const navLinks = document.querySelectorAll('.nav-link');\r\n\r\n  navLinks.forEach(link => {\r\n    link.addEventListener('click', function() {\r\n      navLinks.forEach(nav => nav.classList.remove('active'));\r\n      this.classList.add('active');\r\n    });\r\n  });\r\n});\r\n\r\n\r\n\r\n/* Este fragmento de código es responsable de gestionar la funcionalidad relacionada con la visualización y \r\nla gestión de las tarjetas de la collecion de productos */\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    const cardsContainer = document.querySelector('.cards');\r\n    const loadMoreBtn = document.querySelector('.load-more-btn'); // Botón para cargar más y menos\r\n  \r\n    const allCards = Array.from(cardsContainer.children); // Todas las cards\r\n    const totalCards = allCards.length;\r\n    let currentIndex = 4; // Cards visibles inicialmente en desktop\r\n  \r\n    // Función para actualizar la visibilidad en desktop\r\n    function updateDesktopVisibility() {\r\n      allCards.forEach((card, index) => {\r\n        if (index < currentIndex) {\r\n          card.style.display = 'flex'; // Muestra las cards visibles\r\n        } else {\r\n          card.style.display = 'none'; // Oculta las demás\r\n        }\r\n      });\r\n  \r\n      // Cambiar texto del botón según el estado\r\n      if (currentIndex >= totalCards) {\r\n        loadMoreBtn.textContent = 'VIEW LESS';\r\n      } else {\r\n        loadMoreBtn.textContent = 'VIEW ALL';\r\n      }\r\n    }\r\n  \r\n    // Alternar entre mostrar más y mostrar menos en desktop\r\n    loadMoreBtn.addEventListener('click', function () {\r\n      if (showMore) {\r\n        currentIndex += 4; // Muestra 4 más\r\n        if (currentIndex > totalCards) {\r\n          currentIndex = totalCards; // Ajusta al total\r\n        }\r\n      } else {\r\n        currentIndex = 4; // Regresa a las primeras 4\r\n      }\r\n      updateDesktopVisibility();\r\n    });\r\n  \r\n    // Detecta el tamaño de pantalla y ajusta el comportamiento\r\n    function updateView() {\r\n      if (window.innerWidth <= 768) {\r\n        // Modo móvil: mostrar todas las imágenes con desplazamiento\r\n        allCards.forEach((card) => {\r\n          card.style.display = 'flex';\r\n        });\r\n        loadMoreBtn.style.display = 'none'; // Oculta el botón\r\n      } else {\r\n        // Modo desktop: aplicar paginación\r\n        updateDesktopVisibility();\r\n        loadMoreBtn.style.display = 'block'; // Muestra el botón\r\n      }\r\n    }\r\n  \r\n    // Escuchar cambios de tamaño de ventana\r\n    window.addEventListener('resize', updateView);\r\n  \r\n    // Inicialización\r\n    updateView();\r\n  });\r\n  \r\n  \r\n  \r\n\r\n\n\n//# sourceURL=webpack://shopify-simulator/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;