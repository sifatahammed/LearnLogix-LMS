import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
      <div className="flex min-h-svh flex-col items-center justify-center">
        <h1 class="bg-green-300 text-3xl font-bold underline">
          Hello world!
        </h1>
        <Button>Click me</Button>
      </div>
    </>
  )
}

export default App
