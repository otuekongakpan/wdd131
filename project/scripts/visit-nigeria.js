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

    
    const attractions = [
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
    ];
  
    function displayAttractions(attractions) {
      const attractionsContainer = document.querySelector('.attractions-grid');
      if (!attractionsContainer) return;
      attractionsContainer.innerHTML = '';
  
      attractions.forEach(attraction => {
        const attractionDiv = document.createElement('div');
        attractionDiv.classList.add('attraction-item');
  
        attractionDiv.innerHTML = `
          <img src="${attraction.image}" alt="${attraction.alt}" loading="${attraction.loading}">
          <h3>${attraction.name}</h3>
        `;
    
        attractionsContainer.appendChild(attractionDiv);
      });
    }
  
    displayAttractions(attractions);

});


        