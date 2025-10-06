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

    const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
    ];
    const productSelect = document.getElementById("products");
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
        productSelect.appendChild(option);
        
    });

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