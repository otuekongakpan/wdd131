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
        text: "Zuma Rock is a natural monolith located in Niger State, Nigeria. It is often referred to as the 'Gateway to Abuja' due to its proximity to the capital city. The rock stands at about 725 meters (2,379 feet) above sea level and is known for its unique shape that resembles a human face. Zuma Rock is a popular tourist attraction and holds cultural significance for the local Gwari people."
        
      },
      {
        name: "Obudu Mountain Resort",
        image: "images/obudu-resort.jpeg",
        loading: "lazy",
          alt: "Obudu Mountain Resort",
        text: "Obudu Mountain Resort, also known as Obudu Cattle Ranch, is a popular tourist destination located in Cross River State, Nigeria. It is situated on the Obudu Plateau and is known for its scenic beauty, cool climate, and diverse flora and fauna. The resort offers various attractions, including cable cars, hiking trails, waterfalls, and a water park. It is a favorite spot for nature lovers and adventure seekers."
      },
      {
        name: "Yankari National Park",
        image: "images/yankari-reserve.jpeg",
        loading: "lazy",
          alt: "Yankari National Park",
        text: "Yankari National Park is a renowned wildlife reserve located in Bauchi State, Nigeria. It is one of the largest and most popular national parks in the country, covering an area of approximately 2,244 square kilometers (866 square miles). The park is home to a diverse range of wildlife, including elephants, lions, buffaloes, hippos, and various species of birds. Yankari National Park is also known for its natural warm springs, which are believed to have therapeutic properties. The park offers opportunities for game drives, bird watching, and cultural experiences with local communities."
      
      },
      {
        name: "Lekki Conservation Center",
        image: "images/lekki-conservation.jpeg",
        loading: "lazy",
          alt: "Lekki Conservation Center",
        text: "Lekki Conservation Center is a protected area located in Lagos, Nigeria. It is a popular destination for nature lovers and outdoor enthusiasts. The center features a variety of ecosystems, including wetlands, savannahs, and forests, and is home to diverse wildlife such as monkeys, birds, and reptiles. Visitors can explore the park through walking trails, canopy walks, and picnic areas. The Lekki Conservation Center also serves as an educational facility, promoting environmental awareness and conservation efforts."
      },
      {
        name: "Nike Centre for Art and Culture",
        image: "images/nike-art-centre.jpg",
        loading: "lazy",
          alt: "Nike Centre for Art and Culture",
        text: "The Nike Centre for Art and Culture is an art gallery and cultural center located in Enugu, Nigeria. It was established by the renowned Nigerian artist Nike Davies-Okundaye, who is known for her contributions to the promotion of traditional African art and culture. The center showcases a wide range of artworks, including paintings, sculptures, textiles, and crafts created by local artists. It also offers workshops, exhibitions, and cultural events aimed at preserving and promoting Nigerian art and heritage."
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


        