import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app">
     <Header />
     <Footer />
     </div>
    </>
  )
}

export default App
