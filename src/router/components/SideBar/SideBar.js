import {Box, List, ListItem, ListItemText, ListSubheader, Switch} from "@mui/material";
import {useContext} from "react";
import {GlobContext} from "../../../contexts/glob.context";

function OptionItem({id, data, dispatch}) {
    return <ListItem sx={{zIndex: 999, backgroundColor: 'rgba(255, 255, 255, 0.16)'}} >
        <ListItemText id={id} primary={data.label} sx={{color: '#fff'}}/>
        <Switch
            edge="end"
            onChange={() => dispatch({index: id, payload: !data.value})}
            checked={!!data.value}
        />
    </ListItem>
}

function SideBar() {
    const {options, dispatch} = useContext(GlobContext)
    return <Box sx={{minWidth: '300px'}}>
        <List
            sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
            subheader={<ListSubheader>Options</ListSubheader>}
        >{options.map((option, index) => <OptionItem dispatch={dispatch} key={index + 1} id={index}
                                                     data={option}/>)}</List>
    </Box>
}

export default SideBar
