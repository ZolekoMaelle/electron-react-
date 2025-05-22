
const { app, BrowserWindow } = require('electron')
const path = require('path')
const fs = require('fs')

let mainWindow
const isDev = process.env.NODE_ENV === 'development'
const viteUrl = 'http://localhost:5174'

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
  })

  if (isDev) {
    const maxAttempts = 10
    let attempts = 0

    const tryLoad = () => {
      mainWindow.loadURL(viteUrl)
        .then(() => {
          console.log('Connected to Vite server')
          mainWindow.show()
          mainWindow.webContents.openDevTools()
        })
        .catch(err => {
          attempts++
          if (attempts < maxAttempts) {
            console.log(`Connection attempt ${attempts}/${maxAttempts}`)
            setTimeout(tryLoad, 1000)
          } else {
            console.error('Failed to connect to Vite server:', err)
            process.exit(1)
          }
        })
    }

    tryLoad()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
    mainWindow.show()
  }

  mainWindow.on('closed', () => mainWindow = null)
}

// Enhanced startup with status logging
app.whenReady().then(() => {
  console.log('Electron app ready')
  if (isDev) {
    console.log('Waiting for Vite server...')
    setTimeout(createWindow, 2000)
  } else {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})