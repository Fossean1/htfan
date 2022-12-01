import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

import HeroImg from '../assets/images/hero.jpg'

const Home = () => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    minHeight: 500,
                    py: 10,
                    borderRadius: theme => theme.borders.borderRadius.medium,
                    backgroundPosition: 'center',
                }}>
                <Typography variant="h4" component={'h1'}
                    sx={{
                        margin: 'auto',
                        textAlign: 'center',
                    }}
                >Добро пожаловать на фэндом по Hytale!</Typography>
            </Box>
        </>
    )
}

export default Home