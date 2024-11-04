import { useState } from "react"
import { Container, Typography, Box, Stack, Divider, Button, Input } from "@mui/material"
import InstaIcon from '@mui/icons-material/Instagram'
import CropOriginalSharpIcon from '@mui/icons-material/CropOriginalSharp'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

function Contact() {
  const [result, setResult] = useState(null)
  
  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")
    const formData = new FormData(event.target);

    formData.append("access_key", "1f0a0bfc-01ad-4401-924b-64003534bf6e")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <Container>
      <Typography variant="body">
        You can see my work out and about online:
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1.5, sm: 2}}
          divider={<Divider orientation="vertical" flexItem />}
        >
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
            href="https://www.stayforaninstant.com/ifm-contributor-portfolios/project-one-ephnc-4xxmy-yffxd" 
            target="_blank"
            rel="noopener"
            sx={{ backgroundColor: "primary.light" }}
          >
            The Instant Film Magazine
          </Button>
        </Stack>
      </Box>
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="body">
          For bookings or other professional inquiries, please contact me via e-mail:
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          {result ? 
            <Typography>{result}</Typography>
          :
            <form onSubmit={onSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                required
                variant="standard"
              />
              <br/>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                variant="standard"
                sx={{ marginTop: 2}}
              />
              <Input 
                name="message"
                placeholder="Message"
                required
                fullWidth
                multiline
                variant="standard"
                sx={{ marginTop: 2}}
              >
              </Input>
              <Button
                type="submit"
                variant="text"
                color="inherit"
                size="large"
                startIcon={<EmailOutlinedIcon />}
                sx={{ backgroundColor: "primary.light", marginTop: 2 }}
              >
                Send
              </Button>
            </form>
          }
        </Box>
      </Box>
    </Container>
  )
}

export default Contact