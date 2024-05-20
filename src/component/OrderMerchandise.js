import React from 'react'
import { IoFilterSharp } from 'react-icons/io5';
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
// import { IoFilterSharp } from 'react-icons/io5';
import { Merchandise } from '../database/Merchandise';

const OrderMerchandise = () => {
  return (
    <div className='py-3'>
      <div className='flex items-center whitespace-nowrap overflow-scroll scrollbar-none'>
        <button className='text-sm drop-shadow-md p-2 hidden md:block bg-white rounded-full w-7 h-7'><TfiAngleLeft /></button>
        <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Mugs</p>
        <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Cups</p>
        <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Tumblers</p>
        <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Water Bottles</p>
        <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Stationary</p>
        <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Accessories</p>
      
        <button className='text-sm drop-shadow-md p-2 hidden md:block bg-white rounded-full w-7 h-7 ml-auto'><TfiAngleRight/></button>
      </div>
      <div className='flex items-center py-2 border-y-2 border-gray-300 border-solid  '>
      <IoFilterSharp className='text-lg'/>
      <div className='flex whitespace-nowrap overflow-scroll scrollbar-none px-2 '>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Bags</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Been There Series</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Ceramic</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Coasters</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Coffee House Collection</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Cup Clips</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Key Chains</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Note Books</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Pens</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Seasonal Collection</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Stainless Steel</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Core Essential</p>
        <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Reusable Cups</p>
      </div>
      </div>

      <div className='py-4'>
        <h2 className=' text-base front-semibold'>Mugs</h2>
        <p className = 'text-sm text-gray-700'>Artistic collection of cermaic mugs with acacia wood lids.</p>

        <div className='flex flex-wrap gap-3'>
          {
            Merchandise.map(el =>{
              return (
                <div className='flex p-3 shadow max-w-[350px] gap-3 my-4' key={el.id}>
                <img src={el.image} className='w-24 min-w-[96px] h-24 items-start justify-start rounded-full'/>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'>{el.title}</h2>
                  <p className='text-xs'>{el.desc}</p>
                  <div className='flex mt-9 justify-between'>
                  <p className='font-semibold text-lg'>₹ <span>{el.price}</span></p>
                  <button className='text-gray-400 bg-gray-500 hover:bg-[#1e3932] py-1 px-5 rounded-full '>Add Item</button>
                  </div>
                </div>
              </div>
                
              )
            })
          }
        </div>

      
      </div>
    </div>
  )
}

export default OrderMerchandise
