import React from 'react'

const Error = () => {
    return (
        <div className='bg-[#959595] w-full h-[1100px]'>
            <div className='w-1400 h-123 flex gap-32 border-b-[1px] border-[#FFFFFF]'>
                <img src="https://s3-alpha-sig.figma.com/img/bbd2/1ce0/7f800679f34940a7f25633cb1e0b0edf?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cfuAyScympucht3EKDzjYF575Av8xYtzOmgpw9viBhwr2ZjWveO-5RILmmnrhrfvOKDMQ4aOl3bwIG96l2Km0-7hSzyRM3jNkIfNGbgdRsEPTZRqXsgXIwE7hAX6ellRz6oIWa-NP8D-2TUYhaFzchrOJm6WIVfa9moHLMZ4d4D24dRhWn3vDAvVh3jSiJdmNW0Fa4KeW4aXlIZyOqlKrOXyVHEUphbupxKjFiJkwLOkkc7ZlvIhTGibyMt1zHPUvP7d-Z63wvOC5iu86Pf1NrUL7TfWBybCE0nnvWE9DGvXKdfDnAYWENqS3nJbkEgLtte-UrgPoTS98-a80iLFow__" alt="" className='p-6' />

                <div className='flex place-items-center ml-[80px] gap-4'>


                    <div >
                        <ul className='flex justify-center items-center text-white gap-4 uppercase'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>OUR SERVICES</li>
                            <li>OUR PROJECT</li>
                            <li>PORTFOLIO</li>
                            <li>PAGES</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='flex justify-center items-center text-center mt-40'>
                <div>
                    <h1 className='font-poppins font-bold text-8xl text-white'>ERROR 404</h1>
                    <p className='font-poppins font-bold text-white mt-8'>PAGE NOT FOUND, PLEASE GO BACK</p>
                    <div className='bg-[#757575] w-[190px] h-[73px] text-center pt-[20px] text-lg text-white font-poppins font-[600] ml-40 mt-10 '>ORDER NOW</div>
                </div>
            </div>
        </div>
    )
}

export default Error