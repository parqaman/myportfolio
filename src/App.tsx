import { HashRouter } from "react-router-dom"
import { AppRoutes } from '../AppRoutes'

function App() {
  return (
    <div className="App">
      <HashRouter basename="https://parqaman.github.io/web-cv">
          <AppRoutes />
      </HashRouter>
    </div>
  )
}

export default App
