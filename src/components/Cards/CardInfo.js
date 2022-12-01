import { Typography, Box, useTheme } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';

const CardInfo = ({date, views, color, sx}) => {
    return (
        <>
            <Typography variant="caption" color={color} sx={{...sx, display: 'flex', justifyContent: 'space-between'}}>
                <Box component='span'>
                    {date}
                </Box>
                <Box component='span' sx={{
                    display: 'flex',
                    columnGap: 0.3,
                }}>
                    <VisibilityIcon sx={{fontSize: 15, verticalAlign: 'middle'}} />
                    {views}
                </Box>
            </Typography>
        </>
    )
}

CardInfo.defaultProps = {
    color: 'text.info',
}

export default CardInfo