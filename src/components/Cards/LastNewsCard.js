import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import CardStyled from './CardStyled';
import CardInfo from './CardInfo';

const LastNewsCard = () => {
    return (
        <CardStyled>
            <CardActionArea>
                    <CardMedia    
                        component="img"
                        height="190"
                        image="https://cdn.kanobu.ru/screenshots/0/cf69829c-3b51-4381-bcf0-0a6d5462ad04.JPG"
                        alt="card image"
                        sx={{
                            filter: 'brightness(0.7)',
                        }} 
                    />
                    <CardContent 
                        sx={{height: 1}}
                    >
                        <Typography gutterBottom variant="h5">
                            Lizard
                        </Typography>
                        <CardInfo date={'20 июн 2022'} views={412} />
                    </CardContent>
            </CardActionArea>
        </CardStyled>
    )
}

export default LastNewsCard