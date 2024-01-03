import { useState } from "react"
import { Card, CardContent, Typography, Modal, Box, Link } from "@mui/material"

function WorkCard({proj}) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const modalStyle = {
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
    }

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

            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    <Typography variant="h5">{proj.name}</Typography>
                    {proj.link ? 
                        <Typography variant="button">App: <Link
                                href={proj.link.url}
                                target="_blank"
                                rel="noopener"
                                variant="inherit" 
                                color="inherit"
                            >
                                {proj.link.label}
                            </Link>
                        </Typography>
                    : null}
                    {proj.demo ?
                        <Typography variant="button">Demo: <Link
                                href={proj.demo.url}
                                target="_blank"
                                rel="noopener"
                                variant="inherit" 
                                color="inherit"
                            >
                                {proj.demo.label}
                            </Link>
                        </Typography>
                    : null}
                    <Box>
                        <Typography variant="button">Repository: <Link
                                href={proj.repo}
                                target="_blank"
                                rel="noopener"
                                variant="inherit" 
                                color="inherit"
                                >
                                GitHub
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 1 }}>
                        <Typography variant="body">{proj.desc}</Typography>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default WorkCard