import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/main.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Shivani Patel</h3>

        <p>
          Hey, Everyone I am Shovani Patel, the founder of Hammy's Hamburgers.
          <br />
          Our aim is to create the most tasty burger.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
