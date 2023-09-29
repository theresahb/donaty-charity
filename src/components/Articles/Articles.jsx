import React from 'react'
import { articles } from '../../data'

const Articles = () => {
  return (
    <section>
        <div className="flex flex-col gap-8 px-4 py-16 my-32 md:px-8 lg:px-20">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <p className='text-violetColor text-sm font-medium sx:text-xs'>Latest News</p>
                    <h1 className='text-blackColor text-4xl font-semibold sx:text-lg'>
                        Latest Articles
                    </h1>
                </div>
                <button type='submit' className='text-[#7E8AB8] bg-transparent border border-[#7E8AB8] rounded-full px-6 py-2 text-[.5rem] w-fit sx:py-1 sx:px-4 lg:text-xs lg:px-8 lg:py-3'>
                    ALL NEWS
                </button>
            </div>
            <div className=" flex flex-col gap-8">
                <div className="flex flex-col justify-center items-center gap-8 md:gap-4 md:flex-row lg:gap-8">
                    {articles.map((article) => (
                        <div key={article.id} className="flex flex-col justify-between bg-ashColor shadow rounded-lg w-fit relative">
                            <div className="h-fit">
                                <img src={article.image} className='w-[40rem] h-fit' alt="" />
                            </div>
                            <p className='text-white bg-brandColor rounded px-4 py-1 text-sm w-fit absolute top-4 left-4 sx:text-xs'>WATER</p>
                            <div className="flex flex-col gap-4 p-4">
                                <p className='text-blackColor text-lg font-medium sx:text-sm'>{article.text}</p>
                                <div className="bg-[#DEDDCD] h-[.18rem] w-full rounded">
                                    <div className='bg-[#333333] w-20 h-[.18rem] rounded-s sx:w-16'></div>
                                </div>
                                <p className='text-blackColor text-sm font-medium sx:text-xs'>{article.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-between items-end gap-8 py-10 px-8 bg-ashColor shadow rounded-lg sx:px-0 sx:items-center md:flex-row md:items-center md:gap-0">
                    <div className="flex flex-col gap-1 items-end md:items-start md:gap-2">
                        <h1 className='text-blackColor text-4xl font-semibold sx:text-lg'>
                            Newsletter
                        </h1>
                        <small className='text-textColor text-sm sx:text-xs'>
                            Bring together people who care about a cause
                        </small>
                    </div>
                    <form action="#" className='flex gap-2 sx:flex-col sx:items-center sx:justify-center'>
                        <input type="email" name="" id="" placeholder='Your email' 
                        className='px-6 py-2 bg-white border border-[#DADADA] placeholder:text-[#DADADA] rounded' />
                        <button type="submit" className='text-white bg-brandColor rounded px-5 py-2 text-sm w-fit hover:opacity-90 duration-500'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Articles
