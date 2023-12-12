import { NavLink} from "react-router-dom"
import { AppBar, Toolbar, Stack, Button } from "@mui/material"

function Nav() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Stack spacing={2} direction="row">
                    <Button component={NavLink} to="/" variant="contained">Main</Button>
                    <Button component={NavLink} to="/about" variant="contained">About</Button>
                    <Button component={NavLink} to="/work" variant="contained">Work</Button>
                    <Button component={NavLink} to="/contact" variant="contained">Contact</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Nav