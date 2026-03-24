// Search
function searchTools() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  if (!input) {
    alert("Please enter a tool type");
    return;
  }
  alert("Showing best results for: " + input);
}

// GEO Detection + Currency
function detectRegion() {
  const currencyMap = {
    US: "$",
    UK: "£",
    AU: "$",
    CA: "$"
  };

  const region =
    navigator.language.includes("en-GB") ? "UK" :
    navigator.language.includes("en-AU") ? "AU" :
    navigator.language.includes("en-CA") ? "CA" : "US";

  const currency = currencyMap[region];

  document.querySelectorAll(".price").forEach(el => {
    let price = el.getAttribute("data-price");
    el.innerText = currency + price + "/mo";
  });
}

detectRegion();

// CTA Tracking (important for ads optimization)
document.querySelectorAll(".cta").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Neospin CTA Click");
  });
});


function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// FILTER TOOLS
function filterTools(category) {
  const tools = document.querySelectorAll(".tool-row");

  tools.forEach(tool => {
    if (category === "all" || tool.dataset.category === category) {
      tool.style.display = "flex";
    } else {
      tool.style.display = "none";
    }
  });
}

// SCROLL TOP
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}