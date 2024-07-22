import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserContext from "./context/userContext"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import Homes from "./pages/Homes"
import RouteProtectedAdmin from "./pages/RouteProtectedAdmin"
import RouteProtectedUser from "./pages/RouteProtectedUser"


function App() {
    const [user, setUser] = useState({})
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}} >
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route element={<RouteProtectedAdmin/>}>
            <Route path="/home" element={<Homes/>}/>
          </Route>
          <Route element={<RouteProtectedUser/>}>
            <Route path="/admin" element={<Admin/>}/>
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
