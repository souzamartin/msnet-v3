import { Container, Box, Button, Typography, Stack } from "@mui/material"

function Work() {
  // const renderedProjects = projectData.map(proj =>
  //     <WorkCard key={proj.name} proj={proj} />
  // )

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 1 }}>Photographic Work</Typography>
      <Typography variant="body">
        lalala
      </Typography>
      <Typography variant="h5" sx={{ marginTop: 2 }}>Portraits</Typography>
      <Typography variant="h5" sx={{ marginTop: 2 }}>Pets</Typography>
      <Typography variant="h5" sx={{ marginTop: 2 }}>Features & Awards</Typography>
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