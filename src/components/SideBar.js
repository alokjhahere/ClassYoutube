import React from 'react'

const SideBar = () => {
  return (
    <div className='p-5 w-48 shadow-2xl'>
      <div className='m-2'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscription</li>
        </ul>
      </div>
      <div className='m-2'>
        <h1 className='font-bold'>You ▶️ </h1>
        <ul>
            <li>History</li>
            <li>Playlists</li>
            <li>Your Videos</li>
            <li>Your Courses</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
