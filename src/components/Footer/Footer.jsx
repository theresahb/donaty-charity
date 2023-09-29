import React from 'react'
import { aboutLinks, contacts, menuLinks, social_icons } from '../../data'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col bg-ashColor">
            <div className="flex flex-col justify-center items-center gap-8 px-4 py-20 md:px-8 md:items-start md:flex-row md:justify-between lg:px-20">
                <div className="flex flex-col justify-between gap-14 md:w-[40%]">
                    <div className="flex flex-col justify-center items-center text-center gap-2 md:text-start md:items-start md:justify-start">
                        <div className="flex items-center gap-2">
                            <div className="w-6">
                                <img src={logo} alt="" />
                            </div>
                            <p className='text-blackColor'>Donaty</p>
                        </div>
                        <p className='text-textColor text-base sx:text-xs'>
                            Whatever it is that you care about, there will be a charity working on it. Charities help in lots of different ways
                        </p>
                    </div>
                    <ul className="flex justify-center items-center gap-4 md:justify-start">
                        {social_icons.map((icons) => (
                            <li key={icons.id} className='sx:text-xs'>
                                <a href={icons.link}><img src={icons.image} alt="" className='icon' /></a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-3 md:items-start">
                    <p className='text-blackColor sx:text-sm'>Menu</p>
                    <ul className='flex flex-col items-center gap-1 md:items-start'>
                        {menuLinks.map((menu) => (
                            <li key={menu.id}><a href="/" className='text-textColor font-base text-sm sx:text-xs'>{menu.text}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-3 md:items-start">
                    <p className='text-blackColor sx:text-sm'>About Us</p>
                    <ul className='flex flex-col items-center gap-1 md:items-start'>
                        {aboutLinks.map((about) => (
                            <li key={about.id}><a href="/" className='text-textColor font-base text- sx:text-xs'>{about.text}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-3 md:items-start">
                    <p className='text-blackColor sx:text-sm'>Contacts Info</p>
                    <ul className='flex flex-col items-center gap-3 md:items-start md:text-start'>
                        {contacts.map((contact) => (
                            <li key={contact.id}>
                                <div className='flex items-center gap-2'>
                                    <div className="hidden justify-center items-center w-6 bg-brandColor p-2 rounded-[50%] md:flex">
                                        <img src={contact.image} alt="" />
                                    </div>
                                    <div className="flex flex-col text-center gap-[.1rem] md:text-start">
                                        <p className='text-blackColor text-xs font-medium'>{contact.text}</p>
                                        <small className='text-textColor text-xs'>{contact.sub}</small>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center bg-violetColor py-3">
                <small className='text-white text-center text-sm sx:text-xs'>Donaty © 2023 Ideapeel Inc. All Rights Reserved.</small>
            </div>
        </div>
    </footer>
  )
}

export default Footer
