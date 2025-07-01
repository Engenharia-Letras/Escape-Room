import type React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import TelaInicial from "../pages/TelaInicial"
import TelaHistoria from "../pages/TelaHistoria"
import TelaPergunta from "../pages/TelaPergunta"
import TelaChave from "../pages/TelaChave"

export default function AppRoutes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/historia" element={<TelaHistoria />} />
        <Route path="/pergunta" element={<TelaPergunta />} />
        <Route path="/chave" element={<TelaChave />} />
      </Routes>
    </BrowserRouter>
  )
}
