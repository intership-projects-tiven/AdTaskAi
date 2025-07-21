import { useEffect } from "react";

const TwinklingStars = () => {
  const id = Math.random() + 'class';
  useEffect(() => {
    const svg = document.getElementById(id);
    const starCount = 15;

    for (let i = 0; i < starCount; i++) {
      const cx = Math.random() * 800;
      const cy = Math.random() * 600;
      const r = Math.random() * 1.5 + 0.3;
      const opacity = Math.random() * 0.8 + 0.2;
      const delay = Math.random() * 2; // Random delay for desynchronized twinkle

      const star = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle",
      );
      star.setAttribute("cx", cx.toString());
      star.setAttribute("cy", cy.toString());
      star.setAttribute("r", r.toString());
      star.setAttribute("fill", "white");
      star.setAttribute("opacity", opacity.toString());
      star.setAttribute("class", "twinkle");
      star.style.animationDelay = `${delay}s`;

      if (svg) {
        svg.appendChild(star);
      }
    }
  });
  return (
    <svg id={id} width="100%" height="100%" viewBox="0 0 800 600" ></svg>
  );
};

export default TwinklingStars;
