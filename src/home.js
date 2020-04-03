import $ from "jquery";
import "bootstrap";
import "waypoints/lib/noframework.waypoints";

$(document).ready(() => {
  setupMouseAnimation();
  setupSmoothScroll();
  waypointCheck();
});

function generateGradient(x, y) {
  return `radial-gradient(at bottom left, rgba(46,158,183,1) ${x *
    25}%, rgba(49,25,109,1) 100%)`;
}

function setupMouseAnimation() {
  const el = $(".welcome-header");
  el.on("mousemove", e => {
    const x = e.clientX / el.width();
    const y = e.clientY / el.height();
    el.css("background", generateGradient(x, y));
  });
}

function setupSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  for (const a of anchors) {
    a.addEventListener("click", function(event) {
      event.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  }
}

function waypointCheck() {
  const waypoint = new Waypoint({
    element: document.getElementById("about-me"),
    offset: "50%",
    handler: function() {
      const elements1 = this.element.getElementsByClassName("offscreen-left");
      const elements2 = this.element.getElementsByClassName("offscreen-right");
      for (const el of [...elements1, ...elements2]) {
        el.classList.remove("offscreen-left", "offscreen-right");
      }
    }
  });
}
