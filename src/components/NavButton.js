import { useLocation, NavLink } from "react-router-dom"
import { Button } from "@mui/material"

function NavButton({to, label}) {
    const location = useLocation()

    return (
        <Button 
            component={NavLink} 
            to={to} 
            variant="contained"
            selected={to === location.pathname}
            >
            {label}
        </Button>
    )
}

export default NavButton