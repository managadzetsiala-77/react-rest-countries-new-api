import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details" 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details/:code" element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App
