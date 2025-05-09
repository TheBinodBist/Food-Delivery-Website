import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: "0",
      opacity: 1,
    },
  };
  return (
    <>
    <section className="home">
      <div>
        <motion.h1 {...options} transition={{delay:0.2}}>Burger Station</motion.h1>
        <motion.p {...options} transition={{ delay: 0.2 }}>
          Give yourself a testy burger
        </motion.p>
      </div>
      <motion.a initial={{y:"-100%",opacity:0,}} whileInView={{y:0,opacity:1}} transition={{delay:0.2}}  href="#menu">Explore menu</motion.a>
    </section>
    <Founder/>
    <Menu/>
    </>
  );
};

export default Home;
