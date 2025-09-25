document.addEventListener("DOMContentLoaded", function () {

  const yearSpan = document.querySelector("#currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const modifiedSpan = document.querySelector("#lastModified");
  if (modifiedSpan) {
    const lastModified = new Date(document.lastModified);
    const options = { year: "numeric", month: "long", day: "numeric" };
    modifiedSpan.textContent = lastModified.toLocaleDateString("en-US", options);
  }
  
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
   
  const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Adelaide Australia",
    location: "Adelaide, Australia",
    dedicated: "1999, May, 29",
    area: "107000",
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"
    },
    {
      templeName: "Bacolod Philippines",
      location: "Bacolod Access Airport Road, Bacolod, Philippines",
      dedicated: "2021, December, 11",
      area: "26700",
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-24089-main.jpg"
    },
    {
      templeName: "Billings Montana",
      location: "Billings, Montana, United States",
      dedicated: "1998, March, 30",
      area: "33800",
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/billings-montana-temple/billings-montana-temple-8805-main.jpg"
    }
];
  function displayTemples(temples) {
    document.querySelector(".grid-container").innerHTML = "";
    const container = document.querySelector(".grid-container");
    container.innetHTML = "";
    temples.forEach(temple => {
      const card = document.createElement("div");
      card.classList.add("temple-card");

      card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <img src="${temple.imageUrl}" alt="${temple.templeName}  loading="lazy">
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
    `;

      container.appendChild(card);
    });
  }

  displayTemples(temples);

  const oldLink = document.querySelector("#old");

  oldLink.addEventListener("click", () => {
    let old = temples.filter(temple => temple.dedicated < "1900");
    displayTemples(old);
  })

  const newLink = document.querySelector("#new");
  newLink.addEventListener("click", () => {
    let newTemples = temples.filter(temple => temple.dedicated > "2000");
    displayTemples(newTemples);

  })
  
  const homeLink = document.querySelector("#home");
  homeLink.addEventListener("click", () => {
    let home = temples;
    displayTemples(home);
  })

  const largeLink = document.querySelector("#large");
  largeLink.addEventListener("click", () => {
    let large = temples.filter(temple => temple.area > "90000");
    displayTemples(large);
  })

  const smallLink = document.querySelector("#small");
  smallLink.addEventListener("click", () => {
    let small = temples.filter(temple => temple.area < "10000");
    displayTemples(small);
  })

});