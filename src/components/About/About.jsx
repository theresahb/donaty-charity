import React from 'react'
import { about } from '../../data'
import check from '../../assets/check.png'
import Button from '../Button/Button'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import solidarityIcon from '../../assets/icon-solidarity.png'

const About = () => {
  return (
    <section>
        <div className="flex flex-col justify-between items-center gap-20 w-full px-4 my-32 relative md:gap-8 md:px-8 md:flex-row lg:px-20">
            <div className="relative w-full">
                <div className="flex justify-center items-center my-0 mx-auto w-[25rem] sx:w-56 relative">
                    <img src={image1} alt="" />
                </div>
                <div className="hidden absolute -bottom-14 right-12 w-52 md:flex">
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full relative">
                <div className="flex flex-col gap-2">
                    <p className='text-violetColor text-sm font-medium'>Who we are</p>
                    <h1 className='text-blackColor text-3xl font-semibold sx:text-lg'>
                        We’re Non-Profit Charity & NGO Organization
                    </h1>
                    <span className='w-12 h-[.13rem] bg-brandColor rounded-sm'></span>
                    <small className='text-textColor text-sm sx:text-xs'>
                        Join us and make your life more valuable and useful, be a part of us and contribute to the nation and state 
                        and the simplest for the environment and yourself
                    </small>
                </div>
                <ul className="flex flex-col gap-2">
                    {about.map((list) => (
                        <li key={list.id} className='flex items-center gap-2 text-blackColor text-sm font-medium sx:text-xs'>
                            <div className="">
                                <img src={check} alt="" />
                            </div>
                            {list.text}
                        </li>
                    ))}
                </ul>
                <Button text='About Us' />
            </div>
            <div className="hidden md:flex absolute -top-5 left-36 w-12">
                <img src={solidarityIcon} alt="" />
            </div>
        </div>
    </section>
  )
}

export default About
