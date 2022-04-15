function run() {
  const paletteCount = document.getElementById("palette-count-input");
  generatePalette(paletteCount.value);

  [paletteCount].forEach((colorInput) => {
    colorInput.addEventListener("input", function () {
      generatePalette(paletteCount.value);
    });
  });
}

function generatePalette(paletteCount) {
  const paletteContainer = document.getElementById("palette");

  paletteContainer.innerHTML = "";

  const colorsPalette = chroma
    .scale(["white", "red"])
    .mode("lch")
    .colors(paletteCount);
  colorsPalette.forEach((palette) => {
    const paletteItem = document.createElement("div");
    paletteItem.classList.add("palette-item");
    paletteItem.style.setProperty("--palette-color", palette);
    paletteContainer.appendChild(paletteItem);
  });
}
window.addEventListener("load", (event) => {
  run();
});
