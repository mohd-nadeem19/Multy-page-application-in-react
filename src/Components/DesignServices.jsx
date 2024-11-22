import React from 'react'

const DesignServices = () => {
    return (
        <div className='flex gap-8 w-full'>
            <div className='w-[700px] h-[550px] flex justify-end items-center'>
                <img
                    className='w-full h-full object-cover'
                    src="https://cdn.pixabay.com/photo/2022/07/04/05/06/thailand-7300384_640.jpg"
                    alt="Home Design"
                />
            </div>

            <div className='w-[650px] h-[500px] mt-10 '>
                <div className='relative'>
                    <svg width="146" height="145" viewBox="0 0 146 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M82.375 8.46875V13.1562C82.375 16.3789 84.4258 19.0156 87.3555 19.8945C110.207 26.3398 126.906 47.1406 126.906 71.75C126.906 101.633 102.59 125.656 73 125.656C43.1172 125.656 19.0938 101.633 19.0938 71.75C19.0938 47.1406 35.5 26.3398 58.3516 19.8945C61.2812 19.0156 63.625 16.3789 63.625 13.1562V8.46875C63.625 3.78125 59.2305 0.265625 54.543 1.4375C23.1953 9.64062 0.0507812 38.3516 0.34375 72.3359C0.34375 112.473 32.8633 144.699 73 144.406C113.137 144.406 145.656 111.887 145.656 71.75C145.656 38.0586 122.219 9.64062 90.8711 1.4375C86.4766 0.265625 82.375 3.78125 82.375 8.46875Z" fill="#F3F3F3" />
                    </svg>
                    <div className='absolute top-10 left-0 space-y-4 '>
                        <span className='font-poppins font-bold text-lg text-[#757575]'>Design Consultation</span>
                        <h1 className='font-poppins font-bold text-4xl w-[500px] text-[#1B1717]'>HOME DESIGN CONSULTATION SERVICES</h1>
                    </div>
                    <p className='font-poppins font-[400] text-[#6E6E6E] text-sm w-[400px] mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className='flex mt-10 gap-2'>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575" />
                    </svg>
                    <p className='font-poppins font-[400] text-sm text-[#6E6E6E]'>Prebuild Home</p>
                </div>
                <div className='flex mt-6 gap-2'>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575" />
                    </svg>
                    <p className='font-poppins font-[400] text-sm text-[#6E6E6E]'>Home Design Planning</p>
                </div>
                <div className='flex mt-6 gap-2'>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575" />
                    </svg>
                    <p className='font-poppins font-[400] text-sm text-[#6E6E6E]'>Trend Home Design</p>
                </div>

                <div className='flex justify-center items-center bg-[#757575] w-[160px] h-[60px] mt-10'>
                    <span className='font-poppins font-[400] text-xs text-white uppercase'>Contact Us</span>
                </div>
            </div>
        </div>
    )
}

export default DesignServices