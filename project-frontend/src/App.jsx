import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/index.jsx";
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  return (
    <>      
      <Routes>
      <Route
        path="/auth"
        element={<AuthPage />}
      />
      </Routes>
    </>
  )
}

export default App
