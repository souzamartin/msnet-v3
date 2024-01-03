import { Container, Box, Button } from "@mui/material"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import martinsouza_resume from "../res/martinsouza_resume.pdf"

function Work() {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
    </Container>
  )
}

export default Work