"use client"

import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import "../css/pergunta.css"

interface Opcao {
  letra: string
  texto: string
  correta: boolean
}

interface Pergunta {
  id: number
  pergunta: string
  opcoes: Opcao[]
}

interface PerguntasData {
  perguntas: Pergunta[]
}

function TelaPergunta() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [, setPerguntas] = useState<Pergunta[]>([])
  const [perguntaAtual, setPerguntaAtual] = useState<Pergunta | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.className = "pergunta-page"

    const carregarPerguntas = async () => {
      try {
        const response = await fetch("/src/data/perguntas.json")
        const data: PerguntasData = await response.json()
        setPerguntas(data.perguntas)

        const perguntaId = Number.parseInt(searchParams.get("id") || "1")
        const pergunta = data.perguntas.find((p) => p.id === perguntaId) || data.perguntas[0]
        setPerguntaAtual(pergunta)

        setLoading(false)
      } catch (error) {
        console.error("Erro ao carregar perguntas:", error)
        setLoading(false)
      }
    }

    carregarPerguntas()

    return () => {
      document.body.className = ""
    }
  }, [searchParams])

  const handleOpcaoClick = (opcao: Opcao) => {
    console.log(`Opção selecionada: ${opcao.letra}`)

    if (opcao.correta) {
      navigate("/chave", {
        state: { perguntaId: perguntaAtual?.id },
      })
    } else {
      alert("Resposta incorreta! Tente novamente.")
    }
  }

  if (loading) {
    return (
      <div className="pergunta-container">
        <div className="pergunta-box">
          <p className="pergunta-texto">Carregando pergunta...</p>
        </div>
      </div>
    )
  }

  if (!perguntaAtual) {
    return (
      <div className="pergunta-container">
        <div className="pergunta-box">
          <p className="pergunta-texto">Erro ao carregar pergunta.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pergunta-container">
      <div className="pergunta-box">
        <p className="pergunta-texto">{perguntaAtual.pergunta}</p>
      </div>

      <div className="opcoes-box">
        {perguntaAtual.opcoes.map((opcao) => (
          <div key={opcao.letra} className="opcao" onClick={() => handleOpcaoClick(opcao)}>
            <span className="letra-opcao">{opcao.letra})</span>
            {opcao.texto}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TelaPergunta
