import React from "react";
import { create } from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset, ThemeProvider} from '@material-ui/core/styles';
import {createMuiTheme} from "@material-ui/core";
import Routing from "./utils/Routing";

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});
const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#333',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#E6EEFB',
        },
    },
    direction: 'rtl',
    typography: {
        fontFamily: 'IRANSans'
    }
});

function App() {
    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <Routing/>
            </ThemeProvider>
        </StylesProvider>
    );
}

export default App;
