import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

import {GlobProvider} from "../../../contexts/glob.context";

import SideBar from "../SideBar/SideBar";

const GlobLayout = () => {
    return (
        <GlobProvider>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <SideBar/>
                <Outlet/>
            </Box>
        </GlobProvider>
    )
}

export default GlobLayout