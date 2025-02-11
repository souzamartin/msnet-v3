import { HashRouter, Routes, Route } from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Container, Divider } from "@mui/material"
import { Image } from "mui-image"
import banner from "./img/banner.png"
import Nav from "./components/Nav"
import Main from "./components/Main"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ccccff"
      },
      background: {
        default: "#ccccff",
        paper: "#ccccff"
      },
      text: {
        primary: "#333333"
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ paddingBottom: 10 }}>
        <Image src={banner} shift="bottom" />
        <HashRouter>
          <Nav />
          <Divider sx={{ marginBottom: 2 }} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </HashRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
