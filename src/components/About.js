import { Container, Typography, Box, Link } from "@mui/material"
import Image from "mui-image"
import pola from "../img/pola.gif"
import sword from "../img/sword.gif"
import nycgb from "../img/nycgb.gif"

function About() {
  return (
    <Container>
      <Typography variant="body">
        My relationship with Polaroid photography began mere moments after my birth, when my father took the very first pictures of me with his SX-70. Many years later, he lent me that same camera, long out of use and in need of repair. In the course of having it restored and beginning to learn how to us it, I connected with the instant photography community here in New York City and beyond, especially through my association with the <Link 
          href="https://www.instantfilmsociety.org/" 
          target="_blank"
          rel="noopener"
          variant="inherit" 
          color="inherit"
        >
          Instant Film Society
        </Link>.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3, marginBottom: 3 }}>
        <Image src={pola} />
      </Box>
      <Typography variant="body">
        Approaching this unique kind of photography without preconceptions or preexisting habits from other types of photographic practice, I acquired specialized skills and niche knowledge related to Polaroid film and cameras, and cultivated the very particular and often intuitive aptitude required to use the medium effectively. I also developed an appreciation for the essential physicality of the integral film image as an object, each a unique and irreproducible artifact of the moment it was taken. In the process, I became very fond of the unpredictable effects and imperfections that frequently occur in Polaroid images as a result of photochemical defects, environmental conditions, and other happy accidents.
        <br />
        <br />
        In my view, these qualities are the medium's strengths, and constitute precisely what appeals to people about this particular analog technology in our era of digital hyperreality. Polaroid's uniqueness, unpredictability, and imperfection are constraints that engender creativity, thereby providing artistic opportunity and surprise.
        <br/>
        <br/>
        I established my professional Polaroid practice, <b>Polatronic Studio</b>, both to offer my servics as a specialist Polaroid photographer for hire and to encourage and facilitate others' exploration and experimentation with the medium—regardless of other photographic or artistic experience.
        <br/>
        <br/>
        Before I ever picked up a camera, I learned abount controlled movement and finding the moment of decision from wielding a different instrument. Since 2001, I've practiced kenjutsu, a type of Japanese-style swordplay, which I taught for five years at Reed College. More recently, I began studying Highland broadsword, the fencing technique of Scotland in the 18th century. When the time is right, I look forward to teaching sword arts again.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3, marginBottom: 3 }}>
        <Image src={sword} />
      </Box>
      <Typography variant="body">
        Besides my artistic pursuits, I'm also on the board of directors of the <Link 
          href="https://nycghostbusters.com" 
          target="_blank"
          rel="noopener"
          variant="inherit" 
          color="inherit"
        >
          New York City Ghostbusters
        </Link>, a volunteer-operated 501(c)(3) nonprofit that offers costumed event appearances and filming location tours to benefit local charitable causes.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3, marginBottom: 3 }}>
        <Image src={nycgb} />
      </Box>
    </Container>
  )
}

export default About