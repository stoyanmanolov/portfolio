import Typed from "typed.js";

new Typed("#introduction", {
  strings: ["Hi! My name is <span>Stoyan</span>."],
  typeSpeed: 5,
  loop: false,
  showCursor: false,
  onComplete: function () {
    new Typed("#about-me", {
      strings: [
        "I'm a <span>Front End Developer</span> and a learning Web Designer living in Sofia, Bulgaria.^500 I like building simple, powerful, fast and good-looking websites.",
      ],
      typeSpeed: 5,
      startDelay: 500,
      loop: false,
      showCursor: false,
    });
  },
});
