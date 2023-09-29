import React from 'react'
import { services } from '../../data'
import Button from '../Button/Button'

const Services = () => {
  return (
    <section>
        <div className="flex flex-col gap-8 px-4 py-16 my-32 bg-ashColor md:px-8 lg:px-20">
            <div className="flex flex-col gap-1">
                <p className='text-violetColor text-sm font-medium sx:text-xs'>Our Campaign</p>
                <h1 className='text-blackColor text-4xl font-semibold sx:text-lg'>
                    Giving help to those who need it
                </h1>
            </div>
            <div className="flex flex-col gap-8 md:gap-4 md:flex-row lg:gap-8">
                {services.map((service) => (
                    <div key={service.id} className="flex flex-col gap-4 p-4 bg-white shadow rounded-lg md:p-2 lg:p-4">
                        <div className="">
                            <img src={service.image} className='rounded' alt="" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className='text-blackColor text-lg font-medium capitalize sx:text-sm'>{service.text}</p>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <p className='text-blackColor text-sm font-medium sx:text-xs'>{service.current}</p>
                                    <p className='text-[#8A8A8A] text-sm sx:text-xs'>{service.target}</p>
                                </div>
                                <div className="bg-[#E0E0E0] h-1 w-full rounded">
                                    <div className='bg-brandColor w-40 h-1 rounded-s sx:w-20'></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center md:flex-col md:gap-2 lg:flex-row">
                                <Button text='Donate now' />
                                <button type='submit' className='text-brandColor bg-transparent rounded px-6 py-3 text-xs w-fit sx:py-2 sx:px-4'>
                                    See details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services
