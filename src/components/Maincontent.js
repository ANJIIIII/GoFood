import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export const Maincontent = () => {
  return (
    <div>
    <div className=' relative'>
      <div><img src='2.png' className='z-10 h-[480px] w-[500px] absolute top-14 right-52 shadow-black'/> <img src='leaf.png' className='absolute h-[30px] w-[40px] top-[216px] rotate-9 left-[418px]'/><img src='leaf.png' className='absolute h-[50px] w-[60px] right-72 shadow-black rotate-45 bottom-16'/></div>
      <div className="flex z-0 "> 
      <div className="w-7/12  bg-[#eff0ec] p-4 h-svh">
        <div className='flex flex-col absolute top-48 left-40 leading-8'>
          <h2 className='font-cinzel font-bold'>DISCOUNT UP TO 20% </h2>
          <div className='flex'>
          <h1 className='font-merinda text-3xl w-7/12'>Buy Fresh  And Organic <div className='flex gap-4'>Grocery Food  <img src='lemon.avif' className='h-9 py-1 w-20 rounded-full'/></div> </h1>
         
          </div>
         
          <br></br>
          <p className='w-6/12 font-sans leading-6 text-gray-400'>I hope this comprehensive response provides you with a clear understanding of alternative </p>
          <br></br>
         <div className='flex gap-8'>
         <button className='bg-blue-500 text-white py-0 px-5 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500'>Shop now </button>
            <div className='flex flex-col'> <h1 className='font-lobster text-xl'>35K +</h1><p className='font-mono text-gray-400'>Users</p></div>
            <h4 className='text-6xl font-sans text-gray-400 font-[10]'>|</h4>
            <div className='flex flex-col'> <h1 className='font-lobster text-xl'>18K +</h1><p className='font-mono text-gray-400'>products</p></div>
         </div>
            
          </div>
        </div>
        <div className="w-5/12 bg-[#2b4912] p-4 h-svh"></div>
      </div>
    
    </div>
    </div>   
  )
}

export default Maincontent
