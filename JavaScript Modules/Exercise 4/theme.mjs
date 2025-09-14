let theme = null;

export const lightTheme = () => {

    theme = "Light";
    console.log("Switched to Light Theme");
    return {
        background: "#ffffff",
        color: "#000000"
    };
};

export const darkTheme = () => {
    theme = "Dark";
    console.log("Switched to Dark Theme");
    return {
        background: "#000000",
        color: "#ffffff"
    };
};
