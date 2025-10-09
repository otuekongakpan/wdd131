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
        alt: "Zuma Rock",
        text: "Zuma Rock is a natural monolith located in Niger State, Nigeria. It is often referred to as the 'Gateway to Abuja' due to its proximity to the capital city.",
            button: "See More",

      },
      {
        name: "Obudu Mountain Resort",
        image: "images/obudu-resort.jpeg",
        loading: "lazy",
          alt: "Obudu Mountain Resort",
          text: "Obudu Mountain Resort, also known as Obudu Cattle Ranch, is a popular tourist destination located in Cross River State, Nigeria.",

      },
      {
        name: "Yankari National Park",
        image: "images/yankari-reserve.jpeg",
        loading: "lazy",
          alt: "Yankari National Park",
        text: "Yankari National Park is a renowned wildlife reserve located in Bauchi State, Nigeria. It is one of the largest and most popular national parks in the country."

      },
      {
        name: "Lekki Conservation Center",
        image: "images/lekki-conservation.jpeg",
        loading: "lazy",
          alt: "Lekki Conservation Center",
        text: "Lekki Conservation Center is a protected area located in Lagos, Nigeria. It is a popular destination for nature lovers and outdoor enthusiasts."
      },
      {
        name: "Nike Centre for Art and Culture",
        image: "images/nike-art-centre.jpg",
        loading: "lazy",
          alt: "Nike Centre for Art and Culture",
          text: "The Nike Centre for Art and Culture is an art gallery and cultural center located in Enugu, Nigeria. It was established by the renowned Nigerian artist Nike Davies-Okundaye.",

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
          <p>${trip.text}</p>
            
        `;

        tripsContainer.appendChild(tripDiv);
      });
    }

    displayTrips(trips);



let reviewCount = localStorage.getItem("reviewCount");

  if (!reviewCount) {
    reviewCount = 0;
  }

  reviewCount = Number(reviewCount) + 1;

  localStorage.setItem("reviewCount", reviewCount);

  document.addEventListener("DOMContentLoaded", () => {
    const message = document.createElement("p");
    message.textContent = `You have submitted ${reviewCount} review${reviewCount > 1 ? "s" : ""}.`;
    document.body.appendChild(message);
  });
 

});


        