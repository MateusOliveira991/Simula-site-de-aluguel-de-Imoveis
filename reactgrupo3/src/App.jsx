import HeaderMain from "./components/HeaderMain"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./routes/AppRouter"


function App() {


  return (
    <>
    <BrowserRouter>
     <HeaderMain/> 
     <AppRouter/>
     </BrowserRouter>

    </>
  )
}

export default App
