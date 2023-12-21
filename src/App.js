import { BrowserRouter, Routes, Route } from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Container } from "@mui/material"
import Nav from "./components/Nav"
import Main from "./components/Main"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"

function App() {
  const theme = createTheme({
    palette: {
      text: {
        primary: "#333333"
      },
      background: {
        default: "#ccccff",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
