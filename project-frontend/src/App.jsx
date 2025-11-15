import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import RouteGuard from "./components/route-guard";
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  return (
    <>      
      <Routes>
      <Route
        path="/auth"
        elementelement={<AuthPage />}
      />
      </Routes>
    </>
  )
}

export default App
