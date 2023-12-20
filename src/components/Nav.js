import { AppBar, Toolbar, Stack } from "@mui/material"
import NavButton from "./NavButton"

function Nav() {
    return (
        <AppBar position="static" color="inherit">
            <Toolbar sx={{ flexGrow: 0, justifyContent: 'center' }}>
                <Stack direction="row" spacing={2}>
                    <NavButton to="/" label="Main" />
                    <NavButton to="/about" label="About" />
                    <NavButton to="/work" label="Work" />
                    <NavButton to="/contact" label="Contact" />
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Nav