const items = [
  {
    name: "Mesa Comedor Escritorio",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039490/ComedorEscritorio2_sinno1.jpg"
        ],
    description: "120 x 75 x 72",
    condition: "Cafe, Usada, 5 años",
    claim: "Todavia Nadie",
    bid: "$500, con sillas $1000",
    status: "Disponible"
  },
  {
    name: "Apple Watch",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039490/AppleWatch1_bir3na.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039486/AppleWatch2_raitia.jpg"
    ],
    description: "Apple watch SE Gen2",
    condition: "Nuevo en caja",
    claim: "Aun nadie",
    bid: "$1000",
    status: "Disponible"
  },
  {
    name: "Arbol Gatos",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039490/ArbolGatos_mk7n7x.jpg"
    ],
    description: "Grande 62 x 50 x 200",
    condition: "MUY Usado",
    claim: "Aun nadie",
    bid: "$200 no fijo ofrezcale!",
    status: "Disponible"
  },
  {
    name: "Burós de cama",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039488/Buros1_gm0pcv.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039485/Buros2_l2j4qa.jpg"
    ],
    description: "2 piezas, cada una 50 x 40 x 50",
    condition: "Usado, como nuevo",
    claim: "Aun Nadie",
    bid: "$300",
    status: "Disponible"
  },
  {
    name: "Calentador de aceite",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039485/Calentador_ijbba4.jpg"
    ],
    description: "Electrico para calentar habitaciones.",
    condition: "Funciona perfecto.",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  },
  {
    name: "Eliptica",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039484/Eliptica1_y8vhwz.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039489/Eliptica2_rcw7j2.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039484/Eliptica3_lnbrf9.jpg"
    ],
    description: "Eliptica para ejercicio",
    condition: "Usada funciona bien",
    claim: "Don Leandro",
    bid: "$2000",
    status: "vendido"
  },
  {
    name: "Espejo",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039485/Espejo_gxi3gn.jpg"
    ],
    description: "Espejo de cuerpo completo 38 x 0,5 x 142",
    condition: "Como nuevo",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  },
  {
    name: "Racks de almacenaje ",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039488/EstanteroAlmacen_xj9gap.jpg"
    ],
    description: "Muebles para almacenar, son 2. Cada uno 90 x 42 x 188",
    condition: "Como nuevo",
    claim: "Aun Nadie",
    bid: "$200 cada uno",
    status: "2 Disponibles"
  },
  {
    name: "Estante",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039484/EstanteroGris_t9icef.jpg"
    ],
    description: "Estantero cuadrado gris obscuro 55 x 40 x 180",
    condition: "Como nuevo",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  },
  {
    name: "Estante triangular",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039485/LibreroTriangular_bihgcw.jpg"
    ],
    description: "Triangular a base de tablones",
    condition: "Como nuevo",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  },
  {
    name: "Mata Insectos",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039486/MataInsectos_cqd3nw.jpg"
    ],
    description: "Lampara mata insectos electrico para colgar",
    condition: "Funciona muy bien",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  },
  {
    name: "Mesita de cafe plegable",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/MesitaPlegable1_ujby7m.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/MesitaPlegable2_uwuhwm.jpg"
    ],
    description: "Mesita de aglomerado plegable multiusos. 50 x 37 x 66",
    condition: "Usada como nueva.",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  },
  {
    name: "Mesa Centro de Sala",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039488/MesaSala1_mclszs.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/MesaSala2_gbbydr.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/MesaSala3_yw7vew.jpg"
    ],
    description: "Mesa de madera parota, no es aglomerado. 80 x 60 x 45",
    condition: "Usada, como nueva. Es muy resistente.",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  },
  {
    name: "Mueble de television",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039486/MuebleTV1_izoek5.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/MuebleTV2_s10oht.jpg"
    ],
    description: "Mueble para television con cajon y puertas. No incluye contenido. 160 x 40 x 62",
    condition: "Usado, como nuevo",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  },
  {
    name: "Silla para escritorio",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/SillaEscrBlanca1_gfqxjw.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039487/SillaEscrBlanca2_mximoi.jpg"
    ],
    description: "Silla para escritorio blanca con pistón.",
    condition: "Usada",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  },
  {
    name: "Sofa cama",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039486/SillonMora1_wsktan.jpg",
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039485/SillonMora2_ibodcv.jpg"
    ],
    description: "Sofa cama violeta. Se jala una segunda cama de abajo. 195 x 100 x 65",
    condition: "Usado y algo despintado",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  },
  {
    name: "Televisión 32 pulgadas",
    images: [
      "https://res.cloudinary.com/dpdwof2hx/image/upload/v1768039486/TeleSams32_sxltjt.jpg"
    ],
    description: "Televisión samsung led 32 pulgadas con control remoto. LN32A450",
    condition: "Usada",
    claim: "Aun Nadie",
    bid: "$500",
    status: "Disponible"
  }
  /* Copiar a partir de la coma de abajo hasta antes del asterisco y pegar aqui arriba
  ,
  {
    name: "Nam",
    images: [
      "URL1",
      "URL2"
    ],
    description: "Desc",
    condition: "Cond",
    claim: "Aun Nadie",
    bid: "$250",
    status: "Disponible"
  }
    */
];

const catalog = document.getElementById("catalog");

items.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  const gallery = item.images
    .map(img => `<img src="${img}" alt="${item.name}">`)
    .join("");

  card.innerHTML = `
    <img class="main-image" src="${item.images[0]}" alt="${item.name}">
    <div class="card-title">${item.name}</div>
    <div class="status ${item.status}">
        ${item.status.toUpperCase()}
      </div>

    <div class="overlay">
      <div class="image-gallery">
        ${gallery}
      </div>

      <p><strong>Descripcion:</strong> ${item.description}</p>
      <p><strong>Condicion:</strong> ${item.condition}</p>
      <p><strong>Quien ofertó ultimo:</strong> ${item.claim}</p>
      <p><strong>Monto:</strong> ${item.bid}</p>

      <div class="status ${item.status}">
        Status: ${item.status.toUpperCase()}
      </div>
    </div>
  `;

  catalog.appendChild(card);
});


// ===== LIGHTBOX FUNCTIONALITY =====
document.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG" && e.target.closest(".card")) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = e.target.src;
    lightbox.classList.remove("hidden");
  }

  if (
    e.target.classList.contains("close") ||
    e.target.id === "lightbox"
  ) {
    document.getElementById("lightbox").classList.add("hidden");
  }
});
