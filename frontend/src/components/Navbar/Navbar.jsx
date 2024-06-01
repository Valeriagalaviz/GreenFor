import React, { useState } from 'react'
import './Navbar.css'
import { assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState("products");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt=""/>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-product' onClick={()=>setMenu("products")} className={menu==="products"?"active":""}>Products</a>
            <a href='#review-display' onClick={()=>setMenu("reviews")} className={menu==="reviews"?"active":""}>Reviews</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.buscar} alt=""/>
            <div className='navbar-buscar'>
                <img src={assets.carrito} alt=""/>
                <div className='dot'></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar