import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

import {GlobProvider} from "../../../contexts/glob.context";

import SideBar from "../SideBar/SideBar";

const GlobLayout = () => {
    return (
        <GlobProvider>
            <Box sx={{position: 'relative'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', position: 'absolute', top: 0, left: 0, minHeight: 200 }}>
                <SideBar/>
            </Box>
                <Outlet/>
            </Box>
        </GlobProvider>
    )
}

export default GlobLayout
