import { useState } from "react"
import Login from "./pages/Login"
import UserContext from "./context/userContext"

function App() {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Login></Login>   
    </UserContext.Provider>
  )
}

export default App
