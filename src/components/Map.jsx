import React from 'react'

import House from './House'

import { rooms } from '../data'

import './map.css'

export default function Map(props) {
  const getRoom = (x, y) => {
    // console.log({ x, y });
    const room = rooms.filter(room => (
      y >= room.bounds[0].y && x >= room.bounds[0].x &&
      y <= room.bounds[1].y && x <= room.bounds[1].x
    ))[0];
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
    let x = e.clientX - bounds.left
    let y = e.clientY - bounds.top
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
        <House />
      </div>
    </div>
  )
}
