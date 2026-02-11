import { Routes, Route } from 'react-router-dom'
import Navbar, { Whoops404 } from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Destination from './pages/Destination'
import "./index.css"

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Whoops404/>} />
      </Routes>
    </>
  );
}

export default App