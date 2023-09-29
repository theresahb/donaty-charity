import React from 'react'
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'
import { social_icons } from '../../data'

const Heading = () => {
  return (
    <section className='bg-violetColor sx:hidden'>
        <div className="flex justify-between items-center px-4 py-2 text-white md:px-8 lg:px-20">
            <div className="flex flex-col gap-2 items-center sm:gap-6 sm:flex-row">
                <div className="flex items-center gap-2">
                    <div className="">
                        <img src={phone} alt="" className="w-3 md:w-4" />
                    </div>
                    <p className='text-xs md:text-sm'>+1-206-156-2849</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="">
                        <img src={mail} alt="" className="w-3 md:w-4" />
                    </div>
                    <p className='text-xs md:text-sm'>info@donaty.com</p>
                </div>
            </div>
            <ul className="flex items-center gap-4">
                {social_icons.map((icons) => (
                    <li key={icons.id}>
                        <a href={icons.link}><img src={icons.image} alt="" /></a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Heading
