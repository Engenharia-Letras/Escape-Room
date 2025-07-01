"use client"

import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "../css/chave.css"

function TelaChave() {
  const location = useLocation()

  useEffect(() => {
    document.body.className = "chave-page"

    return () => {
      document.body.className = ""
    }
  }, [])

  const perguntaAtual = location.state?.perguntaId || 1
  const proximaPergunta = perguntaAtual + 1

  const temMaisPerguntas = proximaPergunta <= 5

  return (
    <div className="chave-container">
      <div className="chave-box">
        <img src="/src/assets/chave.png" alt="Chave" className="chave-icon" />
        <div className="chave-content">
          <p className="chave-texto">Você ganhou uma chave para prosseguir para a próxima sala!</p>
        </div>
      </div>

      {temMaisPerguntas ? (
        <Link to={`/pergunta?id=${proximaPergunta}`} className="continuar-button">
          PRÓXIMA PERGUNTA
        </Link>
      ) : (
        <Link to="/fim" className="continuar-button">
          FINALIZAR
        </Link>
      )}
    </div>
  )
}

export default TelaChave
