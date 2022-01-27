
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
      xPos: 71,
      yPos: 44,
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
      xPos: 99,
      yPos: 44,
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
      points: "51,17 71,17 71,34 121,34 121,44 71,44 71,87 51,87 51,47 41,47 41,34 51,34"
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
      points: "121,34 141,34 133,34 133,17 157,17 157,44 139,44 157,44 157,87 127,87 127,44 121,44"
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
      xPos: 101,
      yPos: 17,
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
      xPos: 71,
      yPos: 17,
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
      points: "1,47 41,47 41,71 51,71 51,114 1,114"
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
      points: "41,17 41,11 31,1 15,1 7,11 7,17 1,17 1,47 41,47"
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
      xPos: 41,
      yPos: 17,
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
      xPos: 41,
      yPos: 47,
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
      xPos: 51,
      yPos: 87,
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