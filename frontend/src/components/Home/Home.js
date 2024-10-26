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
        <h2>Safety Tips for a Fun Halloween</h2>

        <div className="tip-section">
          <h3>1. Carry a Flashlight</h3>
          <p>
            A flashlight not only helps you see in the dark but also makes you
            visible to others. This is especially important in areas with low
            lighting, where it may be difficult for cars or other
            trick-or-treaters to spot you.
          </p>
        </div>

        <div className="tip-section">
          <h3>2. Wear Reflective Gear</h3>
          <p>
            Reflective gear can be life-saving when trick-or-treating at night.
            Even simple additions, like reflective tape on costumes or bags,
            help drivers spot you from a distance, making your Halloween safer.
          </p>
        </div>

        <div className="tip-section">
          <h3>3. Stay in Groups</h3>
          <p>
            Staying together not only makes the experience more fun but also
            increases safety. Traveling in groups makes it easier to keep track
            of each other, and adults accompanying kids can be extra eyes and
            ears on the lookout.
          </p>
        </div>

        <div className="tip-section">
          <h3>4. Inspect Treats Before Eating</h3>
          <p>
            It’s always best to check candy and treats before consuming them.
            Make sure that items are sealed and look unaltered. Avoid homemade
            treats unless they're from a trusted source.
          </p>
        </div>

        <div className="tip-section">
          <h3>5. Stick to Sidewalks and Crosswalks</h3>
          <p>
            Use sidewalks whenever possible and cross streets only at designated
            crosswalks. Avoid shortcuts or jaywalking, as Halloween night can be
            especially risky with increased foot and vehicle traffic.
          </p>
        </div>

        <div className="tip-section">
          <h3>6. Plan Your Route in Advance</h3>
          <p>
            Mapping out your trick-or-treating route before you head out helps
            you stay on familiar streets. Share your route with family members
            so that everyone knows where you'll be and when you plan to return.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
