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
  const navMenu = document.getElementById('navMenu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

    
    const trips = [
      {
        name: "Zuma Rock",
        image: "images/zuma-rock.jpeg",
        loading: "lazy",
        alt: "Zuma Rock"
      },
      {
        name: "Obudu Mountain Resort",
        image: "images/obudu-resort.jpeg",
        loading: "lazy",
        alt: "Obudu Mountain Resort"
      },
      {
        name: "Yankari National Park",
        image: "images/yankari-reserve.jpeg",
        loading: "lazy",
        alt: "Yankari National Park"
      
      },
      {
        name: "Lekki Conservation Center",
        image: "images/lekki-conservation.jpeg",
        loading: "lazy",
        alt: "Lekki Conservation Center"
      },
      {
        name: "Nike Centre for Art and Culture",
        image: "images/nike-art-centre.jpg",
        loading: "lazy",
        alt: "Nike Centre for Art and Culture"
      }
    ];
  
    function displayTrips(trips) {
      const tripsContainer = document.querySelector('.trips-grid');
      if (!tripsContainer) return;
      tripsContainer.innerHTML = '';

      trips.forEach(trip => {
        const tripDiv = document.createElement('div');
        tripDiv.classList.add('trip-item');

        tripDiv.innerHTML = `
          <img src="${trip.image}" alt="${trip.alt}" loading="${trip.loading}">
          <h3>${trip.name}</h3>
        `;

        tripsContainer.appendChild(tripDiv);
      });
    }

    displayTrips(trips);

});


        