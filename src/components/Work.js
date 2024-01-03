import { Container, Box, Button, Typography } from "@mui/material"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import martinsouza_resume from "../res/martinsouza_resume.pdf"
import projectData from "../res/projectData"

function Work() {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<FileDownloadIcon />}
          href={martinsouza_resume}
          download
        >
          Martin's résumé (PDF)
        </Button>
      </Box>

      <Typography variant="h4">Technical Projects</Typography>
    </Container>
  )
}

export default Work