/* eslint-disable */
import {Box, List, ListItem, ListItemButton, ListItemText, Collapse} from "@mui/material";
import NounApollo from '../../../screens/InteractiveGlob/noun-apollo.svg';
import NounLuna from '../../../screens/InteractiveGlob/noun-lunar.svg';
import NounChange from '../../../screens/InteractiveGlob/noun-change.svg';
import {useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

const spacecrafts = [
    {
        label: 'Apollo', color: '', description: '', icon: NounApollo
    },
    {label: 'Luna', color: '', description: '', icon: NounLuna},
    {label: "Chan'ge", color: '', description: '', icon: NounChange},
]

const moonQuakes = [
    {label: 'Deep moonquake', color: 'rgba(255, 0, 0, 1)', description: 'color opacity varies with depth', icon: ''},
    {
        label: 'Shallow Moonquake',
        color: 'rgba(0, 120, 0, 1)',
        description: 'radius varies with detected wave magnitude',
        icon: ''
    },
    {label: "Artificial Impact Arrivals", color: 'rgba(0, 0, 255, 1)', description: '', icon: ''},
]

function LegendItem({id, data}) {
    return <ListItem sx={{zIndex: 999, backgroundColor: 'rgba(255, 255, 255, 0.25)'}}>
        <ListItemText secondaryTypographyProps={{sx: {maxWidth: 200, color: 'rgba(255, 255, 255, 0.8)'}}} id={id}
                      primary={data?.label ?? ''} secondary={data?.description ?? ''} sx={{color: '#fff'}}/>
        {!!data.icon ? <img width={32} height={32} src={data.icon}/> :
            <Box sx={{borderRadius: '50%', width: 16, height: 16, backgroundColor: data.color}}/>}
    </ListItem>
}

function Legend() {
    const [open, setOpen] = useState(true)
    return <Box sx={{minWidth: '300px'}}>
        <List
            sx={{width: '100%', maxWidth: 360, bgcolor: 'transparent'}}
        >
            <ListItemButton sx={{backgroundColor: '#fff', '&:hover': {backgroundColor: '#fff',}}} onClick={() => {
                setOpen(!open)
            }
            }>
                <ListItemText primary="Legend"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {spacecrafts.map((option, index) => <LegendItem key={index + 1000} id={index}
                                                                    data={option}/>)}
                    {moonQuakes.map((option, index) => <LegendItem key={index + spacecrafts.length+ 10000} id={index}
                                                                   data={option}/>)}
                </List>
            </Collapse>
        </List>
    </Box>
}

export default Legend
