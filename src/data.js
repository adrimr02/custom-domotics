
const RoomModel = {
  name: String,
  id: String,
  bounds: {
    isCustom: Boolean,
    xPos: Number,
    yPos: Number,
    height: Number,
    width: Number,
  },
  lights: [
    {
      name: String,
      status: Boolean
    },
  ],
  shutters: [
    {
      name: String,
      status: Number
    },
  ],
}

export const rooms = [
  {
    name: "Habitacion Adrian",
    id: "1",
    bounds: {
      isCustom: false,
      xPos: 200,
      yPos: 200,
      height: 43,
      width: 28,
    },
    lights: [
      {
        name: "Techo",
        status: false
      },
    ],
    shutters: [
      {
        name: "Persiana",
        status: 0
      },
    ],
  },
  {
    name: "Habitacion Irene",
    id: "2",
    bounds: {
      isCustom: false,
      xPos: 228,
      yPos: 200,
      height: 43,
      width: 28,
    },
    lights: [
      {
        name: "Techo",
        status: false
      },
    ],
    shutters: [
      {
        name: "Persiana",
        status: 0
      },
    ],
  },
  {
    name: "Pasillo",
    id: "1",
    bounds: {
      isCustom: true,
      points: "180,173 200,173 200,190 250,190 250,200 200,200 200,243 180,243 180,203 170,203 170,190 180,190"
    },
    lights: [
      {
        name: "Entrada 1",
        status: false
      },
      {
        name: "Entrada 2",
        status: false
      },
      {
        name: "Pasillo",
        status: false
      },
      {
        name: "Escaleras",
        status: false
      },
    ],
  },
];