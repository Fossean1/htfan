import Box from "@mui/material/Box"
import Logo from "../Logo"

const Footer = () => {
    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: '30px',
            }}
        >
            <Logo />
        </Box>
    )
}

export default Footer