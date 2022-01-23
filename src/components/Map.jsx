import React from 'react'

import House from './House'

import { rooms } from '../data'

import './map.css'

export default function Map(props) {
  const getRoom = (x, y) => {
    // console.log({ x, y });
    const room = rooms.filter(room => {
      for (let i = 0; i < room.bounds.length; i++) {
        let square = room.bounds[i];
        if (y >= square[0].y && x >= square[0].x &&
            y <= square[1].y && x <= square[1].x)
          return true;
      }
      return false;
    })[0];
    return room;
  }

  const mouseMove = (e) => {
    let bounds = e.target.getBoundingClientRect()
    let x = e.clientX - bounds.left
    let y = e.clientY - bounds.top
    getRoom(Math.round(x), Math.round(y))
  }

  const handleClick = (e) => {
    e.preventDefault();
    let bounds = e.target.getBoundingClientRect()
    // let x = e.clientX - bounds.left
    // let y = e.clientY - bounds.top
    let x = e.clientX
    let y = e.clientY
    
    console.log({ x: Math.round(x), y: Math.round(y) })
    clickOnRoom(getRoom(Math.round(x),Math.round(y)));
  }

  const clickOnRoom = (room) => {
    if (!room)
      return;

    console.log(room.name);
  }

  return (
    <div className='container'>
      <div 
        className="map"
        onMouseOver={mouseMove}
        onClick={handleClick}
      >
        <img src="/images/dibujo.jpeg" alt="" />
      </div>
    </div>
  )
}

