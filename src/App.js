import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Main from "./components/Main"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
