import { Link } from "react-router-dom"
import "../css/escape-room.css"

function TelaInicial() {
  return (
    <div className="tela-container">
      <div className="title-section">
        <h1 className="game-title">ESCAPE ROOM LITERÁRIO:</h1>
        <h2 className="game-subtitle">FUJA DE BRÁS CUBAS</h2>
      </div>
      <div className="button-section">
        <Link to="/historia" className="iniciar-button">
          INICIAR
        </Link>
      </div>
    </div>
  )
}

export default TelaInicial
