import { forwardRef } from "react";
import { NavLink as NavLinkBase } from "react-router-dom";
import { styled } from "@mui/system";

const NavLink = styled(forwardRef((props, ref) => (
    <NavLinkBase {...props} end={props.to === '/'} ref={ref} />
  )))(({theme}) => {
    return { 
      '&.active, &.active .MuiTypography-root': {
        fontWeight: 900,
      }
    }
  });

export default NavLink