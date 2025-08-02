import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();
  const handleSideBar = () => {
     dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col p-2  shadow-lg'>
      <div className='flex col-span-1 '>
        <img className='h-8' alt='hamburger' onClick={handleSideBar} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=='/>
        <img className='h-11 mx-2' alt='logo' src='https://imgs.search.brave.com/0jMEbl-2WeSaQHRXZ2T0rRRxpr6bYa9d5QILr3u6B8M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1lvdXR1YmUtTG9n/by01MDB4MjgxLnBu/Zw'/>
      </div>
      <div className='col-span-10 py-2 px-15'>
        <input className='w-1/2 border border-gray-400 p-1 rounded-l-full' type='text'/>
        <button className= 'border border-gray-400 p-1 rounded-r-full pl-2 pr-3 bg-gray-300 '>Search</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' alt='user' src='https://imgs.search.brave.com/8DjRDrTQhcbFFYPeFEv0j2dowg90DgXJ7Xrh8daQVAY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRHo2M0Uv/TUFGNEtKRHo2M0Uv/MS90bC9jYW52YS11/c2VyLWljb24tTUFG/NEtKRHo2M0UucG5n'/>
      </div>
    </div>
  )
}

export default Header
