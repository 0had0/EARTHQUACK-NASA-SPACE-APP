/* eslint-disable */
import {Box, Typography} from "@mui/material";

const sources = [
    {src: `https://res.cloudinary.com/had0o/image/upload/v1664718967/Apollo12_rch9uc.png`, text: 'Average Wave Arrival Time to Apollo 12'},
    {src: `https://res.cloudinary.com/had0o/image/upload/v1664718967/Apollo14_jbvewk.png`, text: 'Average Wave Arrival Time to Apollo 14'},
    {src: `https://res.cloudinary.com/had0o/image/upload/v1664718967/Apollo15_jrwjgk.png`, text: 'Average Wave Arrival Time to Apollo 15'},
    {src: `https://res.cloudinary.com/had0o/image/upload/v1664718967/Apollo16_f8njrp.png`, text: 'Average Wave Arrival Time to Apollo 16'}
]

function ImageWithDescription({src, text}) {
    return <Box py={2} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <img src={src} width={'50%'} height={'auto'} alt={'text'}/>
        <Typography>{text}</Typography>
    </Box>
}

function Graphs() {
    return <Box sx={{width: '100vw', minHeight: '100vh', overflowY: 'scroll'}}>
            {sources.map(({src, text}) => <ImageWithDescription src={src} text={text} />)}
    </Box>
}

export default Graphs
