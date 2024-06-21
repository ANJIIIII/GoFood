import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import {add,remove} from "../redux/slices/MyappSlice";

export const Card = ({post}) => {

  const {cart} = useSelector((state)=>state)
  const dispatch = useDispatch();

  return (
    <div>
      <div className='flex items-center justify-between w-full rounded-lg shadow-md bg-white overflow-hidden p-4 gap-2 h-full '>
      
      
      <div className="flex items-center justify-center">
      <div className="rounded-full overflow-hidden w-30 h-30">
      <img src={post.strCategoryThumb} className="w-full h-full object-cover rounded-full "/>
      </div>
    </div>

        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <h1 className='font-merinda font-bold'>{post.strCategory}</h1>
            <p className='font-lobster text-lg'>$ 8.5</p>
          </div>
          <div className='flex justify-between'>
            <p className='w-8/12 font-thin text-sm'>{post.strCategoryDescription.slice(0, 80)}</p>
            <button className='text-green-800 font-bold mt-14 size-18 text-[10px]'>SHOP NOW -{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
