import React from 'react'
import heart from '../../assets/white-heart.png'

const Donate = () => {
  return (
    <section>
        <div className="flex justify-center items-center my-0 mx-auto lg:relative">
            <div className="flex flex-col justify-between items-start gap-8 py-10 px-4 bg-white md:px-8 md:gap-0 md:flex-row md:items-center lg:shadow lg:rounded-lg lg:absolute">
                <div className="flex flex-col gap-2 md:w-[70%]">
                    <p className='text-violetColor text-sm font-medium sx:text-xs'>Act Now for a Better World</p>
                    <h1 className='text-blackColor text-3xl font-semibold sx:text-lg'>
                        Solutions to Help People in Need and Save the Planet
                    </h1>
                    <span className='w-12 h-[.13rem] bg-brandColor rounded-sm'></span>
                </div>
                <button type='submit' className='flex items-center gap-2 text-white bg-brandColor rounded px-6 py-3 text-xs w-fit sx:px-4 sx:py-2 hover:opacity-90 duration-500'>
                    Donate Now <img src={heart} className='w-3' alt="" />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Donate
