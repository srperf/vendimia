const items = [
  {
    name: "Escritorio de ñoñear",
    images: [
      "https://www.office-furniture-direct.co.uk/Cache/Images/MI003193-1-2048-2048.jpg",
      "https://www.ikea.com/de/en/images/products/mittzon-desk-walnut-veneer-black__1209402_pe909191_s5.jpg",
      "https://www.office-furniture-direct.co.uk/Cache/Images/MI003273-1-2048-2048-1500x1500-opaque.jpg"
    ],
    description: "Escritorio donde se hace trabajo, 100x30x40",
    condition: "Bubi se sentó en el",
    claim: "Don Leandro",
    bid: "$500",
    status: "Apartado"
  },
  {
    name: "La silla",
    images: [
      "https://www.art-gallery-mallorca.com/wp-content/uploads/2022/06/hrg074002-15-23-hrgiger-capo-harkonnen-chair-197x61x60cm-resin-steel-rubber-web.jpg",
      "https://i.pinimg.com/736x/08/b5/0f/08b50f99d8356a0ebc712db512c42cc6.jpg"
    ],
    description: "Silla de patrona de Liebher super cool",
    condition: "Imponente",
    claim: "Aun nadie",
    bid: "$300",
    status: "disponible"
  }/*,
  {
    name: "Bookshelf",
    images: [
      "https://via.placeholder.com/400x300?text=Shelf+1",
      "https://via.placeholder.com/400x300?text=Shelf+2"
    ],
    description: "5-tier bookshelf, easy to move.",
    condition: "Good",
    claim: "Carlos",
    bid: "€40",
    status: "claimed"
  },
  {
    name: "Coffee Table",
    images: [
      "https://via.placeholder.com/400x300?text=Table+1"
    ],
    description: "Small coffee table, minimalist style.",
    condition: "Fair",
    claim: "—",
    bid: "€20",
    status: "available"
  },
  {
    name: "Floor Lamp",
    images: [
      "https://via.placeholder.com/400x300?text=Lamp+1",
      "https://via.placeholder.com/400x300?text=Lamp+2"
    ],
    description: "Tall lamp with warm light.",
    condition: "Very good",
    claim: "Bob",
    bid: "€25",
    status: "sold"
  }*/
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
