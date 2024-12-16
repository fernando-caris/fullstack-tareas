import { Routes, Route } from "react-router-dom"
import './App.scss'
import Login from "./components/Login/Login"
import Home from "./components/home/Home"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
