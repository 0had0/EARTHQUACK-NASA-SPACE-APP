import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router";
import {Modal} from "@mui/material";

const navItems = ['About us']

function Header() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    return <React.Fragment>
        <AppBar position="fixed" elevation={0} sx={{backgroundColor: 'transparent'}}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        display: {xs: 'none', sm: 'block'},
                        color: '#fff',
                        '&:hover': {cursor: 'pointer'}
                    }}
                    onClick={() => navigate('/')}
                >
                    EarthQuack
                </Typography>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    {navItems.map((item) => (
                        <Button key={item} sx={{color: '#fff'}} onClick={() => {
                            setOpen(true);
                        }}>
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
        <Toolbar/>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60%',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    About Us
                </Typography>
                <br/>
                <Typography id="modal-modal-description">
                    Formal Notes Presented Are Always Confusing, Not So Clear And Mostly Technical, So When You See
                    NASA’s News Or Others, You Wouldn’t Be Impressed To Read Or Give In So Much About It.
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    That’s Why We Created This User-Friendly, Simple Web-App, To Present You The Moon And The Moonquakes
                    That Happens On It, All With Ease, And Very Easy To Use. You Wouldn’t Need To Scroll Down Many
                    Articles To See What Actually Happened, You Could See It Right In Front Of You, Modeled In 3D, Swipe
                    Around It, Zoom In And Out On It, Check Many Aspects That You Want Or Don’t Want To See And Enjoy
                    Your Time.
                </Typography>
                <br/>
                <Typography>Web-App Features:</Typography>
                <Typography component={'ul'}>
                    {[
                        'Amazing Visuals',
                        'Interactive 3D Moon',
                        'Moon Landings',
                        'Different Moonquakes Occured',
                        'Moon Points And Coordinates'].map((txt) =>
                        <Typography key={txt}
                                    component={'li'}>{txt}</Typography>)}
                </Typography>
            </Box>
        </Modal>
    </React.Fragment>
}

export default Header
