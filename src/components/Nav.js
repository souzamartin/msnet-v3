import { AppBar, Toolbar, Stack } from "@mui/material"
import NavButton from "./NavButton"

function Nav() {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar sx={{ flexGrow: 0, justifyContent: 'center' }}>
                <Stack direction="row" spacing={2}>
                    <NavButton to="/" label="Main" />
                    <NavButton to="/about" label="About" />
                    <NavButton to="/work" label="Work" />
                    <NavButton to="/services" label="Services" />
                    <NavButton to="/contact" label="Contact" />
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Nav