import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

import CardStyled from './CardStyled';
import CardInfo from './CardInfo';

import theme from '../../themes/theme-dark'
import { Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const CardContentStyle = styled(CardContent)(({ theme }) => {
    return {
        position: 'relative',
        height: '100%',
    }
})

const TrendCard = () => {
    const params = useParams()

    const { palette } = theme
    const { text } = palette
    return (
        <CardStyled sx={{ 
            maxWidth: 600,
            minHeight: 300,
            display: 'flex',
            flexDirection: 'column',
        }}>
            <CardActionArea 
                component={Link}
                to={'12'}
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'start', 
                 }}
            >
                <CardMedia
                    component="img"
                    image="https://cdn.kanobu.ru/screenshots/0/cf69829c-3b51-4381-bcf0-0a6d5462ad04.JPG"
                    alt="Card image"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        height: '100%',
                        filter: 'brightness(0.45)',
                    }}
                />
                <CardContentStyle 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginTop: '90px',
                        flexGrow: 1,
                        rowGap: '10px',
                    }}>
                    <Box>
                        <Typography gutterBottom variant="h5" component="div" color={text.primary}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                        </Typography>
                        <Typography gutterBottom variant="body2" color={text.secondary}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </Box>
                    <Box>
                        <CardInfo date={'20 июн 2022'} views={312} />
                    </Box>
                </CardContentStyle>
            </CardActionArea>
        </CardStyled>
    )
}

export default TrendCard