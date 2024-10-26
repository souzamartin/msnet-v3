import { Container, Typography, Box, Stack, Divider, Button } from "@mui/material"
import InstaIcon from '@mui/icons-material/Instagram'
import CropOriginalSharpIcon from '@mui/icons-material/CropOriginalSharp'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

function Contact() {
  return (
    <Container>
      <Typography variant="body">
        For professional inquiries, please contact me via e-mail.
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
          {/* <Button
            variant="text"
            color="inherit"
            size="large"
            startIcon={<EmailOutlinedIcon />}
            href="https://dev.to/souzamartin"  
            target="_blank"
            rel="noopener"
            sx={{ backgroundColor: "primary.light" }}
          >
            e-mail
          </Button> */}
          <Button
            variant="text"
            color="inherit"
            size="large"
            startIcon={<InstaIcon />}
            href="https://www.instagram.com/polatronic_martin/"
            target="_blank"
            rel="noopener"
            sx={{ backgroundColor: "primary.light" }}
          >
            Instagram
          </Button>
          <Button
            variant="text"
            color="inherit"
            size="large"
            startIcon={<CropOriginalSharpIcon />}
            href="https://www.stayforaninstant.com/" 
            target="_blank"
            rel="noopener"
            sx={{ backgroundColor: "primary.light" }}
          >
            The Instant Film Magazine
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default Contact