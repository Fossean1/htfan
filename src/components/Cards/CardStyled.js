import styled from "@emotion/styled";
import { Card } from "@mui/material";

const CardStyled = styled(Card)(({theme}) => {
    const {borders} = theme
    const { borderColor, borderRadius, borderStyle, borderWidth } = borders
    return {
        width: '100%',
        boxShadow: 'none',
        borderColor: borderColor,
        borderStyle: borderStyle,
        borderRadius: borderRadius.medium,  
        borderWidth: borderWidth,
    }
})

export default CardStyled