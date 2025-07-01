import { Link } from "react-router-dom"
import "../css/escape-room.css"

function TelaHistoria() {
  return (
    <div className="tela-container historia">
      <div className="historia-box">
        <p className="historia-text">
          BEM-VINDO A MEMÓRIAS PÓSTUMAS DE BRÁS CUBAS. O ANO É 1872, TRÊS ANOS APÓS A MORTE DE BRÁS, E VOCÊ IRÁ EMBARCA
          EM UMA VIAGEM NAS INTERTEXTUALIDADES DESSA OBRA. VIAJANDO PARA UMA BELA CHÁCARA EM CATUMBI, EM QUE LHE FOI
          DADO DE HERANÇA, NA SEGUNDA NOITE, BARULHOS ESTRANHOS SÃO OUVIDOS E DE REPENTE, A PORTA DO QUARTO É TRANCADA E
          NA ESCURIDÃO UMA FIGURA SURGE NO CANTO DA SALA.
        </p>
        <Link to="/pergunta" className="continuar-button">
          CONTINUAR
        </Link>
      </div>
    </div>
  )
}

export default TelaHistoria
