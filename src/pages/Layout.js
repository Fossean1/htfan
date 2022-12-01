import { Outlet } from "react-router-dom"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import { NavBar } from "../components"
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <>
            <Container maxWidth={false} disableGutters
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <NavBar />
                <Box
                    sx={{
                        flex: '1 1 auto',
                    }}
                >
                    <Container maxWidth='lg'
                        sx={{
                            paddingTop: '15px',
                            paddingBottom: '30px',
                        }}
                    >
                        <Outlet />
                    </Container>
                </Box>
                <Divider />
                <Footer />
            </Container>
        </>
    )

}

export default Layout