import Container from "@mui/material/Container";
import { Title, TrendCard } from "../../components"
import LastNewsCards from '../../components/Cards/LastNewsCards';

const NewsList = () => {
    return (
        <>
            <Title>В тренде</Title>
            <TrendCard />
            <Title variant='h5' component='h2' sx={{ marginTop: 2 }}>Последние новости</Title>
            <LastNewsCards />
        </>
    )
}

export default NewsList