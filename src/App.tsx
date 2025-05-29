import './App.css'
import { Button } from './components/ui/button'

function App() {

  function sayHello() {
    alert('Hello, World!');
  }

  return (
    <>
      <h1 className="flex flex-col items-center justify-center min-h-svh">
        <Button onClick={sayHello}>Click Me</Button>
      </h1>
    </>
  )
}

export default App
