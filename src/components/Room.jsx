import './room.css'

const color = "#04f"

export const Room = ({xPos, yPos, width, height, handleClick, sizeMult, ...room}) => {
  return (
    <rect 
      className="room"
      x={xPos} y={yPos} width={width} height={height}
      fill="rgba(0,0,0,0)" strokeWidth="3" stroke={color} vectorEffect="non-scaling-stroke"
      onClick={(e) => handleClick(e, room)}
    />
  );
};

export const CustomRoom = ({points, onClick, handleClick, sizeMult, ...room}) => {
  return (
    <polygon 
      className="room"
      points={points} transform={`scale(${sizeMult},${sizeMult})`}
      fill="rgba(0,0,0,0)" strokeWidth="3" stroke={color} vectorEffect="non-scaling-stroke"
      onClick={(e) => handleClick(e, room)}
    />
  );
};
