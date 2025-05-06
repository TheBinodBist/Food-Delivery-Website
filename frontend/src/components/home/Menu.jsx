import React from 'react'
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger1.png'
import MenuCards from './MenuCards'

const Menu = () => {
    const addToCartHandler =(itemNum)=>{

    }
  return (
    <section id='menu'>
      <h1>Menu</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <MenuCards itemNum={1} burgerSrc={burger1} price={200} title="Cheese Burger" handler={addToCartHandler} />
        <MenuCards itemNum={2} burgerSrc={burger2} price={250} title="Veg Supreme Burger" />
        <MenuCards itemNum={3} burgerSrc={burger3} price={300} title="Spicy Paneer Burger" />
      </div>
    </section>
  )
}

export default Menu
