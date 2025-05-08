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
    nombre: "Batman",
    descripcion: "Bruce Wayne, tras la trágica muerte de sus padres, se convierte en Batman para luchar contra el crimen en Gotham City. Con un vasto arsenal de tecnología avanzada y una gran habilidad en el combate cuerpo a cuerpo, combate la oscuridad con su propia sombra.",
    casa: "DC",
    imagen: "https://i.blogs.es/3da195/batman-ben-affleck/1024_2000.webp"
  }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");

function renderItems(filter = "") {
  gallery.innerHTML = "";

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

  document.querySelectorAll(".ver-mas").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.parentElement;
      card.classList.toggle("expanded");
      button.textContent = card.classList.contains("expanded") ? "Ver menos" : "Ver más";
    });
  });
}

searchInput.addEventListener("input", () => {
  renderItems(searchInput.value);
});

renderItems();
