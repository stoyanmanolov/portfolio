const projects = [
  {
    name: "Shoes Seller",
    description: "A MERN Stack E-Commerce app",
  },
  {
    name: "Portfolio",
    description: "An HTML/CSS/JS portfolio website.",
  },
];

function sendProjectHTML(project, even) {
  return `<div class="card" data-aos=${even ? "fade-right" : "fade-left"}>
    <div class="image"></div>
    <div class="body">
      <div class='text'>
        <div class="card-heading">
          <h4>${project.name}</h4>
          <hr class="card-divider">
        </div>
        <p>${project.description}</p>
      </div>
      <div class="buttons">
        <button class="btn demo">DEMO</button>
        <button class="btn github">GITHUB</button>
      </div>
    </div>
  </div>`;
}
projects.forEach((project, index) => {
  document.getElementById("projects").innerHTML += sendProjectHTML(
    project,
    index % 2 === 0
  );
});
