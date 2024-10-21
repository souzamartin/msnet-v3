import { Container, Typography, Box, Link } from "@mui/material"
import Image from "mui-image"
import pola from "../img/pola.gif"
import calligraphy from "../img/calligraphy.gif"
import sword from "../img/sword.gif"
import nycgb from "../img/nycgb.gif"

function About() {
  return (
    <Container>
      <Typography variant="body">
        My relationship with Polaroid photography began mere moments after my birth, when my father took the first pictures of me with his SX-70. Many years later, he gave me that very camera, long out of use and in need of repair. In the course of having it restored and beginning to learn how to us it, I connected with the instant photography community here in New York City and beyond, especially through my association with the <Link 
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
        lalala
        <br/>
        <br/>
        My interest in words extends to the aesthetics of their form as well. I practice calligraphy, both in my own peculiar English hand, and in Chinese.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3, marginBottom: 3 }}>
        <Image src={calligraphy} />
      </Box>
      <Typography variant="body">
        I also supplement the pen with the sword. Since 2001, I've practiced kenjutsu, a type of Japanese-style swordplay, which I taught for five years at Reed College. More recently, I began studying Highland broadsword, the fencing technique of Scotland in the 18th century. When the time is right, I look forward to teaching sword arts again.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3, marginBottom: 3 }}>
        <Image src={sword} />
      </Box>
      <Typography variant="body">
        I'm also a member of the board of directors of the <Link 
          href="https://nycghostbusters.com" 
          target="_blank"
          rel="noopener"
          variant="inherit" 
          color="inherit"
        >
          New York City Ghostbusters
        </Link>.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3, marginBottom: 3 }}>
        <Image src={nycgb} />
      </Box>
    </Container>
  )
}

export default About