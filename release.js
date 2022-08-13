// Read module
const packager = require('electron-packager');
const config = require('./package.json');
const pckgTyp = process.argv[2]; // win64bit, win32bit
console.log('pckgTyp', pckgTyp);

// Package
packager({
    dir: './',
    out: '../dist',
    name: config.name,

    // Switch by argument
    platform: {win64bit: 'win32', win32bit: 'win32'}[pckgTyp],
    arch:     {win64bit: 'x64',   win32bit: 'ia32'} [pckgTyp],

    // Release electron version
    electronVersion: '20.0.2',

    // App icon
    icon: './icon_src.png.icns',

    'app-bundle-id': 'test-id',
    'app-version': config.version,
    'helper-bundle-id': 'test-id',
    overwrite: true,
    asar: true,
    prune: true,
    ignore: 'release\.js', // write regular expressions
    appCategoryType: '(c) test',
    win32metadata: { // for Windows
        CompanyName: 'test-company',
        FileDescription: config.description, // display in task bar menu
        OriginalFilename: config.name + '.exe',
        ProductName: config.name,
        InternalName: config.name
    }
});
