import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>🎃 Safe Trick-or-Treating 🎃</h1>
        <p>Making Halloween safer for all ages!</p>
      </header>
      <section className="safety-tips">
        <h2>Safety Tips</h2>
        <ul>
          <li>Always carry a flashlight and wear reflective gear.</li>
          <li>Stay in groups and avoid dark, unfamiliar areas.</li>
          <li>Inspect treats before eating to ensure safety.</li>
          <li>Use sidewalks and crosswalks while walking.</li>
          <li>Plan a route in advance and inform family members.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
