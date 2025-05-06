import React from 'react'
import {motion} from 'framer-motion'
import founder from '../../assets/founder.jpg'

const Founder = () => {
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
    <section className='founder'>
        <motion.div {...options} >
            <img src={founder} height={200} width={200} alt="" />
            <h2>Binod Bist</h2>
            <p>Heyy everyone, I am Binod Bist ,the founder of Burger Station <br />
            Our aim is to create most teasty burger on planet Earth
            </p>
        </motion.div>
    </section>
  )
}

export default Founder