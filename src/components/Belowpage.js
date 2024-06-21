import React, { useState } from 'react'
import Card from './Card';
import { useEffect } from 'react';



export const Belowpage = () => {

  const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"


  const [posts,setPost] = useState([]);

  async function fetchProductData(){
    try {
      const res= await fetch(API_URL);
      const data=await res.json();
       setPost(data.categories);

   } catch (error) {
    console.log("error aagya jii");
    setPost([]);
   }
  }

  useEffect(()=>{
    fetchProductData();
  },[])


  return (
    <div>
       <div className='flex flex-col justify-center items-center leading-8 '>
        <p className='font-bold'>Shop by Category</p>
        <h1 className='font-merinda font-bold'>Top Category Of Organic Food</h1>
        <br></br>
        <div className='flex gap-10 font-play  text-black '>
          <button className='bg-gray-300 py-2 px-6 rounded-full hover:bg-green-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-300'>BAKERY</button>
          <button className='bg-gray-300 py-2 px-6 rounded-full hover:bg-green-800 :outline-none: focus:ring-1 focus:ring-offset-1 focus:ring-gray-300'>BAKERY</button>
          <button className='bg-gray-300 py-2 px-6 rounded-full hover:bg-green-800 :outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-300'>BAKERY</button>
          <button className='bg-gray-300 py-2 px-6 rounded-full hover:bg-green-800 :outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500'>BAKERY</button>
          <button className='bg-gray-300 py-2 px-6 rounded-full hover:bg-green-800 :outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500'>BAKERY</button>
        </div>
       </div>
       <br></br>
       <div>
       { 
<div className="grid  xs:gridcols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-6xl p-4 mx-auto space-y-9 space-x-5 min-h-[80vh]">
 { posts.map((post)=>(
   <Card key={posts.id} post={post}/>
 ) )
}
</div>
        }
       </div>
    </div>
  )
}

export default Belowpage
