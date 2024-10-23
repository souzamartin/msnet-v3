import { Container, Box, Button, Typography, Stack } from "@mui/material"
import WorkCard from "./WorkCard"

function Work() {
  // const renderedProjects = projectData.map(proj =>
  //     <WorkCard key={proj.name} proj={proj} />
  // )

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 1 }}>Services</Typography>
      <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 1 }}>Professional Polaroid Photography</Typography>
      <Typography variant="body">
        Whether you want Polaroid photos to remember an event or special occasion, Polaroid portraits (of humans or animal companions), an artistic Polaroid shoot, or any other 
      </Typography>
      <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 1 }}>Photography</Typography>
      <Typography variant="body">
        lalala
      </Typography>
      <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 1 }}>Portraits</Typography>
      <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 1 }}>Pets</Typography>
      {/* <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {renderedProjects}
      </Stack> */}
    </Container>
  )
}

export default Work