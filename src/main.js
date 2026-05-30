const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
    const window = new BrowserWindow({
        width: 980,
        height: 720,
        minWidth: 720,
        minHeight: 520,
        title: "Случайная картинка",
        backgroundColor: "#f6f6f6",
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    window.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
    Menu.setApplicationMenu(null);
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
