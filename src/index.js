import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "./styles/global/styles.scss";
import "./styles/nav.scss";
import "./styles/header.scss";
import "./styles/skills.scss";
import "./styles/projects.scss";
import "./styles/footer.scss";
import "./styles/drawer.scss";
import "./js/navbar";
import "./js/projects";
import "./js/typing";
import "./js/animations";

// Show root
document.body.style.display = "initial";

// Toggle Drawer
let open = false;

function openDrawer() {
  const togglerBars = document
    .getElementById("toggler")
    .getElementsByTagName("span");

  Array.prototype.slice.call(togglerBars).forEach((toggleBar) => {
    toggleBar.classList.add("open");
  });

  document.body.classList.add("drawer-body");
  document.getElementById("drawer").classList.add("drawer-open");
  document.getElementById("content").classList.add("drawer-content");
  open = true;
}

function closeDrawer() {
  const togglerBars = document
    .getElementById("toggler")
    .getElementsByTagName("span");

  Array.prototype.slice.call(togglerBars).forEach((toggleBar) => {
    toggleBar.classList.remove("open");
  });

  document.body.classList.remove("drawer-body");
  document.getElementById("drawer").classList.remove("drawer-open");
  document.getElementById("content").classList.remove("drawer-content");
  open = false;
}

document.getElementById("toggler").addEventListener("click", (event) => {
  if (!open) {
    openDrawer();
  } else if (open) {
    closeDrawer();
  }
});

// Close the drawer when redirecting from the menu to a section.
const menuItems = document.getElementById("drawer").getElementsByTagName("a");

Array.prototype.slice.call(menuItems).forEach((menuItem) => {
  menuItem.addEventListener("click", (event) => {
    closeDrawer();
  });
});
