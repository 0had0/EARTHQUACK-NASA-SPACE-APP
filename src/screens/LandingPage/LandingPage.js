/* eslint-disable */
import {useNavigate} from "react-router";

import {Box, Button, Container, Typography} from "@mui/material";

import VideoPlayer from "react-background-video-player";

import {East} from "@mui/icons-material";

function LandingPage() {
    const navigate = useNavigate()
    return <Box sx={{overflow: 'hidden',}}>
        <VideoPlayer
            className="video"
            src={
              "https://res.cloudinary.com/had0o/video/upload/v1664616845/stockfootage0752_1_vvss6x.mp4"
            }
            autoPlay={true}
            muted={true}
          />
        <Box sx={{overflow: 'hidden', zIndex: 2}}>
            <Container
                sx={{display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{ fontFamily: "Erica One", fontWeight: 400, color: '#fff', zIndex: 2, textAlign: 'center'}}
                                variant="h1">We
                        Bring The Moon To You!</Typography>
                <Button size={'large'} variant={'outlined'} sx={{ my: 4, borderColor: 'white', color: 'white', '&:hover': {
                backgroundColor: 'white', color: 'black', borderColor: 'white'}
                }}
                            onClick={() => navigate('/glob')}
                        endIcon={<East />}
                    >
                        Launch
                    </Button>
            </Container>
        </Box>
    </Box>
}

export default LandingPage
