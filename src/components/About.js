import { Container, Typography, Box, Link } from "@mui/material"
import Image from "mui-image"
import calligraphy from "../img/calligraphy.gif"
import sword from "../img/sword.gif"
import hobbies from "../img/hobbies.gif"

function About() {
  return (
    <Container>
      <Typography variant="body">
        My connection with computers is rooted in my early childhood, beginning with playing in HyperCard on a hand-me-down Mac Plus. Many years later, I set my mind to making a change of professional tack by learning to code. Intensive training at the Flatiron School laid the foundation of my technical skillset: I received a certification in full-stack software engineering using JavaScript, React, Ruby on Rails, and related tools and technologies.
        <br/>
        <br/>
        As a software engineer, I bring to bear exacting precision and meticulous attention to detail honed by years of experience in professional roles calling for clear writing, careful editing, and effective communication in a variety of contexts. I sharpened those abilities while composing, proofreading, and editing everything from SEO copy to legal documents to game narrative materials. These transferable skills serve me well in working with computer language just as they have with human language.
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
        I'm also a Polaroid photographer, and a member of the <Link 
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
        <Image src={hobbies} />
      </Box>
    </Container>
  )
}

export default About