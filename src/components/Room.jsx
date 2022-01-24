import React from 'react';

const color = "#04f"

export const Room = ({xPos, yPos, width, height}) => {

  return (
    <rect x={xPos} y={yPos} width={width} height={height} fill="rgba(0,0,0,0)" strokeWidth="3" stroke={color} />
  );
};

export const CustomRoom = ({points}) => {

  return (
    <polygon points={points} fill="rgba(0,0,0,0)" strokeWidth="3" stroke={color} />
  );
};
