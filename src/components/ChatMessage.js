const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center p-2'>
      <img className='h-8' alt='user' src='https://imgs.search.brave.com/8DjRDrTQhcbFFYPeFEv0j2dowg90DgXJ7Xrh8daQVAY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRHo2M0Uv/TUFGNEtKRHo2M0Uv/MS90bC9jYW52YS11/c2VyLWljb24tTUFG/NEtKRHo2M0UucG5n'/> 
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
      
    </div>
  )
}

export default ChatMessage
