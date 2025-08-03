import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-gray-100 px-3 py-2 m-2 rounded-lg font-semibold'>{name}</button>
    </div>
  )
}

export default Button
