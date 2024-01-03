import { Card, CardContent, Typography } from "@mui/material"

function WorkCard({proj}) {
    return (
        <Card variant="outlined" sx={{ backgroundColor: "primary.light", marginBottom: 1 }}>
            <CardContent>
                <Typography variant="h6">{proj.name}</Typography>
            </CardContent>
        </Card>
    )
}

export default WorkCard