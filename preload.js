'use strict';

// Read module
const { contextBridge } = require('electron');

// contextBridge API
contextBridge.exposeInMainWorld('myApi', {
    getElectronVer: () => process.versions.electron
});
