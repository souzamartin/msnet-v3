import { Container, Typography, Box } from "@mui/material"
import Image from "mui-image"
import portrait from "../img/portrait.jpg"

function Main() {
  return (
    <Container sx={{ display: "flex", flexDirection: "row" }}>
      <Typography variant="body">
        Before my intensive training to build single-page applications using React and Rails, I had over 10 years of professional experience as a writer, editor, and communicator in academia, the legal profession, game development, and other fields. I value precision, efficiency, thoughtful design, and of course clean code. As a collaborative worker, I thrive when contributing my rigorous diligence and detail-focused attention as part of a close-knit team.
      </Typography>
      <Box sx={{ paddingLeft: 2, minWidth: "40%" }}>
        <Image src={portrait} sx={{ borderStyle: "solid", borderWidth: 1 }} />
      </Box>
    </Container>
  )
}

export default Main