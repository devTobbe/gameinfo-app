import React from 'react'

const GameItem = ({game}) => {
  return (
      <div className='h-40 bg-blue-500 border-2 border-black'>
        <p className="text-white">{game.name}</p>
      </div>
  )
}

export default GameItem