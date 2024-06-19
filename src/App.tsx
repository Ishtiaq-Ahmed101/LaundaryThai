import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Menue from "./pages/Menue"


function App() {


  return (
    <main className="m-[10px] md:mx-[10%]">
      <BrowserRouter>
      <Navbar/>
        <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/menue' element={<Menue/>} />
     
        </Routes>
            
        </BrowserRouter>

    </main>
  )
}

export default App
