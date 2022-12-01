import Box from "@mui/material/Box"
import CardInfo from "../Cards/CardInfo"
import Title from "../Title"

const NewsItemHeader = ({title, src}) => {
    return (
        <>
            <Title>{title}</Title>
            <Box
                component='header'
                sx={{
                    width: 1,
                    maxWidth: '800px',
                    height: 1,
                }}
                
            >
                <Box
                    component='img' 
                    src={src}
                    sx={{
                        width: 1,
                        height: 1,
                        borderRadius: theme => theme.borders.borderRadius.medium,
                    }}
                />
                <CardInfo date={'20 июл 2022'} views={230} 
                    sx={{
                        px: '9px',
                    }} 
                />
            </Box>
        </>
    )
}

export default NewsItemHeader