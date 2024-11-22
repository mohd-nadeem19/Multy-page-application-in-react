import React from 'react'

const Testimonial = () => {
    return (
        <div className='flex w-full mt-44 pl-6'>
            <div className='w-[650px] '>
                <div className='relative'>
                    <svg width="130" height="130" viewBox="0 0 146 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M82.375 8.46875V13.1562C82.375 16.3789 84.4258 19.0156 87.3555 19.8945C110.207 26.3398 126.906 47.1406 126.906 71.75C126.906 101.633 102.59 125.656 73 125.656C43.1172 125.656 19.0938 101.633 19.0938 71.75C19.0938 47.1406 35.5 26.3398 58.3516 19.8945C61.2812 19.0156 63.625 16.3789 63.625 13.1562V8.46875C63.625 3.78125 59.2305 0.265625 54.543 1.4375C23.1953 9.64062 0.0507812 38.3516 0.34375 72.3359C0.34375 112.473 32.8633 144.699 73 144.406C113.137 144.406 145.656 111.887 145.656 71.75C145.656 38.0586 122.219 9.64062 90.8711 1.4375C86.4766 0.265625 82.375 3.78125 82.375 8.46875Z" fill="#F3F3F3" />
                    </svg>
                    <div className='absolute top-6 left-0'>
                        <span className='font-poppins font-bold text-[#757575] text-lg leading-[25px] '>Clients Feedback</span>
                        <h2 className='font-poppins font-bold text-[#1B1717] text-4xl w-[450px] mt-2 '>OUR TESTIMONIAL FROM BEST CLIENTS</h2>
                    </div>
                </div>
                <p className='font-poppins font-semibold text-sm text-[#6E6E6E] mt-8 w-[500px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div className='w-[650px] border-2 border-[#DADADA] p-8 mr-6 rounded '>
                <svg width="175" height="23" viewBox="0 0 175 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3672 2.20312L7.82812 7.39844L2.08594 8.21875C1.07031 8.375 0.679688 9.625 1.42188 10.3672L5.52344 14.3906L4.54688 20.0547C4.39062 21.0703 5.48438 21.8516 6.38281 21.3828L11.5 18.6875L16.5781 21.3828C17.4766 21.8516 18.5703 21.0703 18.4141 20.0547L17.4375 14.3906L21.5391 10.3672C22.2812 9.625 21.8906 8.375 20.875 8.21875L15.1719 7.39844L12.5938 2.20312C12.1641 1.30469 10.8359 1.26562 10.3672 2.20312Z" fill="#3F3F3F" />
                    <path d="M48.3672 2.20312L45.8281 7.39844L40.0859 8.21875C39.0703 8.375 38.6797 9.625 39.4219 10.3672L43.5234 14.3906L42.5469 20.0547C42.3906 21.0703 43.4844 21.8516 44.3828 21.3828L49.5 18.6875L54.5781 21.3828C55.4766 21.8516 56.5703 21.0703 56.4141 20.0547L55.4375 14.3906L59.5391 10.3672C60.2812 9.625 59.8906 8.375 58.875 8.21875L53.1719 7.39844L50.5938 2.20312C50.1641 1.30469 48.8359 1.26562 48.3672 2.20312Z" fill="#3F3F3F" />
                    <path d="M86.3672 2.20312L83.8281 7.39844L78.0859 8.21875C77.0703 8.375 76.6797 9.625 77.4219 10.3672L81.5234 14.3906L80.5469 20.0547C80.3906 21.0703 81.4844 21.8516 82.3828 21.3828L87.5 18.6875L92.5781 21.3828C93.4766 21.8516 94.5703 21.0703 94.4141 20.0547L93.4375 14.3906L97.5391 10.3672C98.2812 9.625 97.8906 8.375 96.875 8.21875L91.1719 7.39844L88.5938 2.20312C88.1641 1.30469 86.8359 1.26562 86.3672 2.20312Z" fill="#3F3F3F" />
                    <path d="M124.367 2.20312L121.828 7.39844L116.086 8.21875C115.07 8.375 114.68 9.625 115.422 10.3672L119.523 14.3906L118.547 20.0547C118.391 21.0703 119.484 21.8516 120.383 21.3828L125.5 18.6875L130.578 21.3828C131.477 21.8516 132.57 21.0703 132.414 20.0547L131.438 14.3906L135.539 10.3672C136.281 9.625 135.891 8.375 134.875 8.21875L129.172 7.39844L126.594 2.20312C126.164 1.30469 124.836 1.26562 124.367 2.20312Z" fill="#3F3F3F" />
                    <path d="M172.875 8.21875L167.172 7.39844L164.594 2.20312C164.359 1.73438 163.93 1.5 163.461 1.5C163.031 1.5 162.602 1.73438 162.367 2.20312L159.789 7.39844L154.086 8.21875C153.07 8.375 152.641 9.625 153.383 10.3672L157.523 14.3906L156.547 20.0547C156.391 20.875 157.055 21.5 157.797 21.5C157.992 21.5 158.188 21.4609 158.383 21.3828L163.461 18.6875L168.578 21.3828C168.773 21.4609 168.969 21.5 169.164 21.5C169.906 21.5 170.531 20.875 170.414 20.0547L169.438 14.3906L173.578 10.3672C174.32 9.625 173.891 8.375 172.875 8.21875ZM168.109 13.0234L167.406 13.7266L167.562 14.7031L168.344 19.1172L164.359 17.0469L163.461 16.5781L163.5 4.19531L165.492 8.21875L165.922 9.11719L166.898 9.23438L171.352 9.89844L168.109 13.0234Z" fill="#3F3F3F" />
                </svg>

                <p className='font-poppins font-semibold text-sm text-[#6E6E6E] w-[500px] mt-4 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                <div className='flex gap-4 mt-8'>
                    <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="42.5" cy="42.5" r="42.5" fill="#C4C4C4" />
                    </svg>

                    <div className='mt-4'>
                        <h6 className='font-poppins font-bold text-[#1B1717] uppercase'>John De</h6>
                        <p className='font-poppins font-semibold text-[#757575] text-sm'>Art Director</p>
                    </div>
                </div>
            </div>
        </div>)
}

export default Testimonial