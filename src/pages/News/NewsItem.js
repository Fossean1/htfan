import { Box, Typography } from '@mui/material'
import { NewsItemHeader } from '../../components/Cards'

const NewsItem = () => {
    return (
        <>
            <Box 
                sx={{
                    maxWidth: '800px',
                }}
            >
                <NewsItemHeader title={'Aliquip ea adipisicing anim'} src={'https://cdn.kanobu.ru/screenshots/0/cf69829c-3b51-4381-bcf0-0a6d5462ad04.JPG'} />
                <Typography
                    variant='body1'
                    sx={{
                        marginTop: '15px',
                    }} 
                >
                    Amet non et eu ut officia. Consectetur cillum veniam enim enim occaecat eu do eiusmod. Nostrud ullamco tempor cillum ad laboris nulla enim excepteur consectetur eu. Tempor pariatur consectetur labore eu sunt aliquip non pariatur. Consequat magna ad ad excepteur mollit in ad eu aliqua occaecat ex. Eu et id ullamco proident nulla deserunt ullamco ad id commodo tempor aliqua.

                    Irure qui cillum proident tempor dolore aliqua labore aliquip id magna labore consectetur. Anim laboris fugiat mollit elit duis dolor sunt quis eiusmod dolore. Nisi ut velit cupidatat mollit reprehenderit. Occaecat aute id velit laboris quis elit aliquip dolor dolore excepteur ex do. Laboris eu in laboris reprehenderit minim.

                    Proident sunt excepteur officia voluptate deserunt adipisicing aliqua eiusmod aliquip nostrud nulla esse deserunt. Id amet anim voluptate nostrud qui aliqua sint labore dolore. Pariatur officia aliquip et ea sunt dolore et cupidatat ipsum commodo. Do incididunt occaecat nisi est. Sint adipisicing pariatur mollit eiusmod et culpa id exercitation fugiat cupidatat ad nisi.

                    Esse aliquip laboris non nisi irure ea eiusmod nulla laboris officia aute. Ullamco Lorem minim sunt ipsum mollit dolore consectetur culpa minim elit ea laboris. Do id incididunt ullamco est reprehenderit nisi sunt. Amet aute Lorem in eiusmod labore. Aute non commodo excepteur non sunt. Laborum et velit fugiat deserunt mollit incididunt eiusmod nisi.

                    Ex pariatur consequat voluptate elit ut dolore magna voluptate labore fugiat nisi. Esse id ullamco adipisicing ullamco. Veniam sit ut sit laborum reprehenderit laboris ipsum irure est.

                    Do commodo cupidatat occaecat eiusmod enim pariatur cupidatat nulla deserunt qui voluptate. Culpa nulla ex in enim laboris nostrud Lorem mollit officia exercitation. Consequat nostrud dolore laboris esse. Dolore cillum non elit et tempor laborum ex ea nostrud amet. Dolor consectetur magna dolore nostrud reprehenderit et.

                    In reprehenderit est id voluptate sunt irure. Esse reprehenderit magna nostrud sint proident officia. Commodo laborum fugiat adipisicing ad tempor minim nulla reprehenderit. Adipisicing labore elit exercitation ad velit consectetur excepteur sunt veniam eiusmod labore amet aliqua. Dolore pariatur culpa proident magna magna Lorem nulla consequat qui esse consectetur tempor. Nulla nisi sit magna pariatur dolor. Consectetur sunt duis eiusmod nostrud incididunt est deserunt cupidatat pariatur minim.
                </Typography>
            </Box>
        </>
    )
}

export default NewsItem