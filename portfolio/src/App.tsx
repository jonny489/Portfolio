import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path ="/" element ={<Home></Home>} />
          <Route path ="/about" element = {<About></About>} />
          <Route path ="/resume" element = {<Resume></Resume>} />
          <Route path ="/projects" element = {<Projects/>} />
          <Route path ="/contact" element = {<Contact></Contact>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
