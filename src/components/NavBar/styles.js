export const hamburgerIconStyle = (theme) => {
    const { palette } = theme
    return {
        color: palette.mode === 'light' ? palette.dark.main : palette.white.main
    }
}

export const navLinkStyle = (theme) => ({
    color: 'inherit',
})