/* eslint-disable */
import {Box, List, ListItem, ListItemText, ListSubheader} from "@mui/material";

import {apollo, lunar} from '../../../screens/InteractiveGlob/string'
import NounApollo from '../../../screens/InteractiveGlob/noun-apollo.svg';
import NounLuna from '../../../screens/InteractiveGlob/noun-lunar.svg';

const spacecrafts = [
    {
        label: 'Apollo', color: '', description: '', icon: NounApollo
    },
    {label: 'Luna', color: '', description: '', icon:  NounLuna},
    {label: "Chan'ge", color: '', description: '', icon:  NounLuna},
]

const moonQuakes = [
    {label: 'Deep moonquake', color: 'rgba(255, 0, 0, 1)', description: '', icon: ''},
    {label: 'Shallow Moonquake', color: 'rgba(0, 120, 0, 1)', description: '', icon: ''},
    {label: "Artificial Impact Arrivals", color: 'rgba(0, 0, 255, 1)', description: '', icon: ''},
]

function LegendItem({id, data}) {
    const Icon = data.icon;
    return <ListItem sx={{zIndex: 999, backgroundColor: 'rgba(255, 255, 255, 0.16)'}} >
        <ListItemText id={id} primary={data?.label ?? ''} secondary={data?.description?? ''} sx={{color: '#fff'}}/>
        {!!data.icon ? <img width={32} height={32} color={'#fff'} src={data.icon} /> : <Box sx={{width: 16, height: 16, backgroundColor: data.color}} />}
    </ListItem>
}

function Legend() {
    return <Box sx={{minWidth: '300px'}}>
        <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'transparent'}}
            subheader={<ListSubheader>Legend</ListSubheader>}
        >
            {spacecrafts.map((option, index) => <LegendItem key={index + 1} id={index}
                                                     data={option}/>)}
            {moonQuakes.map((option, index) => <LegendItem key={index + spacecrafts.length} id={index}
                                                     data={option}/>)}
        </List>
    </Box>
}

export default Legend
