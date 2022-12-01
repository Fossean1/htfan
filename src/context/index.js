import { createContext, useMemo, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { themeLight, themeDark } from '../themes'

export const ModeContext = createContext({ toggleColorMode: () => {} })

export const ModeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            }
        }),
        []
    )

    const theme = useMemo(
        () => mode === 'light' ? themeDark : themeLight,
        [mode]
    );

    return (
        <>
            <ModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </ModeContext.Provider>
        </>
    )
}