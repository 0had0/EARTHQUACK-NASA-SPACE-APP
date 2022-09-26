import {useNavigate} from "react-router";

import {Box, Button, Container, Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors";

import Starscape from "./components/Starscape";

function LandingPage() {
    const navigate = useNavigate()
    return <Box sx={{overflow: 'hidden',backgroundColor: deepPurple[900]}}>
        <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
        }}><Starscape/></Box>
        <Box sx={{overflow: 'hidden', zIndex: 2}}>
            <Container
                sx={{display: 'flex', flexDirection: 'row', height: '100vh', alignItems: 'center',}}>
                <Box sx={{width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    <Typography sx={{maxWidth: '300px', fontFamily: "Erica One", fontWeight: 400, color: '#fff'}}
                                variant="h1">We
                        bring space to your screen!</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1
                }}>
                    <Button size={'large'} variant={'contained'} sx={{
                        width: 150,
                        backgroundColor: '#fff',
                        color: deepPurple[900],
                        '&:hover': {
                            color: deepPurple[900],
                            backgroundColor: '#fff',
                        }
                    }}
                            onClick={() => navigate('/glob')}
                    >
                        Start 🦆
                    </Button>
                    <Box sx={{position: 'relative'}}>
                        <Box sx={{
                            position: 'absolute',
                            top: 40,
                            left: -50,
                            width: '500px',
                            height: '500px',
                            borderRadius: '50%',
                            backgroundColor: '#fff'
                        }}/>
                    </Box>
                </Box>
            </Container>
        </Box>
    </Box>
}

export default LandingPage