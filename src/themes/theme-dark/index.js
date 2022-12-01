import { createTheme } from "@mui/material";
import { deepmerge } from '@mui/utils';

import colors from './base/colors'
import { pxToRem } from '../utils/convert'
import themeDefault from "../theme-default";

export default createTheme(deepmerge({
    palette: { ...colors },
    functions: {
        pxToRem,
    },
    borders: {
        borderColor: '#323232',
    }
}, themeDefault))