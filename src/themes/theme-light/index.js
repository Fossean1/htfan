import { createTheme } from "@mui/material";
import { deepmerge } from '@mui/utils';

import themeDefault from '../theme-default'
import colors from './base/colors'
import { pxToRem } from '../utils/convert'

const themeLight = createTheme(deepmerge({
    palette: { ...colors },
    functions: {
        pxToRem,
    },
    borders: {
        borderColor: '#dedede',
    }
}, themeDefault))

export default themeLight