import React from 'react'

const CallUs = () => {
    return (
        <div className='relative bottom-44'>
            <div className='w-[650px] h-[420px] ml-6 relative top-[350px] '>
                <div className='w-[430px] h-[300px]'>
                    <img src="https://cdn.pixabay.com/photo/2017/09/11/19/20/blacksmith-2740128_960_720.jpg" alt="" />
                </div>
                <div className='w-[430px] h-[220px] bg-white relative top-[-60px] left-40 p-16 space-y-2 '>
                    <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43.6816 32.4414L33.8379 28.2227C33.5742 28.1348 33.3105 28.0469 32.959 28.0469C32.3438 28.0469 31.7285 28.3984 31.377 28.8379L26.9824 34.1992C20.127 30.9473 14.6777 25.498 11.4258 18.6426L16.7871 14.248C17.2266 13.8965 17.5781 13.2812 17.5781 12.5781C17.5781 12.3145 17.4902 12.0508 17.4023 11.7871L13.1836 1.94336C12.832 1.15234 12.041 0.625 11.1621 0.625C11.0742 0.625 10.8984 0.712891 10.7227 0.712891L1.58203 2.82227C0.615234 3.08594 0 3.87695 0 4.84375C0 27.4316 18.1934 45.625 40.7812 45.625C41.748 45.625 42.5391 45.0098 42.8027 44.043L44.9121 34.9023C44.9121 34.7266 44.9121 34.5508 44.9121 34.4629C44.9121 33.584 44.3848 32.793 43.6816 32.4414Z" fill="#757575" />
                    </svg>
                    <h4 className='font-poppins font-bold text-[25px] text-[#1B1717]'>Call Us Now</h4>
                    <p className='font-poppins font-[400] text-[#6E6E6E] text-[#15px] '>( +62 ) 123 456 789</p>
                </div>
            </div>

            <div className=' w-full h-[700px] mt-16 bg-[#757575]'>

                {/* <div className='w-[1250px]'>
                <img src="https://cdn.pixabay.com/photo/2010/11/29/india-293_1280.jpg" alt="" />
            </div> */}
                <h1 className='absolute left-[700px] mt-28 text-6xl text-white leading-[80px] w-[500px] font-poppins font-bold'>"WORK HARD & GREAT QUALITY IS MY PRIORITY"</h1>
            </div>
        </div>
    )
}

export default CallUs