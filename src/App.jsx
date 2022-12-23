import { BrowserRouter } from "react-router-dom"
import LoginRoutes from "./routes/LoginRoutes"

function App() {
  

  return (
    <>
     <BrowserRouter>
      <LoginRoutes/>
     </BrowserRouter>
    </>
  )
}

export default App
