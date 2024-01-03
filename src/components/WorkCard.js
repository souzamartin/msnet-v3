import { useState } from "react"
import { Card, CardContent, Typography, Modal, Box } from "@mui/material"

function WorkCard({proj}) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Card
                variant="outlined"
                sx={{ 
                    backgroundColor: "primary.light",
                    maxWidth: "90%",
                    minWidth: "90%",
                    ':hover': {boxShadow: 5}
                }}
                onClick={handleOpen}
                >
                <CardContent>
                    <Typography variant="h6">{proj.name}</Typography>
                    <Typography variant="body">{proj.desc}</Typography>
                </CardContent>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "75%",
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    outline: 0
                    }}
                >
                    <Typography variant="h6">{proj.name}</Typography>
                    <Typography variant="body">{proj.desc}</Typography>
                </Box>
            </Modal>
        </>
    )
}

export default WorkCard