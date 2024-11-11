import React from 'react'
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <>
    <nav className='container border border-emerald-400 mx-auto'>
        <div className="flex justify-between">
            <div className=" w-7/10 border border-red-500 flex">
             <a className=' font-inter flex justify-center items-center' href="#">
                <p className=' font-bold text-2xl tracking-wide'>Exclusive</p>
             </a>
             <ul className='flex justify-center gap-12 w-full font-center items-center'>
                <li>Home </li>
                <li>Contact</li>
                <li>About</li> 
                <li>Sign Up</li>
             </ul>
            </div>
            <div className="2 w-1/3 border border-blue-600">
            <div className="flex bg-emerald-400">
                <input className='bg-transparent font-poppins text-sm pt-2 pr-3 pb-2 pl-5' type="search" placeholder='what are you looking for? ' />
                <CiSearch  className='color font-bold'/>
            </div>
            <div className="2">
                hello
            </div>
            </div>
        </div>
        
    </nav>
    </>
  )
}

export default Navbar