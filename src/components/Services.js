import { Container, Typography, Link, Stack, Box } from "@mui/material"
import Image from "mui-image"
import sun660 from "../img/sun660.jpg"

function Services() {

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 1 }}>Services</Typography>
      <Typography variant="h5" sx={{ marginTop: 2 }}>Professional Polaroid Photography</Typography>
      <Typography variant="body">
        Whether to commemorate a special occasion, produce unique portraits (of humans or animal companions), or for an artistic shoot, I'm available as a specialist Polaroid photographer for hire. Whatever application of the Polaroid medium you have in mind, I'll work with you to accommodate your specific needs and goals, and create one-of-a-kind images for you using vintage Polaroid cameras.
      </Typography>

      <Typography variant="h5" sx={{ marginTop: 2 }}>Instruction</Typography>
      <Typography variant="body">
        I offer introductory instruction in operating Polaroid cameras and using Polaroid film as an art medium. My Polaroid 101 workshops, presented in collaboration with the <Link 
          href="https://www.instantfilmsociety.org/" 
          target="_blank"
          rel="noopener"
          variant="inherit" 
          color="inherit"
        >
          Instant Film Society
        </Link>, are intended for complete beginners or those curious about Polaroid photography. I'm also available for private group workshops and one-on-one lessons or practice sessions.
        <br/>
        <br/>
        Regardless of your experience with photography generally or instant photography specifically, I'm delighted to provide guidance at any stage of your Polaroid journey.
      </Typography>

      <Typography variant="h5" sx={{ marginTop: 2 }}>Vintage Camera Rental</Typography>
      <Typography variant="body">
        I maintain a collection of vintage Polaroid 600 cameras to rent on a flexible basis. To offer the best balance of versatility, ease of use, and affordability, my personally tested rental cameras all feature Polaroid's sonar autofocus technology. (See below for more information about these cameras.)
        <br/>
        <br/>
        If you'd like to rent a camera to shoot Polaroids at an event, I also offer event rental support packages, including film provision and onsite assistance to help you and your guests get the best results with your rented cameras.
        <br/>
        <br/>
        <i>Please note: to guarantee film availability, any camera rental including film supply must be booked at least one week in advance.</i>
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>About Rental Cameras</Typography>
      <Stack direction={{ xs: "column", sm: "row"}} spacing={3}>
        <Typography variant="body">
          My rental cameras are the popular Sun 660 Autofocus model, first introduced in 1981 (later versions of the same camera were given the new model name Supercolor 670 AF). One of the classic box-style cameras that became a ubiquitous icon of cool '80s technology, the 660 AF was a premium variant with a sonar autofocus module inherited from the higher-end SX-70 and SLR 680 cameras. This technology uses sound waves to measure the distance to the subject, and automatically adjusts the lens to capture a well-focused image. This feature gives the 660 AF better performance than other 600 box cameras, which are mostly fixed focus. It also has the ability to take pictures with or without using the built-in flash, making it one of the most versatile and best-performing cameras Polaroid ever produced.
        </Typography>
        <Box sx={{ minWidth: "20%" }}>
          <Image src={sun660} sx={{ borderStyle: "solid", borderWidth: 1 }} />
        </Box>
      </Stack>
    </Container>
  )
}

export default Services