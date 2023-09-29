import React from 'react'
import bg from '../../assets/map.png'
import play from '../../assets/play.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import charityIcon from '../../assets/icon-charity.png'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
        <div className='flex flex-col gap-8 px-4 pb-32 bg-ashColor md:gap-8 md:px-8 lg:gap-14 lg:px-20' 
        style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <Navbar />
            <div className="flex flex-col justify-between items-center gap-16 md:flex-row md:gap-8">
                <div className="flex flex-col gap-6">
                    <p className='text-violetColor text-xs font-medium sx:text-[.5rem]'>TRUSTED CHARITY COMPANY</p>
                    <h1 className='text-blackColor text-4xl font-semibold sx:text-xl'>
                        Let’s Help And Make People Smile By <span className='text-violetColor'>Giving</span> Of Yours
                    </h1>
                    <small className='text-textColor text-sm sx:text-xs'>
                        No matter how small the donation you give will mean a lot to them, let's donate now to help fellow humans in need
                    </small>
                    <div className="flex items-center gap-8">
                        <Button text='Get Started' />
                        <div className="w-14 sx:w-10">
                            <img src={play} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 bg-white p-8 relative sx:px-2">
                    <p className='text-white bg-brandColor rounded px-6 py-3 text-xs w-fit sx:px-4 sx:py-2 sx:text-[.6rem]'>Education</p>
                    <div className="">
                        <h1 className='text-blackColor text-2xl font-semibold sx:text-lg'>
                            Help Children Get out of Poverty & have a Future
                        </h1>
                        <p className='text-textColor text-sm sx:text-xs'>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 bg-[#F5F5F5] px-4 pt-8 pb-3 rounded-md">
                        <div className="">
                            <p className='flex justify-end items-end text-brandColor w-40 sx:w-20'>29%</p>
                            <div className="bg-white h-1 w-full rounded">
                                <div className='bg-brandColor w-40 h-1 rounded-s sx:w-20'></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-blackColor text-sm'>$05,480 <span className='text-textColor text-xs'>Raised</span></p>
                            <p className='text-blackColor text-sm'>$20,000 <span className='text-textColor text-xs'>Goal</span></p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <button type='submit' className='flex items-center gap-2 text-[#213430] bg-transparent border border-[#DDD] rounded px-10 py-3 text-xs font-semibold'>
                            <img src={apple} alt="" />Pay
                        </button>
                        <button type='submit' className='flex items-center gap-2 text-[#213430] bg-transparent border border-[#DDD] rounded px-10 py-3 text-xs font-semibold'>
                            <img src={google} alt="" />Pay
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex absolute right-[4rem] top-[9rem] w-12">
                    <img src={charityIcon} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
