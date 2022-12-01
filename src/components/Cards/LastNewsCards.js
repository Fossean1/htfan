import Grid from '@mui/material/Unstable_Grid2';
import LastNewsCard from "./LastNewsCard"


const LastNewsCards = ({children}) => {
    return (
        <>
            <Grid container spacing={4}>
                {/* { children.map((card, idx) => (
                    card
                ))} */}
                <Grid xs={12} sm={6} lg={4}>
                    <LastNewsCard />
                </Grid>
                <Grid xs={12} sm={6} lg={4}>
                    <LastNewsCard />
                </Grid>
                <Grid xs={12} sm={6} lg={4}>
                    <LastNewsCard />
                </Grid>
            </Grid>
        </>
    )
}

export default LastNewsCards