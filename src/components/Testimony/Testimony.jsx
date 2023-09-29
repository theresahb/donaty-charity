import React from 'react'
import image from '../../assets/image9.png'

const Testimony = () => {
  return (
    <section>
        <div className="flex flex-col justify-between items-center gap-16 w-full px-4 pt-20 pb-40 bg-ashColor sm:pb-48 md:px-8 md:flex-row md:gap- lg:px-20">
            <div className="flex justify-center items-center item-center w-full">
                <img src={image} alt="" />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <p className='text-violetColor text-base font-medium sx:text-sm md:text-sm lg:text-base'>Testimonials</p>
                <h1 className='text-blackColor text-4xl font-semibold md:text-3xl lg:text-4xl sx:text-lg'>
                    What People Say about <span className='text-violetColor'>Our Organization</span>
                </h1>
                <small className='text-textColor text-base sx:text-xs'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque cras interdum ornare feugiat eget feugiat. 
                    Nunc, urna vitae pellentesque risus, ut volutpat eget libero vel. Vitae urna pharetra sem consectetur sed mi, nisi id 
                    feugiat. At egestas praesent mauris metus risus accumsan. Cras gravida natoque maecenas risus ultricies. Sed tincidunt 
                    porttitor viverra nunc neque, enim. Tristique molestie turpis turpis diam\
                </small>
                <div className="flex flex-col gap-1 mt-4">
                    <p className='text-[#232323] font-medium sx:text-sm'>Kay Henderson</p>
                    <small className='text-[#696969] sx:text-xs'>Businessman - Entrepreneur</small>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimony
