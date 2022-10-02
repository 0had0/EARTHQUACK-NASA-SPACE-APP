import {useContext, useState} from "react";
import {Box, Collapse, List, ListItem, ListItemButton, ListItemText, Switch} from "@mui/material";

import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {GlobContext} from "../../../contexts/glob.context";

function OptionItem({id, data, dispatch}) {
    return <ListItem sx={{zIndex: 999, backgroundColor: 'rgba(255, 255, 255, 0.16)'}}>
        <ListItemText id={id} primary={data.label} sx={{color: '#fff'}}/>
        <Switch
            edge="end"
            onChange={() => dispatch({index: id, payload: !data.value})}
            checked={!!data.value}
        />
    </ListItem>
}

function SideBar() {
    const [open, setOpen] = useState(true)
    const {options, dispatch} = useContext(GlobContext)
    return <Box sx={{minWidth: '300px'}}>
        <List
            sx={{width: '100%', maxWidth: 360, bgcolor: 'transparent'}}
        >
            <ListItemButton sx={{zIndex: 99999, backgroundColor: '#fff', '&:hover': {backgroundColor: '#fff',}}} onClick={() => {
                setOpen(!open)
            }
            }>
                <ListItemText primary="Options"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {options.map((option, index) =>
                        <OptionItem
                            dispatch={dispatch}
                            key={index + 1}
                            id={index}
                            data={option}/>
                    )}
                </List>
            </Collapse>
        </List>
    </Box>
}

export default SideBar
