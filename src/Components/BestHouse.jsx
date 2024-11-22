import React from 'react'

const BestHouse = (props) => {
    return (
        <div>
            <img className='w-[400px] h-[300px]' src={props.img} alt="" />
            <h1 className='font-poppins font-bold text-[25px] leadings-[37px] text-[#1B1717] w-[400px] mt-4 uppercase'>{props.heading}</h1>
            <p className='font-poppins font-[400] text-[15px] leadings-[25px] text-[#6E6E6E] w-[400px] mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    )
}

export default BestHouse