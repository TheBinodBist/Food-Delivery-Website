import React from 'react'
import { motion } from 'framer-motion'

const MenuCards = ({ itemNum, burgerSrc, price, title,handler }) => {
  return (
    <motion.div
      className='menuCard'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: itemNum * 0.1 }}
      
    >
      <div>Item {itemNum}</div>
      <main>
        <img src={burgerSrc} alt={`Burger ${itemNum}`} />
        <h5>Rs. {price}</h5>
        <p>{title}</p>
        <button onClick={()=>handler(itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  )
}

export default MenuCards
