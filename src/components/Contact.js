import { Container, Typography, Box, Stack, Divider, Button } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import ArticleIcon from '@mui/icons-material/Article'

function Contact() {
  return (
    <Container>
      <Typography variant="body">
        For professional inquiries, please contact me via LinkedIn or e-mail (for my address, see my résumé or LinkedIn profile).
        <br/>
        <br/>
        You can find me out and about online:
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2}}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1.5, sm: 2}}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Button
            variant="text"
            color="inherit"
            size="large"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/martin-souza-nyc/"
            target="_blank"
            rel="noopener"
            sx={{ backgroundColor: "primary.light" }}
          >
            LinkedIn
          </Button>
          <Button
            variant="text"
            color="inherit"
            size="large"
            startIcon={<GitHubIcon />}
            href="https://github.com/souzamartin" 
            target="_blank"
            rel="noopener"
            sx={{ backgroundColor: "primary.light" }}
          >
            GitHub
          </Button>
          <Button
            variant="text"
            color="inherit"
            size="large"
            startIcon={<ArticleIcon />}
            href="https://dev.to/souzamartin"  
            target="_blank"
            rel="noopener"
            sx={{ backgroundColor: "primary.light" }}
          >
            DEV.to
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default Contact