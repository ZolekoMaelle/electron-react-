import require$$0 from "electron";
import require$$1 from "path";
import "fs";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var main$1 = {};
var hasRequiredMain;
function requireMain() {
  if (hasRequiredMain) return main$1;
  hasRequiredMain = 1;
  const { app, BrowserWindow } = require$$0;
  const path = require$$1;
  let mainWindow;
  const isDev = process.env.NODE_ENV === "development";
  const viteUrl = "http://localhost:5174";
  function createWindow() {
    mainWindow = new BrowserWindow({
      width: 1200,
      height: 800,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        webSecurity: false,
        sandbox: false
      },
      show: false
    });
    if (isDev) {
      const maxAttempts = 10;
      let attempts = 0;
      const tryLoad = () => {
        mainWindow.loadURL(viteUrl).then(() => {
          console.log("Connected to Vite server");
          mainWindow.show();
          mainWindow.webContents.openDevTools();
        }).catch((err) => {
          attempts++;
          if (attempts < maxAttempts) {
            console.log(`Connection attempt ${attempts}/${maxAttempts}`);
            setTimeout(tryLoad, 1e3);
          } else {
            console.error("Failed to connect to Vite server:", err);
            process.exit(1);
          }
        });
      };
      tryLoad();
    } else {
      mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
      mainWindow.show();
    }
    mainWindow.on("closed", () => mainWindow = null);
  }
  app.whenReady().then(() => {
    console.log("Electron app ready");
    if (isDev) {
      console.log("Waiting for Vite server...");
      setTimeout(createWindow, 2e3);
    } else {
      createWindow();
    }
  });
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
  app.on("activate", () => {
    if (mainWindow === null) createWindow();
  });
  return main$1;
}
var mainExports = requireMain();
const main = /* @__PURE__ */ getDefaultExportFromCjs(mainExports);
export {
  main as default
};
