const pxToRem = (pixel, baseNumber = 16) => {
    return `${pixel / baseNumber}rem`
}

export { pxToRem }