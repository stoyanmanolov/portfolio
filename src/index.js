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

// Toggle Drawer
let open = false;

document.getElementById("toggler").addEventListener("click", (event) => {
  if (!open) {
    document.body.classList.add("drawer-body");
    document.getElementById("drawer").classList.add("drawer");
    document.getElementById("content").classList.add("drawer-content");
    open = true;
  } else if (open) {
    document.body.classList.remove("drawer-body");
    document.getElementById("drawer").classList.remove("drawer");
    document.getElementById("content").classList.remove("drawer-content");
    open = false;
  }
});
