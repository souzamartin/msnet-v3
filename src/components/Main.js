import { Container, Typography, Box } from "@mui/material"
import Image from "mui-image"
import portrait from "../img/portrait.jpg"

function Main() {
  return (
    <Container sx={{ marginTop: 2, display: "flex", flexDirection: "row" }}>
      <Typography variant="body">
        A full-stack engineer intensively trained to build single-page applications using React and Rails, Martin also has over 10 years of professional experience as a writer, editor, and communicator in academia, the legal profession, game development, and other fields. He values precision, efficiency, and thoughtful, adaptive design, and thrives when contributing his rigorous, detail-focused attention and collaborative communication as part of a close-knit team.
      </Typography>
      <Box sx={{ paddingLeft: 2, minWidth: "40%" }}>
        <Image src={portrait} sx={{ borderStyle: "solid", borderWidth: 1 }} />
      </Box>
    </Container>
  )
}

export default Main