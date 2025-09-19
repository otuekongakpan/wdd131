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

    function calculateWindChill(temp, speed) {
        if (temp <= 50 && speed > 3) {
            return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        }
        else {
            return "N/A";
        }
    }
    const windchill = document.querySelector("#wind-chill");
    if (windchill) {
        const tempElement = document.querySelector("#temperature");
        const speedElement = document.querySelector("#wind-speed");
        if (tempElement && speedElement) {
            const temp = parseFloat(tempElement.textContent);
            const speed = parseFloat(speedElement.textContent);
            const chill = calculateWindChill(temp, speed);
            windchill.textContent = (typeof chill === "number") ? chill.toFixed(2) + " °F" : chill;
        }
    }
});