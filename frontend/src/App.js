import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Menu from './components/home/Menu'
import Contact from './components/contact/Contact'
import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'
import PaymentSucess from './components/cart/PaymentSucess'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import MyOrders from './components/my-orders/MyOrders'
import OrderDetails from './components/my-orders/OrderDetails'
import Dashboard from './components/admin/Dashboard'
import Users from './components/admin/Users'
import Orders from './components/admin/Orders'
import About from './components/about/About'
import NotFound from './components/layout/NotFound'
import './styles/app.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/founder.scss'
import './styles/menu.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/cart.scss'
import './styles/shipping.scss'
import './styles/confirmorder.scss'
import './styles/paymentsucess.scss'
import './styles/login.scss'
import './styles/profile.scss'
import './styles/table.scss'
import './styles/orderdetails.scss'
import './styles/dashboard.scss'
import './styles/users.scss'
import './styles/about.scss'



const App = () => {
  return (
    <Router>
      <Header isAuthenticated={true}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
        <Route path='/confirmorder' element={<ConfirmOrder/>}/>
        <Route path='/paymentsucess' element={<PaymentSucess/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/me' element={<Profile/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/order/:id' element={<OrderDetails/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='admin/users' element={<Users/>}/>
        <Route path='admin/orders' element={<Orders/>}/>
        <Route path='about' element={<About/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App