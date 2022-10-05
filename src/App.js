import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setOptionUser,
  setOptionComputer,
  setResult,
  calculateResult,
} from "./redux/slice/rockPaperScissorsSlice";
import { useEffect } from "react";

function App() {
  const resultadoFinal = useSelector(
    (state) => state.rockPaperScissors.resultado
  );
  const opcionUsuario = useSelector((state) => state.rockPaperScissors.usuario);
  const opcionComputadora = useSelector(
    (state) => state.rockPaperScissors.computadora
  );
  let mostrarOpcionComputadora = '';
  const dispatch = useDispatch();

  useEffect(() => {
    if (opcionUsuario !== "") {
      dispatch(setOptionComputer());
    }
  }, [dispatch, opcionUsuario]);

  useEffect(() => {
    if (opcionUsuario !== '' && opcionComputadora !== '') {
      mostrarOpcionComputadora = opcionComputadora;
      dispatch(calculateResult({ opcionUsuario, opcionComputadora }));
    }
  }, [dispatch, opcionComputadora]);

  return (
    <div className="appContainer">
      <div className="playerContainer">
        <div className="title">
          <h2>Usuario</h2>
          <p>Selecciona una opción</p>
        </div>
        <ul className="playerOptions">
          <li onClick={() => dispatch(setOptionUser("piedra"))}>piedra</li>
          <li onClick={() => dispatch(setOptionUser("papel"))}>papel</li>
          <li onClick={() => dispatch(setOptionUser("tijera"))}>tijera</li>
        </ul>
      </div>
      <div className="resultContainer">
        <p>Resultado</p>
        <p>{resultadoFinal} </p>
      </div>
      <div className="playerContainer bottom">
        <div className="title">
          <h2>Computadora</h2>
          <p>Esperando jugada del usuario..</p>
        </div>
        <ul className="playerOptions">
          {mostrarOpcionComputadora === "" ? <li>?</li> : <li>{mostrarOpcionComputadora}</li>}
        </ul>
      </div>
    </div>
  );
}

export default App;
