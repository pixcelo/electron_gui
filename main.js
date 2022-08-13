'use strinct';

process.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

// Read module
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Case exit all windows
app.on('window-all-closed', () => app.quit());

// when window is ready, show index.html
app.on('ready', () => {
    const win = new BrowserWindow({width: 800, height:600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        } });
    const url = `file://${__dirname}/index.html`;
    win.loadURL(url);
});
