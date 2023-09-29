import React from 'react'

const Button = ({ text }) => {
  return (
    <button type='submit' className='text-white bg-brandColor rounded px-6 py-3 text-xs w-fit hover:opacity-90 duration-500 sx:py-2 sx:px-4'>{text}</button>
  )
}

export default Button
