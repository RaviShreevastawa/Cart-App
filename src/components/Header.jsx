import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
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
        {
            name : "Cart",
            slug : "/cart",
        },
    ]
  return (
    <>
        <div className='bg-amber-600 flex justify-between'>
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
        </div>
    </>
  )
}

export default Header
