import React from 'react'

const PerfectPartner = () => {
    return (
        <div className='flex w-full h-[760px] mt-32 p-6'>

            <div className='w-[650px] h-[471px] mt-20 '>
                <div className='relative'>
                    <svg width="130" height="130" viewBox="0 0 146 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M82.375 8.46875V13.1562C82.375 16.3789 84.4258 19.0156 87.3555 19.8945C110.207 26.3398 126.906 47.1406 126.906 71.75C126.906 101.633 102.59 125.656 73 125.656C43.1172 125.656 19.0938 101.633 19.0938 71.75C19.0938 47.1406 35.5 26.3398 58.3516 19.8945C61.2812 19.0156 63.625 16.3789 63.625 13.1562V8.46875C63.625 3.78125 59.2305 0.265625 54.543 1.4375C23.1953 9.64062 0.0507812 38.3516 0.34375 72.3359C0.34375 112.473 32.8633 144.699 73 144.406C113.137 144.406 145.656 111.887 145.656 71.75C145.656 38.0586 122.219 9.64062 90.8711 1.4375C86.4766 0.265625 82.375 3.78125 82.375 8.46875Z" fill="#F3F3F3" />
                    </svg>
                    <div className='absolute top-6 left-0'>
                        <span className='font-poppins font-bold text-[#757575] text-lg leading-[25px] '>Perfect Partner</span>
                        <h2 className='font-poppins font-bold text-[#1B1717] text-4xl w-[450px] mt-2 '>WE HAVE PRIORITY FOR CAN CREATE DREAM HOME DESIGN</h2>
                    </div>
                </div>
                <p className='font-poppins font-semibold text-sm text-[#6E6E6E] mt-16 w-[500px] '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                <button className='bg-[#757575] mt-12 py-4 px-6 text-white text-sm font-medium '>PORTFOLIO</button>
            </div>

            <div className='w-[650px] h-[760px] '>
                <div className='relative'>
                    <img src="https://images.unsplash.com/photo-1633429083812-2f9c1ef8738d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='w-[400px] h-[275px] ml-44 ' />

                    <img src="https://plus.unsplash.com/premium_photo-1674035036549-67b8ad6d0be3?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[400px] h-[275px] mt-[-70px]' />

                    <img src="https://images.unsplash.com/photo-1605886290933-7ed7b3240d4a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='w-[400px] h-[275px]  mt-[-70px] ml-44' />
                </div>
            </div>

        </div>
    )
}

export default PerfectPartner