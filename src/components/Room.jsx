import React from 'react';

import './room.css'

const color = "#04f"

export const Room = ({xPos, yPos, width, height, handleClick, handleMouseEnter, handleMouseLeave, ...room}) => {
  return (
    <rect 
      className="room"
      x={xPos} y={yPos} width={width} height={height}
      fill="rgba(0,0,0,0)" strokeWidth="3" stroke={color} vectorEffect="non-scaling-stroke"
      onClick={(e) => handleClick(e, room)}
      onMouseEnter={(e) => handleMouseEnter(e, room)}
      onMouseLeave={(e) => handleMouseLeave(e, room)}
    />
  );
};

export const CustomRoom = ({points, onClick, handleClick, handleMouseEnter, handleMouseLeave, ...room}) => {
  return (
    <polygon 
      className="room"
      points={points}
      fill="rgba(0,0,0,0)" strokeWidth="3" stroke={color} vectorEffect="non-scaling-stroke"
      onClick={(e) => handleClick(e, room)}
      onMouseEnter={(e) => handleMouseEnter(e, room)}
      onMouseLeave={(e) => handleMouseLeave(e, room)}
    />
  );
};
