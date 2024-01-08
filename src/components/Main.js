import { Container, Typography, Stack, Box } from "@mui/material"
import Image from "mui-image"
import portrait from "../img/portrait.jpg"

function Main() {
  return (
    <Container>
      <Stack direction={{ xs: "column", sm: "row"}} spacing={3}>
        <Typography variant="body">
          Before my intensive training to build single-page applications using React and Rails, I had over 10 years of professional experience as a writer, editor, and communicator in academia, the legal profession, game development, and other fields. I value precision, efficiency, thoughtful design, and of course clean code. As a collaborative worker, I thrive when contributing my rigorous diligence and detail-focused attention as part of a close-knit team.
          <br/>
          <br/>
          I am currently working as a freelance software developer, and I look forward to speaking with you about your project.
        </Typography>
        <Box sx={{ minWidth: "40%" }}>
          <Image src={portrait} sx={{ borderStyle: "solid", borderWidth: 1 }} />
        </Box>
      </Stack>
    </Container>
  )
}

export default Main