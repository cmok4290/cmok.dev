import React from "react";
import "./home.css";

export default function Home() {
  const div = document.createElement("div");
  div.id = "particles-js";
  document.body.appendChild(div);

  const particles = document.createElement("script");
  particles.src = "js/particles.js";
  document.body.appendChild(particles);

  const loader = document.createElement("script");
  loader.src = "js/app.js";
  document.body.appendChild(loader);

  return <div className="home"></div>;
}

/**
        <p>Photo by <a href="https://www.pexels.com/@felixmittermeier?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Felix Mittermeier</a> from <a href="https://www.pexels.com/photo/4k-wallpaper-android-wallpaper-astro-astrology-1146134/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Pexels</a></p>
 *
 */
