import React, { useState } from 'react'
import './Navbar.css'


import {MdOutlineConnectWithoutContact, MdShoppingBasket} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
import {BiDetail} from 'react-icons/bi'
import {IoIosContact} from 'react-icons/io'



import {AiOutlineHome, AiOutlineShop, AiOutlineShoppingCart} from 'react-icons/ai'







const Navbar = () => {
    const [ShowNav,setShowNav] = useState(false)
  return (
    <>
    <div className="n-wrapper">
      
        <div className="logo">
                 <span>AL-</span>
                 <span>Shakir</span>
        </div>

        <div className="services">

            <a href="#">Home</a>
            <a href="#Product">Products</a>
            <a href="#About">About us</a>
            <a href="#Contact">Contact</a>


        </div>

        <div className="account">

            <button className='n-button'>
                Sign in
            </button>
            <div className='cart'>
                <span>
                    <MdShoppingBasket/>
                </span>
            </div>

        </div>

        <div className="hamburger">
            <GiHamburgerMenu onClick={()=>setShowNav(true)} size={30}/>
        </div>
    </div>

    <div style={{right:ShowNav ? '0%' : '-100%'}} className="n-menu">

           <div className="list">

          <div className="m-icon">
            <AiOutlineHome size={25}/>
               <a href="#">Home</a>
          </div>
          <div className="m-icon">
            <AiOutlineShop size={25}/>
            <a href="#Product">Products</a>
          </div>
          <div className="m-icon">
          <BiDetail size={25}/>
            <a href="#About">About us</a>
          </div>
          <div className="m-icon">
            <MdOutlineConnectWithoutContact size={25}/>
            <a href="#Contact">Contact</a>
          </div>
         
          <div className="m-icon">
            <IoIosContact size={25}/>
          <button className='m-button'>Sign In</button>
               
          </div>
               
          <div className="m-icon">
            <AiOutlineShoppingCart size={25}/>
          <button className='m-button'>Cart</button>
          </div>
           
           
            



            
           </div>
           <div className="cancel">
            <RxCross2 onClick={()=>setShowNav(false)} size={30}/>
           </div>


    </div>
   </>
  )
}

export default Navbar