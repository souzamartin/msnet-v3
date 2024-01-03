import { Card, CardContent, Typography } from "@mui/material"

function WorkCard({proj}) {
    return (
        <Card variant="outlined" sx={{ backgroundColor: "primary.light", maxWidth: "90%", minWidth: "90%" }}>
            <CardContent>
                <Typography variant="h6">{proj.name}</Typography>
                <Typography variant="body">{proj.desc}</Typography>
            </CardContent>
        </Card>
    )
}

export default WorkCard