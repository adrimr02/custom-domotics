
// const RoomModel = {
//   name: String,
//   id: String,
//   bounds: {
//     isCustom: Boolean,
//     xPos: Number,
//     yPos: Number,
//     height: Number,
//     width: Number,
//   },
//   lights: [
//     {
//       name: String,
//       status: Boolean
//     },
//   ],
//   shutters: [
//     {
//       name: String,
//       status: Number
//     },
//   ],
// }

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
    id: "3",
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
  {
    name: "Habitacion Principal",
    id: "4",
    bounds: {
      isCustom: true,
      points: "250,190 270,190 262,190 262,173 286,173 286,200 268,200 286,200 286,243 256,243 256,200 250,200"
    },
    lights: [
      {
        name: "Pasillo",
        status: false
      },
      {
        name: "Habitacion",
        status: false
      },
      {
        name: "Vestidor",
        status: false
      },
    ],
    shutters: [
      {
        name: "Habitacion",
        status: 0
      },
      {
        name: "Vestidor",
        status: 0
      },
    ],
  },
  {
    name: "Baño Principal",
    id: "5",
    bounds: {
      isCustom: false,
      xPos: 230,
      yPos: 173,
      height: 17,
      width: 32,
    },
    lights: [
      {
        name: "Techo",
        status: false
      },
      {
        name: "Espejo",
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
    name: "Baño 2",
    id: "6",
    bounds: {
      isCustom: false,
      xPos: 200,
      yPos: 173,
      height: 17,
      width: 30,
    },
    lights: [
      {
        name: "Techo",
        status: false
      },
      {
        name: "Espejo",
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
    name: "Salon",
    id: "7",
    bounds: {
      isCustom: true,
      points: "130,203 170,203 170,227 180,227 180,270 130,270"
    },
    lights: [
      {
        name: "Techo 1",
        status: false
      },
      {
        name: "Techo 2",
        status: false
      },
      {
        name: "Pared",
        status: false
      },
    ],
    shutters: [
      {
        name: "Persiana 1",
        status: 0
      },
      {
        name: "Persiana 2",
        status: 0
      },
    ],
  },
  {
    name: "Cocina",
    id: "8",
    bounds: {
      isCustom: true,
      points: "170,173 170,167 160,157 146,157 136,167 136,173 130,173 130,203 170,203"
    },
    lights: [
      {
        name: "Techo 1",
        status: false
      },
      {
        name: "Techo 2",
        status: false
      },
      {
        name: "Techo 3",
        status: false
      },
    ],
    shutters: [
      {
        name: "Persiana 1",
        status: 0
      },
      {
        name: "Persiana 2",
        status: 0
      },
      {
        name: "Persiana 3",
        status: 0
      },
    ],
  },
  {
    name: "Despensa Cocina",
    id: "9",
    bounds: {
      isCustom: false,
      xPos: 170,
      yPos: 173,
      height: 17,
      width: 10,
    },
    lights: [
      {
        name: "Techo",
        status: false
      },
    ],
  },
  {
    name: "Despensa Salon",
    id: "10",
    bounds: {
      isCustom: false,
      xPos: 170,
      yPos: 203,
      height: 24,
      width: 10,
    },
    lights: [
      {
        name: "Techo",
        status: false
      },
    ],
  },
  {
    name: "Porche",
    id: "11",
    bounds: {
      isCustom: false,
      xPos: 180,
      yPos: 243,
      height: 22,
      width: 51,
    },
    lights: [
      {
        name: "Techo",
        status: false
      },
    ],
  },
];