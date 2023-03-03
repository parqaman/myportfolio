import { HashRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from '../AppRoutes'

function App() {
  return (
    <div className="App font-base">
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </div>
  )
}

export default App
