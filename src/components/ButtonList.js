import React from 'react'
import Button from './Button'

const List = ["All","Music", "Podcasts", "Software","Sysytem","Mixes","Gaming","Live","Soccer","React", "All", "All","All","All","All",]

const ButtonList = () => {

  return (
    <div className='flex'>
    {List.map((item, index)=> <Button key={index} name={item}/>)}
    </div>
  )
}

export default ButtonList
