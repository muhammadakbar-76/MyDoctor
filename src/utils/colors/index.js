const mainColor = {
    green1: "#0BCAD4",
    green2: "#EDFCFD",
    dark1: "#112340",
    dark2: "#495A75",
    dark3: "#8092AF",
    grey1: "#7D8797",
    grey2: "#E9E9E9",
    grey3: "#B1B7C2",
    grey4: "#EDEEF0",
    blue1: "#0066CB"
}

export const color = {
    primary: mainColor.green1,
    secondary: mainColor.dark1,
    tertiary: mainColor.blue1,
    white: "white",
    black: "black",
    text: {
        primary: mainColor.dark1,
        secondary: mainColor.grey1,
        menuInactive: mainColor.dark2,
        menuActive: mainColor.green1,
        formInput: mainColor.grey4
    },
    button: {
        primary: {
            background: mainColor.green1,
            text: "white"
        },
        secondary: {
            background: "white",
            text: mainColor.dark1
        },
        disabled: {
            background: mainColor.grey4,
            text: mainColor.grey3
        },
        darkInput: {
            background: mainColor.blue1,
            text: "white"
        }
    },
    border: mainColor.grey2,
    cardLight: mainColor.green2,
    profesi: mainColor.dark3
}