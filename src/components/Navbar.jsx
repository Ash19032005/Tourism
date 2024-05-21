import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <section className='flex justify-between shadow-xl fixed top-0 w-full bg-white z-10 '>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@500&display=swap');
</style>
        <div className='ml-[20px]'>
            <h1 className='text-[3rem] ml-[25px] font-[Agbalumo]'>Bharat <span id='samarkand'>Yatra</span></h1>
        </div>
        <div className='flex mt-5 mr-5 gap-5'>
           <Link><li className='list-none text-xl text-black-400 transition ease-in-out delay-50 bg-white  hover:scale-110 hover:bg-gray-400  duration-200   p-2 rounded-xl'><a href="">Home</a></li></Link>
           <Link><li className='list-none text-xl hover:bg-gray-400  transition ease-in-out delay-50 bg-white  hover:scale-110 hover:bg-gray-400  duration-200  p-2 rounded-xl'><a href="">Places</a></li></Link>
            <Link><li className='list-none text-xl hover:bg-gray-400  transition ease-in-out delay-50 bg-white  hover:scale-110 hover:bg-gray-400  duration-200  p-2 rounded-xl'><a href="">About Us</a></li></Link>
        </div>
    </section>
  )
}

export default Navbar