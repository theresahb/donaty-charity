import React, { useState } from 'react';
import { answers } from '../../data';
import plus from '../../assets/plus.png';
import minus from '../../assets/minus.png';

const Answers = () => {
  const [showAnswers, setShowAnswers] = useState(Array(answers.length).fill(false));

  const handleToggle = (index) => {
    const updatedShowAnswers = [...showAnswers];
    updatedShowAnswers[index] = !updatedShowAnswers[index];
    setShowAnswers(updatedShowAnswers);
  };

  return (
    <section>
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-16 py-20 px-4 w-full bg-white md:px-8">
                <div className="flex flex-col items-center gap-2 text-center">
                    <p className='text-violetColor text-sm font-medium sx:text-xs'>Need Help?</p>
                    <h1 className='text-blackColor text-2xl font-semibold sx:text-lg'>
                        The Answers to All Your Questions
                    </h1>
                    <span className='w-12 h-[.13rem] bg-violetColor rounded-sm'></span>
                    <small className='text-textColor text-sm sx:text-xs'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
                    </small>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center ">
                    {answers.map((answer, index) => (
                        <div key={answer.id} className="flex flex-col items-center justify-center gap-2 cursor-pointer">
                            <div className={`${showAnswers[index] ? 'bg-brandColor' : 'bg-[#F5F5F5]'} w-[23rem] sx:w-[18rem] flex justify-between items-center p-3 rounded sm:w-[27rem] md:w-[40rem]`} onClick={() => handleToggle(index)}>
                                <h1 className={`${showAnswers[index] ? 'text-white' : 'text-blackColor'} text-base font-medium sx:text-xs`}>{answer.question}</h1>
                                <div className="flex justify-center items-center w-4 sx:w-2">
                                    <img src={showAnswers[index] ? minus : plus} alt="" />
                                </div>
                            </div>
                            {showAnswers[index] && (
                            <div className="flex items-center p-3 w-[23rem] duration-500 sx:w-[18rem] sm:w-[27rem] md:w-[40rem]">
                                <p className='text-textColor text-sm sx:text-xs'>{answer.answer}</p>
                            </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Answers;
