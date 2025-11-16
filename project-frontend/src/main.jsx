import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from "./context/auth-context/index.jsx";
import { InstructorContext } from "./context/instructor-context";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <InstructorContext>
        <App/>
      </InstructorContext>
    </AuthProvider>
  </BrowserRouter>
)
