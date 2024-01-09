const primaryColors = {
    peach: '#E7816B',
    black: '#1D1C1E',
    white: '#FFFFFF',
}

const secondaryColors = {
    lightPeach: '#FFAD9B',
    lighterPeach: '#FDF3F0',
    darkGrey: '#333136',
    lightGrey: '#F1F3F5',
}

const theme = {
    primaryColors,
    secondaryColors,
    buttonOnLight: {
        backgroundColor: primaryColors.peach,
        color: primaryColors.white,
    },
    buttonOnLightHover: {
        backgroundColor: secondaryColors.lightPeach,
        color: primaryColors.white,
    },
    buttonOnDark: {
        backgroundColor: primaryColors.white,
        color: secondaryColors.darkGrey,
    },
    buttonOnDarkHover: {
        backgroundColor: secondaryColors.lightPeach,
        color: primaryColors.white,
    },
    navHeader: {
        color: secondaryColors.darkGrey,
    },
    navHeaderHover: {
        textDecoration: `underline 0.5px solid ${secondaryColors.darkGrey}`,
    },
    navFooter: {
        color: secondaryColors.lightGrey,
    },
    navFooterHover: {
        textDecoration: `underline 0.5px solid ${secondaryColors.lightGrey}`,
    },
    
}

export default theme