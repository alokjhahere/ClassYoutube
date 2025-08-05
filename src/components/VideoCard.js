import React from 'react'

const VideoCard = ({info}) => {
  console.log(info);
  const {snippet, statistics} = info;
  return (
    <div className='m-2 p-2 w-72 shadow-lg fl'>
      <img className='rounded-lg' src={snippet.thumbnails.medium.url}/>
      <ul>
        <li className='font-bold'>{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount/1000}K</li>
      </ul>
    </div>
  )
}

export default VideoCard;
