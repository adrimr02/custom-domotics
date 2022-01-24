import React from 'react'

// import House from './House'
import { CustomRoom, Room } from './Room'

import { rooms } from '../data'

import './map.css'

export default function Map(props) {

  const handleClick = (e, room) => {
    
    console.log(`Clicked ${room.name}`)
  }

  const handleMouseEnter = (e, room) => {
    // console.log(`Mouse entered ${room.name}`)
  }

  const handleMouseLeave = (e, room) => {
    // console.log(`Mouse Leaved ${room.name}`)
  }

  return (
    <div className='container'>
      <div className="map">
        <svg height={300} width={400}>
          {
            rooms.map(room => {
              if (!room.bounds.isCustom)
                return (
                  <Room
                    key={room.id}
                    xPos={room.bounds.xPos}
                    yPos={room.bounds.yPos}
                    width={room.bounds.width}
                    height={room.bounds.height}
                    handleClick={handleClick}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    {...room}
                  ></Room>
                )
              else
                return (
                  <CustomRoom
                    key={room.id}
                    points={room.bounds.points}
                    handleClick={handleClick}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    {...room}
                  ></CustomRoom>
                )
            })
          }
        </svg>
      </div>
    </div>
  )
}

