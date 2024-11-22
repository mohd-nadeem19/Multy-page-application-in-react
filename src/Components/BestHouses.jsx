import React from 'react'
import BestHouse from './BestHouse'

const BestHouses = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 w-full gap-4 place-items-center mt-32'>
        <BestHouse
        img = "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg"
        heading = "10 TRENDS HOME DECORATION For Best House"
         />
         <BestHouse
        img = "https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_640.jpg"
        heading = "HOW TO CLEANING OWN HOME For Best Cleaning"
         />
         <BestHouse
        img = "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg"
        heading = "TIPS CHOICE BEST AGENCY For House Decoration"
         />
         <BestHouse
        img = "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_640.jpg"
        heading = "HOW TO DRAW HOME DESIGN For Consystency"
         />
         <BestHouse
        img = "https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_640.jpg"
        heading = "TIPS MODELING DECORATION HOME modern"
         />
          <BestHouse
        img = "https://cdn.pixabay.com/photo/2017/11/16/19/29/cottage-2955582_640.jpg"
        heading = "HOW TO IMPROVE HOME DESIGN For Future"
         />
    </div>
  )
}

export default BestHouses