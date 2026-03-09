import { BrowserRouter,Routes,Route } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Home from "../pages/Home"
import Quiz from "../pages/Quiz"
import Result from "../pages/Result"
import History from "../pages/History"

function MainRouter(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/quiz/:topic" element={<Quiz/>} />

<Route path="/result" element={<Result/>} />

<Route path="/history" element={<History/>} />

</Routes>

<Footer/>

</BrowserRouter>

)

}

export default MainRouter