import { app, BrowserWindow } from "electron";
import path from "path";

const devServer = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  const win = new BrowserWindow();

  if (devServer) {
    win.loadURL(devServer);
    return;
  }

  win.loadFile(path.join(__dirname, "../dist/index.html"));
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
