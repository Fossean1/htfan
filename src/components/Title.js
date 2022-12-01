import { Typography } from "@mui/material"

const Title = (props) => {
    return (
        <Typography variant='h4' component='h1' gutterBottom {...props} sx={{ ...props.sx }}>
            {props.children}
        </Typography>
    )
}

export default Title