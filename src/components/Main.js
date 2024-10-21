import { Container, Typography, Stack, Box, Link } from "@mui/material"
import Image from "mui-image"
import portrait from "../img/portrait.jpg"

function Main() {
  return (
    <Container>
      <Stack direction={{ xs: "column", sm: "row"}} spacing={3}>
        <Typography variant="body">
          I became a Polaroid photographer when my father gave me his SX-70 in 2022. As an inquisitive beginner with no technical knowledge of photography, I approached the Polaroid medium on its own accessible and intuitive terms, and quickly came to love it for its immediacy, unpredictability, and imperfection. I'm committed to sharing knowledge and experience, and encouraging others to explore and experiment with instant photography, whatever their background in other photography may be.
          <br/>
          <br/>
          In addition to my services as a specialist Polaroid photographer, I offer introductory instruction in the medium through my Polaroid 101 workshops and in private sessions. I also provide vintage Polaroid cameras for rental, including whatever level of guidance and support you need to use them.
          <br/>
          <br/>
          I am also a contributor and the Editor at <Link
              href="https://www.stayforaninstant.com/"
              target="_blank"
              rel="noopener"
              variant="inherit" 
              color="inherit"
          >
            <i>Stay For An Instant — The Instant Film Magazine</i>.
          </Link>
        </Typography>
        <Box sx={{ minWidth: "40%" }}>
          <Image src={portrait} sx={{ borderStyle: "solid", borderWidth: 1 }} />
        </Box>
      </Stack>
    </Container>
  )
}

export default Main