import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
//import me from "../../assets/main.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Hammy's Hamburgers</h4>
          <p>
            We are Hammy's Hamburgers. The place for most tasty burgers.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              
              <h3>Rutvik Makwana</h3>
            </div>

            <p>
              I am Rutvik Makwana, the founder of Hammy's Hamburgers. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
