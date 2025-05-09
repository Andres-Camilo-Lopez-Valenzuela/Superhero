// Lista de personajes, cada uno con nombre, descripción, casa editorial (Marvel o DC) e imagen.
const items = [
  {
    nombre: "Superman",
    descripcion: "El Hombre de Acero, originario de Krypton, es uno de los superhéroes más poderosos. Con habilidades sobrehumanas como vuelo, visión láser y fuerza increíble, lucha por la justicia y la verdad en Metropolis.",
    casa: "DC 1.",
    imagen: "https://media.gq.com.mx/photos/6046677d32fb42c17c0c6fe7/4:3/w_2664,h_1998,c_limit/SUPERMAN.jpg"
  },
  {
    nombre: "Spiderman",
    descripcion: "Peter Parker, un joven con el poder de trepar paredes y lanzar telarañas, se convierte en Spider-Man tras ser mordido por una araña radiactiva. Usando sus habilidades para proteger Nueva York, lucha contra el crimen mientras enfrenta problemas personales.",
    casa: "Marvel.",
    imagen: "https://wallpapercave.com/wp/wp10602635.jpg"
  },
  {
    nombre: "Dr strange",
    descripcion: "Neurocirujano brillante y arrogante, la vida del Doctor Stephen Strange cambió para siempre tras un accidente que dañó sus manos. En busca de curación, viajó al Himalaya y descubrió las artes místicas. Ahora como el Hechicero Supremo, Doctor Strange protege la realidad de amenazas mágicas y multidimensionales con hechizos, artefactos poderosos como el Ojo de Agamotto, y el uso del Sanctum Sanctorum como su base.",
    casa: "Marvel.",
    imagen: "https://vignette.wikia.nocookie.net/marveldatabase/images/7/71/Stephen_Strange_(Earth-199999)_from_Doctor_Strange_(film)_003.png/revision/latest?cb=20161101131324"
  },
  {
    nombre: "Hulk",
    descripcion: "Bruce Banner, un científico brillante, fue expuesto a rayos gamma durante un experimento fallido. Desde entonces, cuando se enfada, se transforma en Hulk, una criatura verde de fuerza descomunal y furia incontrolable. Aunque temido por muchos, Hulk es también un héroe que ha salvado al mundo en numerosas ocasiones, luchando constantemente entre su lado humano y su monstruoso alter ego.",
    imagen: "https://th.bing.com/th/id/R.e4dc7516c591c5073436fb1d06d8c345?rik=8PZNIT3LLNbhvw&riu=http%3a%2f%2fwww.vignette2.wikia.nocookie.net%2fmarvelmovies%2fimages%2f7%2f78%2fAvengers_age_of_ultron_hulk-art.jpg%2frevision%2flatest%2fscale-to-width-down%2f2000%3fcb%3d20160512192747&ehk=CLQ%2bXmF%2fDGX2UVy9J00tNcVB6WJXyPqcjfj4fuxYMUM%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    nombre: "Mujer maravilla",
    descripcion: "Diana es una princesa amazona, hija de la reina Hipólita, y una guerrera entrenada desde su niñez en la isla de Themyscira. Dotada por los dioses con fuerza, velocidad, sabiduría y resistencia sobrehumanas, lucha por la justicia como Wonder Woman. Porta el Lazo de la Verdad, unos brazaletes indestructibles y una tiara boomerang. Es uno de los pilares de la Liga de la Justicia y un símbolo de paz, fuerza y compasión",
    casa: "DC.",
    imagen: "https://static01.nyt.com/images/2017/06/02/arts/02WONDER/02WONDER-superJumbo.jpg"
  },
  {
    nombre: "Batman",
    descripcion: "Bruce Wayne, tras la trágica muerte de sus padres, se convierte en Batman para luchar contra el crimen en Gotham City. Con un vasto arsenal de tecnología avanzada y una gran habilidad en el combate cuerpo a cuerpo, combate la oscuridad con su propia sombra.",
    casa: "DC",
    imagen: "https://i.blogs.es/3da195/batman-ben-affleck/1024_2000.webp"
  }
];
// Referencias a elementos del DOM:
// - Contenedor donde se mostrarán las tarjetas.
// - Campo de búsqueda para filtrar personajes por nombre
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");

function renderItems(filter = "") {
  // Limpia el contenido actual del contenedor
  gallery.innerHTML = "";
  // Filtra los elementos cuyo nombre contenga el texto ingresado (ignorando mayúsculas/minúsculas)
  items
    .filter(item => item.nombre.toLowerCase().includes(filter.toLowerCase()))
    .forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.imagen}" alt="${item.nombre}">
        <h3>${item.nombre}</h3>
        <p>${item.descripcion}</p>
        <button class="ver-mas">Ver más</button>
        <div class="extra-info">${item.info}</div>
      `;
      gallery.appendChild(card);
    });

     // Agrega funcionalidad al botón "Ver más" para mostrar u ocultar más información
  document.querySelectorAll(".ver-mas").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.parentElement;
      card.classList.toggle("expanded");
      button.textContent = card.classList.contains("expanded") ? "Ver menos" : "Ver más";
    });
  });
}

// Evento que se activa cada vez que el usuario escribe en el campo de búsqueda.
// Actualiza la galería con los personajes cuyo nombre coincide.
searchInput.addEventListener("input", () => {
  renderItems(searchInput.value);
});

// Renderiza todos los personajes al cargar la página por primera vez.
renderItems();
