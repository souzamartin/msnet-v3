import { AppBar, Toolbar, Stack } from "@mui/material"
import NavButton from "./NavButton"

function Nav() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Stack spacing={2} direction="row">
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