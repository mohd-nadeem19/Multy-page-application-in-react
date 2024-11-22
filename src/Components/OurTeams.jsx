import React from 'react'
import OurTeam from './OurTeam'

const OurTeams = () => {
    return (
        <div>
            <div className='relative m-6'>
                <svg width="146" height="145" viewBox="0 0 146 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M82.375 8.46875V13.1562C82.375 16.3789 84.4258 19.0156 87.3555 19.8945C110.207 26.3398 126.906 47.1406 126.906 71.75C126.906 101.633 102.59 125.656 73 125.656C43.1172 125.656 19.0938 101.633 19.0938 71.75C19.0938 47.1406 35.5 26.3398 58.3516 19.8945C61.2812 19.0156 63.625 16.3789 63.625 13.1562V8.46875C63.625 3.78125 59.2305 0.265625 54.543 1.4375C23.1953 9.64062 0.0507812 38.3516 0.34375 72.3359C0.34375 112.473 32.8633 144.699 73 144.406C113.137 144.406 145.656 111.887 145.656 71.75C145.656 38.0586 122.219 9.64062 90.8711 1.4375C86.4766 0.265625 82.375 3.78125 82.375 8.46875Z" fill="#F3F3F3" />
                </svg>
                <div className='absolute top-4 left-0'>
                    <span className='font-poppins font-[900] text-[15px] text-[#757575] '>Our Team</span>
                    <h1 className='font-poppins font-[900] text-[30px] text-[#1B1717] w-[400px] mt-4 '>We Work With Team</h1>
                </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-4 m-4'>

                <OurTeam
                    img1="https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_640.jpg"
                    title="FOUNDER"
                    Heading="Mohd Rihan"
                />
                <OurTeam
                    img1="https://cdn.pixabay.com/photo/2016/04/18/08/50/interior-1336161_640.jpg"
                    title="FOUNDER"
                    Heading="Ahmad Shad"
                    className="bg-black text-white"
                />
                <OurTeam
                    img1="https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_640.jpg"
                    title="FOUNDER"
                    Heading="Zaid Malik"
                />
                <OurTeam
                    img1="https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_640.jpg"
                    title="FOUNDER"
                    Heading="Mohd Usman"
                    className="bg-black text-white"
                />
                <OurTeam
                    img1="https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg"
                    title="FOUNDER"
                    Heading="Md Mustakeem"
                />
                <OurTeam
                    img1="https://cdn.pixabay.com/photo/2016/11/29/05/01/lights-1867437_640.jpg"
                    title="FOUNDER"
                    Heading="Mohd Sameer"
                    className="bg-black text-white"

                />
            </div >
        </div>
    )
}

export default OurTeams