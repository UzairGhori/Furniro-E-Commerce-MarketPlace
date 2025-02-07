import React from 'react'
import Image from 'next/image'



const Card = async (props:any) => {
  

  return (
    <div>
        <div className={`gap-4 bg-${props.color}`}>
            <Image src={props.img} alt="pic" width={300} height={300} className="w-[285px] h-[301px]" />
            <div className='w-[284px] h-[145px] mt-[30px] '>
            <h1 className='w-[123px] h-[29px] -[317px] ml-[16px] mb-[10px] text-[24px] font-Poppins font-normal text-[#3A3A3A]'>{props.title}</h1>
            <p className='w-[160px] h-[24px] top-[354px] ml-[16px] mb-[10px] text-[16px] font-Poppins font-medium text-[#898989]'>{props.description}</p>
            <span className='w-[131px] h-[30px] text-[20px] ml-[16px] font-Poppins font-semibold'>{props.price}</span>
            &nbsp;&nbsp;
            <span className='w-[102px] h-[24px] text-[16px] font-Poppins font-normal text-[#B0B0B0] line-through'>{props.oldprice}</span>
            </div>


        </div>
        {/* {data.map(({ id, name, price, description, image }) => (
              <div key={id}>
                <h2>{name}</h2>
                <p>{price}</p>
                <p>{description}</p>
                <Image src={image} alt={name} width={200} height={200} />
           </div>
            ))}; */}
    </div>
  )
}

export default Card