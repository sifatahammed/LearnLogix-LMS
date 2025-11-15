import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/index.jsx";
import './App.css'
import RouteGuard from "./components/route-guard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import InstructorDashboardpage from "./pages/instructor";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>
       <Route
        path="/auth"
        element={
          <RouteGuard
            element={<AuthPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor"
        element={
          <RouteGuard
            element={<InstructorDashboardpage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
    </Routes>
  )
}

export default App
