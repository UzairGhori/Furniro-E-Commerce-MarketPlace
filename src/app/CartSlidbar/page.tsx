import React from 'react'
import Image from 'next/image'

const CartSlidbar = () => {
  return (
    <div>
        <div className='bg-white'>
        <div className='w-[350px] h-[334px] mt-[28px] ml-[1050px] bporder-[1px] border-[#D9D9D9] justify-between '>
          <div className='border-b-[1px] border-b-[#D9D9D9] align-baseline'>
          <h1 className='w-[177px] h-[36px] mt-[28px] -ml-[950px] text-[24px] text-[#000000] font-Poppins font-semibold'>Shopping Cart </h1>
          <Image src='/vecter(2).png' alt='close' width={20} height={20} className='w-[16.63px] h-[19px] ml-[138px] -mt-[35px]' />
          
          </div>
        </div>
        </div>
    </div>
  )
}

export default CartSlidbar