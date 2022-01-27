import { Component } from 'react'

import { CustomRoom, Room } from './Room'
import { RoomDetails } from './RoomDetails'

import { rooms } from '../data'

import './map.css'

export default class Map extends Component {
  constructor() {
    super()
    this.state= {
      show: false,
      room: undefined
    }
    this.shopModal = this.shopModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }
  
  handleClick = (e, room) => {
    console.log(`Clicked ${room.name}`)
    this.shopModal(room)
  }

  shopModal = (room) => {
    this.setState({ show: true, room: room })
  }

  hideModal = () => {
    this.setState({ show: false, room: null })
  }
  
  render() {
    const mult = 6
    return (
      <div className='container'>
        <div className="map">
          <svg>
            {
              rooms.map(room => {
                if (!room.bounds.isCustom)
                  return (
                    <Room
                      key={room.id}
                      xPos={room.bounds.xPos * mult}
                      yPos={room.bounds.yPos * mult}
                      width={room.bounds.width * mult}
                      height={room.bounds.height * mult}
                      handleClick={this.handleClick}
                      {...room}
                    ></Room>
                  )
                else
                  return (
                    <CustomRoom
                      key={room.id}
                      points={room.bounds.points}
                      sizeMult={mult}
                      handleClick={this.handleClick}
                      {...room}
                    ></CustomRoom>
                  )
              })
            }
          </svg>
        </div>
        <div className="details">
          <RoomDetails show={this.state.show} handleClose={this.hideModal}>
            {
              this.state.show ? <h2>{this.state.room.name}</h2> : <>Vacio</>
            }
          </RoomDetails>
        </div>
      </div>
    )
  }
}

