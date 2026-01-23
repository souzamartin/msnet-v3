import { Container, Typography, Stack, Box, Link } from "@mui/material"
import Image from "mui-image"
import portrait from "../img/portrait.jpg"

function Main() {
  return (
    <Container>
      <Stack direction={{ xs: "column", sm: "row"}} spacing={3}>
        <Typography variant="body">
          I became a Polaroid photographer when I borrowed my father's SX-70 camera in 2022. As an inquisitive beginner with no technical knowledge of photography, I approached the Polaroid medium on its own accessible and intuitive terms, and quickly came to love its immediacy, unpredictability, and imperfection. I'm committed to sharing knowledge and experience, and encouraging others to explore and experiment with instant photography, whatever their other artistic or photographic background may be.
          <br/>
          <br/>
          In addition to my services as a specialist Polaroid photographer for hire, I offer introductory instruction in the medium through Polaroid 101 workshops and in private sessions. I can provide vintage Polaroid cameras for rental, including whatever level of guidance and support you need to use them. I am available as a technicnal consultant on all things Polaroid-related for movies, television, or any other projects.
          <br/>
          <br/>
          I am also Editor of <Link
              href="https://www.instantfilmmagazine.com/"
              target="_blank"
              rel="noopener"
              variant="inherit" 
              color="inherit"
          >
            <i>The Instant Film Magazine</i>
          </Link>, East Coast Regional Director of the <Link
              href="https://www.instantfilmsociety.org/"
              target="_blank"
              rel="noopener"
              variant="inherit" 
              color="inherit"
          >
            Instant Film Society
          </Link>, Resident Polaroid Educator at <Link
              href="https://brooklynfilmcamera.com/"
              target="_blank"
              rel="noopener"
              variant="inherit" 
              color="inherit"
          >
            Brooklyn Film Camera
          </Link>, and host of the NYC Instant Photowalk.
        </Typography>
        <Box sx={{ minWidth: "40%" }}>
          <Image src={portrait} sx={{ borderStyle: "solid", borderWidth: 1 }} />
        </Box>
      </Stack>
    </Container>
  )
}

export default Main