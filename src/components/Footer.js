import { Box, Typography } from "@mui/material"

function Footer() {
    const year = new Date().getFullYear()
    
    return (
        <Box 
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, bgcolor: "primary.main" }}
            elevation={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Typography variant="overline" gutterBottom>Copyright © {year} Martin Souza</Typography>
        </Box>
    )
}

export default Footer