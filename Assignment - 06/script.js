// ----------------- Navigation Highlight -----------------
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});

// ----------------- Packages Table -----------------
const packagesData = [
  { id: 1, destination: "Paris, France", durationDays: 5, basePrice: 1200, season: "spring" },
  { id: 2, destination: "Bali, Indonesia", durationDays: 7, basePrice: 1800, season: "summer" },
  { id: 3, destination: "New York, USA", durationDays: 4, basePrice: 1000, season: "winter" }
];

function calculateFinalPrice(pkg) {
  let price = pkg.basePrice;
  switch (pkg.season) {
    case "summer": price *= 1.2; break;
    case "winter": price *= 0.9; break;
    default: price *= 1.0;
  }
  if (pkg.durationDays > 5) {
    price += 200; // weekend surcharge
  }
  return price.toFixed(2);
}

function renderPackages() {
  const table = document.querySelector("#packages-table tbody");
  if (!table) return;
  table.innerHTML = "";
  packagesData.forEach(pkg => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pkg.destination}</td>
      <td>${pkg.durationDays} Days</td>
      <td>$${pkg.basePrice}</td>
      <td>$${calculateFinalPrice(pkg)}</td>
    `;
    table.appendChild(row);
  });
}
renderPackages();

// ----------------- Booking Form -----------------
function nightsBetween(d1, d2) {
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
}

function calculateBooking() {
  const checkIn = document.getElementById("checkIn").valueAsDate;
  const checkOut = document.getElementById("checkOut").valueAsDate;
  const guests = parseInt(document.getElementById("guests").value) || 1;
  const promo = document.getElementById("promo").value;

  if (!checkIn || !checkOut || checkOut <= checkIn) {
    document.getElementById("total").textContent = "Invalid dates";
    document.getElementById("submitBtn").disabled = true;
    return;
  }

  let nights = nightsBetween(checkIn, checkOut);
  let baseRate = 100; // per night
  let total = nights * baseRate;

  if (guests > 2) total *= 1.2;

  switch (promo.toUpperCase()) {
    case "EARLYBIRD": total *= 0.9; break;
    case "FESTIVE": total *= 0.8; break;
  }

  document.getElementById("total").textContent = `$${total.toFixed(2)}`;
  document.getElementById("submitBtn").disabled = false;
}

const bookingForm = document.querySelector("form");
if (bookingForm) {
  ["checkIn", "checkOut", "guests", "promo"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", calculateBooking);
  });
  bookingForm.addEventListener("submit", e => {
    if (document.getElementById("submitBtn").disabled) e.preventDefault();
  });
}

// ----------------- Gallery Modal -----------------
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `<span class="close">&times;</span><img id="modal-img"><p id="modal-caption"></p>`;
document.body.appendChild(modal);

const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("modal-caption");
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.dataset.large;
    captionText.textContent = img.alt;
  });
});

modal.querySelector(".close").onclick = () => modal.style.display = "none";
