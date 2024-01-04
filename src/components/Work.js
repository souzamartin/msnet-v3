import { Container, Box, Button, Typography, Stack } from "@mui/material"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import WorkCard from "./WorkCard"
import martinsouza_resume from "../res/martinsouza_resume.pdf"
import projectData from "../res/projectData"

function Work() {
  const renderedProjects = projectData.map(proj =>
      <WorkCard key={proj.name} proj={proj} />
  )

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<FileDownloadIcon />}
          href={martinsouza_resume}
          download
          sx={{ backgroundColor: "primary.light" }}
        >
          Martin's résumé (PDF)
        </Button>
      </Box>

      <Typography variant="h4" sx={{ marginBottom: 1 }}>Technical Projects</Typography>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {renderedProjects}
      </Stack>
    </Container>
  )
}

export default Work