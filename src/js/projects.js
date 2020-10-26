import Portfolio from "../images/Portfolio.jpg";
import Typespeed from "../images/Typespeed.jpg";
import ShoesSeller from "../images/ShoesSeller.jpg";
import WeatherApp from "../images/WeatherApp.jpg";

const projects = [
  {
    name: "Shoes Seller",
    description: "A MERN Stack E-Commerce app",
    demoLink: "https://gentle-chamber-19663.herokuapp.com/",
    githubLink: "https://github.com/stoyanmanolov/shoes-seller",
    image: ShoesSeller,
  },
  {
    name: "Weather App",
    description: "A weather app using OpenWeatherApi.",
    demoLink: "https://weather-app-sm.netlify.app",
    githubLink: "https://github.com/stoyanmanolov/weather-app",
    image: WeatherApp,
  },
  {
    name: "Typespeed",
    description: "A typing speed measuring app.",
    demoLink: "https://stoyanmanolov.github.io/typespeed",
    githubLink: "https://github.com/stoyanmanolov/typespeed",
    image: Typespeed,
  },
  {
    name: "Portfolio",
    description: "An HTML/CSS/JS portfolio website.",
    demoLink: "http://stoyanmanolov.github.io/portfolio",
    githubLink: "https://github.com/stoyanmanolov/portfolio",
    image: Portfolio,
  },
];

function sendProjectHTML(project, even) {
  return `<div class="card" data-aos=${even ? "fade-right" : "fade-left"}>
    <img src="${project.image}" class="image" alt="Project"/>
    <div class="body">
      <div class='text'>
        <div class="card-heading">
          <h4>${project.name}</h4>
          <hr class="card-divider">
        </div>
        <p>${project.description}</p>
      </div>
      <div class="links">
        <a href="${project.demoLink}" class="btn demo" target="_blank">DEMO</a>
        <a href="${
          project.githubLink
        }" class="btn github" target="_blank">GITHUB</a>
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
