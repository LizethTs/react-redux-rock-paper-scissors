import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opciones: ["tijera", "piedra", "papel"],
  usuario: "",
  computadora: "",
  resultado: "",
};

export const rockPaperScissorsSlice = createSlice({
  name: "rockPaperScissors",
  initialState,
  reducers: {
    setOptionUser: (state, action) => {
      state.usuario = action.payload;
    },
    setOptionComputer: (state) => {
      const number = Math.floor(Math.random() * 3);
      state.computadora = state.opciones[number];
    },
    setResult: (state, action) => {
      state.resultado = action.payload;
    },
    calculateResult: (state, action) => {
      if (action.payload.opcionUsuario === action.payload.opcionComputadora) {
        console.log("empate");
        state.resultado = "empate";
        state.usuario = "";
        state.computadora = "";
      } else if (
        action.payload.opcionUsuario === "piedra" &&
        action.payload.opcionComputadora === "tijera"
      ) {
        console.log("Gana usuario");
        state.resultado = "Gano usuario";
        state.usuario = "";
        state.computadora = "";
      } else if (
        action.payload.opcionComputadora === "piedra" &&
        action.payload.opcionUsuario === "tijera"
      ) {
        console.log("Gana computadora");
        state.resultado = "Gano computadora";
        state.usuario = "";
        state.computadora = "";
      } else if (
        action.payload.opcionUsuario === "papel" &&
        action.payload.opcionComputadora === "piedra"
      ) {
        console.log("Gana usuario");
        state.resultado = "Gana usuario";
        state.usuario = "";
        state.computadora = "";
      } else if (
        action.payload.opcionComputadora === "papel" &&
        action.payload.opcionUsuario === "piedra"
      ) {
        console.log("Gana computdora");
        state.resultado = "Gano computadora";
        state.usuario = "";
        state.computadora = "";
      } else if (
        action.payload.opcionUsuario === "tijera" &&
        action.payload.opcionComputadora === "papel"
      ) {
        console.log("Gana usuario");
        state.resultado = "Gano usuario";
        state.usuario = "";
        state.computadora = "";
      } else if (
        action.payload.opcionComputadora === "tijera" &&
        action.payload.opcionUsuario === "papel"
      ) {
        console.log("Gana computadora");
        state.resultado = "Gano computadora";
        state.usuario = "";
        state.computadora = "";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOptionUser, setOptionComputer, setResult, calculateResult } =
  rockPaperScissorsSlice.actions;

export default rockPaperScissorsSlice.reducer;
