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

    const windchill = document.querySelector("#wind-chill");
    if (windchill) {
        const temp = parseFloat(document.querySelector("#temperature").textContent);
        const speed = parseFloat(document.querySelector("#wind-speed").textContent);
        if (temp <= 50 && speed > 3) {
            const chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
            windchill.textContent = chill.toFixed(2) + " °F";
        } else {
            windchill.textContent = "N/A";
        }
    }
});