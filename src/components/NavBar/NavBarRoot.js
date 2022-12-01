import { AppBar } from "@mui/material";
import { styled } from "@mui/system";

export default styled(AppBar)(({ theme }) => ({
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.navBar,
    backgroundImage: 'none',
    backdropFilter: "blur(10px)",
}));
