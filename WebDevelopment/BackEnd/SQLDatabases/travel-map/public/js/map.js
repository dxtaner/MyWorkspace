window.addEventListener("load", () => {
  const svgObject = document.getElementById("svgMap");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;

    visitedCountries.forEach((c) => {
      const country = svgDoc.querySelector(`#${c.code}`);
      if (country) {
        country.style.fill = "#00ff88";
      }
    });
  });
});
