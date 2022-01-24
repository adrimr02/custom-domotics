import React from 'react'

// import House from './House'
import { CustomRoom, Room } from './Room'

import { rooms } from '../data'

import './map.css'

export default function Map(props) {

  return (
    <div className='container'>
      <div 
        className="map"
      >
        <svg preserveAspectRatio='xMaxyMax'>
          <Room xPos={230} yPos={173} width={32} height={17} ></Room> {/* Baño Principal */}
          <Room xPos={200} yPos={173} width={30} height={17} ></Room> {/* Baño 2 */}
          <Room xPos={200} yPos={200} width={28} height={43} ></Room> {/* Habitacion 1 */}
          <Room xPos={228} yPos={200} width={28} height={43} ></Room> {/* Habitacion 2 */}
          <CustomRoom points={"250,190 270,190 262,190 262,173 286,173 286,200 268,200 286,200 286,243 256,243 256,200 250,200"}></CustomRoom> {/* Habitacion Principal */}
          <CustomRoom points={"180,173 200,173 200,190 250,190 250,200 200,200 200,243 180,243 180,203 170,203 170,190 180,190"}></CustomRoom> {/* Entrada, Pasillo, Escalera */}
          <Room xPos={170} yPos={173} width={10} height={17} ></Room> {/* Despensa Cocina */}
          <Room xPos={170} yPos={203} width={10} height={24} ></Room> {/* Despensa Desvan */}
          <CustomRoom points={"130,203 170,203 170,227 180,227 180,270 130,270"}></CustomRoom> {/* Salon */}
          <CustomRoom points={"170,173 170,167 160,157 146,157 136,167 136,173 130,173 130,203 170,203"}></CustomRoom> {/* Cocina */}
          <Room xPos={180} yPos={243} width={51} height={22} ></Room> {/* Porche */}

        </svg>
        
      </div>
    </div>
  )
}

