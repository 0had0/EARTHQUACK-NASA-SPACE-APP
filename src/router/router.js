/* eslint-disable */
import {Navigate} from "react-router";

import LandingPage from "../screens/LandingPage/LandingPage";
import InteractiveGlob from "../screens/InteractiveGlob/InteractiveGlob";
import HeaderLayout from "./components/Layout/HeaderLayout";
import GlobLayout from "./components/Layout/GlobLayout";

export default [
    {
        path: "*",
        element: <HeaderLayout/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            },
            {
                path: 'glob',
                element: <GlobLayout/>,
                children: [
                    {
                        index: true,
                        element: <InteractiveGlob/>
                    }
                ]
            },
            {
                path: '*',
                element: <Navigate to="/" replace/>
            }
        ]
    }
]