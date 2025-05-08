import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

function Header() {
    const cart = useSelector(state => state.cart);
    const headerItems = [
        {
            name : "Home",
            slug : "/",
        },
        {
            name : "Login",
            slug : "/login",
        },
        {
            name : "Register",
            slug : "/register",
        },
    ]
  return (
    <>
        <div className='bg-transparent shadow flex justify-between'>
             <div className='flex'>
                 <Link
                 to={"/"}
                 >
                    <img src="bg.jpg" alt="backimage" className='rounded-full h-10 w-10 p-1' />    
                 </Link>
            </div>
            <ul className='flex ml-auto'>
                {headerItems.map((item) => (
                  <li key={item.name}>
                    <Link
                    to={item.slug}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >
                        {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
            <div className='flex flex-row'>
                <Link
                        to={"/cart"}
                        >
                        <img 
                        className='h-7 w-10 mt-2'
                        src="shopping-cart.png" 
                        alt="Cart" />
                </Link>
                <div className='bg-red-500 h-4 w-4 rounded-full text-center mt-0'>{cart.length}</div>
            </div>
        </div>
    </>
  )
}

export default Header
