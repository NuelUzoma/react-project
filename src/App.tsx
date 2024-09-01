// import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Navbar from './pages/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
