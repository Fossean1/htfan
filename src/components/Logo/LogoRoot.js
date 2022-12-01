import { Typography } from "@mui/material"
import { styled } from "@mui/material"

const LogoStyle = styled(Typography)(({ theme }) => ({
    color: 'inherit',
    textDecoration: 'none',
    fontWeight: 700,
    display: 'inline-block',
}));

export default LogoStyle