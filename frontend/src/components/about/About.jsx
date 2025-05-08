import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from 'react-icons/ri'

const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About us</h1>

            <article>
                <h4>Burger Station</h4>
                <p>Burgre station, the place for most tasty burger on planet earth.</p>
                <p>Explore various type of food and burgers. Click below to see the menu </p>
                <Link to="/menu"><RiFindReplaceLine/></Link>
            </article>
            <div>
               <h2>Founder</h2> 
               <article>
                <div>
                    <img src="/me.jpg" alt="" />
                    <h3>Binod Bist</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quod omnis voluptate doloribus perferendis culpa hic laborum neque.</p>
               </article>
            </div>
        </main>

    </section>
  )
}

export default About