import { useLocation, NavLink } from "react-router-dom"
import { Button } from "@mui/material"

function NavButton({to, label}) {
    const location = useLocation()
    
    return (
        <Button 
            component={NavLink}
            color="inherit"
            to={to} 
            variant={to === location.pathname ? "outlined" : "contained"}
            disableElevation
        >
            {label}
        </Button>
    )
}

export default NavButton