import Typed from "typed.js";

new Typed("#introduction", {
  strings: ["Hi! My name is <span>Stoyan</span>."],
  typeSpeed: 5,
  loop: false,
  showCursor: false,
  onComplete: function () {
    new Typed("#about-me", {
      strings: [
        "I'm a <span>Full-Stack Web Developer</span> living in Sofia, Bulgaria.^500 I like building powerful, fast and scalable websites.",
      ],
      typeSpeed: 5,
      startDelay: 500,
      loop: false,
      showCursor: false,
    });
  },
});
