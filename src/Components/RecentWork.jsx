import React from 'react'

const RecentWork = () => {
    return (
        <div className='w-full mt-32'>
            <div className='w-[650px] h-[170px] pl-6'>
                <div className='relative'>
                    <svg width="146" height="145" viewBox="0 0 146 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M82.375 8.46875V13.1562C82.375 16.3789 84.4258 19.0156 87.3555 19.8945C110.207 26.3398 126.906 47.1406 126.906 71.75C126.906 101.633 102.59 125.656 73 125.656C43.1172 125.656 19.0938 101.633 19.0938 71.75C19.0938 47.1406 35.5 26.3398 58.3516 19.8945C61.2812 19.0156 63.625 16.3789 63.625 13.1562V8.46875C63.625 3.78125 59.2305 0.265625 54.543 1.4375C23.1953 9.64062 0.0507812 38.3516 0.34375 72.3359C0.34375 112.473 32.8633 144.699 73 144.406C113.137 144.406 145.656 111.887 145.656 71.75C145.656 38.0586 122.219 9.64062 90.8711 1.4375C86.4766 0.265625 82.375 3.78125 82.375 8.46875Z" fill="#F3F3F3" />
                    </svg>
                    <div className='absolute top-10 left-0 space-y-4 '>
                        <span className='font-poppins font-bold text-lg text-[#757575]'>Portfolio</span>
                        <h1 className='font-poppins font-bold text-4xl w-[400px] text-[#1B1717]'>OUR RECENT WORK</h1>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center w-full h-full mt-6'>
                <div className='flex  gap-2'>
                    <div className='w-[500px] h-[350px]'>
                        <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2023/11/19/01/49/team-work-8397563_640.jpg" alt="" />
                    </div>

                    <div className='w-[700px] h-[350px]'>
                        <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2018/02/23/08/03/expression-3174967_640.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center gap-4 w-full h-full mt-10'>
                <div className="w-[390px] h-[350px]">
                    <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_640.jpg" alt="" />
                </div>
                <div className="w-[390px] h-[350px]">
                    <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_640.jpg" alt="" />
                </div>
                <div className="w-[390px] h-[350px]">
                    <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2023/11/20/12/05/crane-8400990_640.jpg" alt="" />
                </div>
            </div>

            <div className='flex justify-center items-center gap-4 w-full h-full mt-10'>
                <div className='w-[390px] h-[350px]'>
                    <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2024/05/26/03/53/glass-cleaner-8788036_640.jpg" alt="" />
                </div>
                <div className='w-[390px] h-[350px]'>
                    <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_640.jpg" alt="" />
                </div>
                <div className='w-[390px] h-[350px]'>
                    <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2023/12/22/09/26/worker-8463424_640.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default RecentWork