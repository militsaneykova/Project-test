import { useState } from 'react'
import React from 'react'
import '../index.css'

//Setting Nav bar  
const NavBar = () => {
    // Setting menu state, menu =  current state, setMenu = function that helps you update the state, useState= starting point 
    const[menu, setMenu] = useState('selectTrip')

    return (
        <div className='navbar'>
            <div className='nycLogo'>
                <img className = 'logo-pic' src='https://th.bing.com/th/id/R.73b0d5950705dc343a8552079d256e50?rik=PnUlTMbKS2awvA&pid=ImgRaw&r=0' />
                <p>Traveler</p>
            </div>
            <ul className='navMenu'>
                {/* On every click on menu item, a line will uppear under it */}
                <li onClick={()=>{setMenu('home')}}>Home{menu==='home'?<hr/>:<></>}</li>
                <li >About</li>
                <li onClick={()=>{setMenu('tours')}}>Additional Tours{menu==='tours'?<h/>:<></>}</li>
            </ul>
            <div className='login'>
                <img className = 'shopping-cart' src='https://static.vecteezy.com/system/resources/previews/000/356/583/original/vector-shopping-cart-icon.jpg'></img>
                <button>Log in</button>
            </div>
        </div>
    )
}

export default NavBar