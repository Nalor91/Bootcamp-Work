async function loadConfig() {
    const appliedTheme = await import("./theme.mjs");
    
    const currentTime = new Date().getHours();
    if (currentTime >= 6 && currentTime < 18) {
        return appliedTheme.lightTheme();
    } else {
        return appliedTheme.darkTheme();
    }
}

loadConfig();