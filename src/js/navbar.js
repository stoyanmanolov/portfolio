const navBarItems = function () {
  return `<li class="nav-item"><a href="#">Home</a></li>
  <li class="nav-item"><a href="#skills">Skills</a></li>
  <li class="nav-item"><a href="#projects">Projects</a></li>
  <li class="nav-item"><a href="#footer">Contacts</a></li>`;
};

const drawer = document.getElementById("drawer");
drawer.innerHTML = navBarItems();

const navBar = document.getElementById("navbar");
navBar.innerHTML = navBarItems();
