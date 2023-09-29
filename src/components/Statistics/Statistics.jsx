import React from 'react'
import { stats } from '../../data'

const Statistics = () => {
  return (
    <section>
        <div className="bg-brandColor flex flex-col justify-between items-center gap-12 px-4 py-20 md:px-8 md:flex-row md:gap-0 md:pt-40 md:pb-20 lg:px-20">
            {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-1 items-center">
                    <h1 className='text-white font-medium text-4xl'>{stat.number}</h1>
                    <span className='w-10 h-[.13rem] bg-violetColor rounded-sm'></span>
                    <p className='text-white text-sm'>{stat.text}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Statistics
