import React from 'react'
import { CiSearch } from "react-icons/ci";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>
    <nav className='container mt-6 mx-auto'>
        <div className="flex justify-between">
            <div className=" w-7/10  flex">
             <a className=' font-inter flex justify-center items-center' href="#">
                <p className=' font-bold text-2xl tracking-wide'>Exclusive</p>
             </a>
             <ul className='flex justify-center gap-12 w-full font-center items-center'>
                <Link to= '/'>Home </Link>
                <Link to='about'>About</Link> 
                <Link to='contact'>Contact</Link>
                <Link to='signup'>Sign Up</Link>
             </ul>
            </div>
            <div className="2 w-1/3 ">
            <div className="w-60 px-2 h-10 rounded center bg-[#F5F5F5]">
        <input
          type="search"
          className="outline-none w-full text-sm bg-transparent"
          placeholder="What are you looking for?"
        />
        <CiSearch className="text-3xl" />
      </div>
            
            </div>
        </div>
        
    </nav>
    </>
  )
}

export default Navbar