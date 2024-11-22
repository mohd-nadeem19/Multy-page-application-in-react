import React from 'react'

const HomeInterior = () => {
    return (
        <div className='w-[1200px] h-[725px] flex gap-12 mt-32'>
            <div className='w-[400px] ml-6 h-[300px] bg-[#C4C4C4]'>
                <img src="https://cdn.pixabay.com/photo/2016/11/22/19/11/brick-wall-1850095_640.jpg" alt="" />
            </div>

            <div className='w-[500px] h-[500px]'>
                <div className='relative'>
                    <svg width="146" height="145" viewBox="0 0 146 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M82.375 8.46875V13.1562C82.375 16.3789 84.4258 19.0156 87.3555 19.8945C110.207 26.3398 126.906 47.1406 126.906 71.75C126.906 101.633 102.59 125.656 73 125.656C43.1172 125.656 19.0938 101.633 19.0938 71.75C19.0938 47.1406 35.5 26.3398 58.3516 19.8945C61.2812 19.0156 63.625 16.3789 63.625 13.1562V8.46875C63.625 3.78125 59.2305 0.265625 54.543 1.4375C23.1953 9.64062 0.0507812 38.3516 0.34375 72.3359C0.34375 112.473 32.8633 144.699 73 144.406C113.137 144.406 145.656 111.887 145.656 71.75C145.656 38.0586 122.219 9.64062 90.8711 1.4375C86.4766 0.265625 82.375 3.78125 82.375 8.46875Z" fill="#F3F3F3" />
                    </svg>
                    <div className='absolute top-4 left-0'>
                        <span className='font-poppins font-[900] text-[15px] text-[#757575] '>WHO WE ARE</span>
                        <h1 className='font-poppins font-[900] text-[30px] text-[#1B1717] w-[400px] mt-4 '>WE ARE PERFECT TEAM FOR HOME INTERIOR DECORATION</h1>

                    </div>

                </div>

                <p className='font-poppins font-[400]  text-[12px] text-[#6E6E6E] mt-16 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                <div className='flex gap-6 w-[650px] h-[108px] mt-12'>
                    <div className='w-[313px] h-[108px]'>
                        <div className='flex gap-1 place-items-center'><svg className='w-[15px] h-[15px]' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575" />
                        </svg>
                            <span className='font-poppins font-[400] text-sm text-[#6E6E6E]'>Flexible Time</span>
                        </div>

                        <div className='flex gap-1 place-items-center mt-2'><svg className='w-[15px] h-[15px]' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575" />
                        </svg>
                            <span className='font-poppins font-[400] text-sm text-[#6E6E6E]'>Perfect Work</span>
                        </div>

                        <div className='flex gap-1 place-items-center mt-2'><svg className='w-[15px] h-[15px]' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575" />
                        </svg>
                            <span className='font-poppins font-[400] text-sm text-[#6E6E6E]'>Client Priority</span>
                        </div>
                    </div>

                    <div className='w-[313px] h-[108px]'>
                        <div className='flex gap-1 place-items-center'><svg className='w-[15px] h-[15px]' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575" />
                        </svg>
                            <span className='font-poppins font-[400] text-sm text-[#6E6E6E]'>Flexible Time</span>
                        </div>

                        <div className='flex gap-1 place-items-center mt-2'><svg className='w-[15px] h-[15px]' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575" />
                        </svg>
                            <span className='font-poppins font-[400] text-sm text-[#6E6E6E]'>Perfect Work</span>
                        </div>

                        <div className='flex gap-1 place-items-center mt-2'><svg className='w-[15px] h-[15px]' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575" />
                        </svg>
                            <span className='font-poppins font-[400] text-sm text-[#6E6E6E]'>Client Priority</span>
                        </div>
                    </div>
                </div>

                <div className='w-[650px] h-[92px] flex'>
                    <div className='w-[198px] h-[96px]'>
                        <h2 className='font-poppins font-bold text-[#757575] text-4xl'>15Y</h2>
                        <p className='font-poppins text-xs m-2 text-[#1B1717]'>Experience</p>
                    </div>

                    <div className='w-[198px] h-[96px]'>
                        <h2 className='font-poppins font-bold text-[#757575] text-4xl'>25+</h2>
                        <p className='font-poppins text-xs m-2 text-[#1B1717]'>Experience</p>
                    </div>

                    <div className='w-[198px] h-[96px]'>
                        <h2 className='font-poppins font-bold text-[#757575] text-4xl'>500+</h2>
                        <p className='font-poppins text-xs m-2 text-[#1B1717]'>Experience</p>
                    </div>
                </div>
            </div>
        </div>)
}

export default HomeInterior