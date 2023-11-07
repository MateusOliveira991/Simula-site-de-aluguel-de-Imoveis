import HeaderMain from "./components/HeaderMain"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./routes/AppRouter"


function App() {

  // function handleCallbackResponse(response){
  //   console.log("jwt" + response.credential)
  // }

  // useEffect(()=>{
  //   google.accountes.id.initialize({
  //     client_id:"338813839374-ij4r5ot709q6q7h3cgdfrdsuq797o582.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   })
  //   google.accountes.id.renderButton(
  //     document.getElementById("sigInDiv"),
  //     {theme: "outline", size:"large"}
  //   )
  // },[])

  return (
    <>
    <BrowserRouter>
     <HeaderMain/> 
     <AppRouter/>
     </BrowserRouter>
      {/* <div className="signInDiv">

      </div> */}
    </>
  )
}

export default App
