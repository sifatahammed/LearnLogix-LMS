import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  return (
    <>      
      <div className="flex min-h-svh flex-col items-center justify-center">
        <h1 class="bg-green-300 text-3xl font-bold underline">
          Hello world!
        </h1>
        <Button>Click</Button>
      </div>
    </>
  )
}

export default App
