const manifest = require('./src/manifest');

var shell = require('shelljs');
if (shell.exec('npm run wbuild').code !== 0) {
    shell.echo('Build failed');
    shell.exit(1);
}


shell.echo('App file creating...');
shell.cd('../../../RPA/src');

if (shell.exec(`node FilePackager.js ../../Applications/BPMGenesis/${manifest.application.name}/dist/index.js ../../DemoApp/apps/${manifest.application.name}.app`).code !== 0) {
    shell.echo('Build failed');
    shell.exit(1);
}
shell.echo('App file done.');

shell.cp('-Rf', `../../DemoApp/apps/${manifest.application.name}.app`, `../../pythonProjects/bpmgenesis/src/portal/static/applications/${manifest.application.name}.app`);
shell.echo('App file done.');

shell.echo('App store info updating...');
const path = require('path');
const fs = require('fs');
const a = fs.readFileSync('../../pythonProjects/bpmgenesis/src/portal/static/appstore.json', 'utf8');

const appStoreInfo = JSON.parse(a);
const result = appStoreInfo.apps.find(item => item.id === manifest.application.name);
//console.log('results ' + JSON.stringify(result));
if (result) {
    const index = appStoreInfo.apps.indexOf(result);
    appStoreInfo.apps[index] = require('./src/AppStoreInfo');
} else {
    appStoreInfo.apps.push(require('./src/AppStoreInfo'));
}
const aa = JSON.stringify(appStoreInfo);

fs.writeFileSync('../../pythonProjects/bpmgenesis/src/portal/static/appstore.json', aa, 'utf8');
shell.echo('App info done.');



/* if (shell.exec('npm run bundle').code !== 0) {
    shell.echo('Bundlet failed');
    shell.exit(1);
} */

//shell.cp('-Rf', './dist/*', '../diagram/node_modules/@tuval/core');
//shell.cp('-Rf', './dist/*', '../core-graphics/node_modules/@tuval/core');
//shell.cp('-Rf', './dist/*', '../coreplus/node_modules/@tuval/core');
//shell.cp('-Rf', './dist/*', '../graphics/node_modules/@tuval/core');
//shell.cp('-Rf', './dist/*', '../forms/node_modules/@tuval/core');
//shell.cp('-Rf', './dist/*', '../winforms/node_modules/@tuval/core');
//shell.cp('-Rf', './dist/*', '../gui/node_modules/@tuval/core');
//shell.cp('-Rf', './dist/*', '../gui/node_modules/@tuval/core');

/* shell.cp('-Rf', './dist/*', '../../../DemoApp/node_modules/@tuval/components/buttons'); */
//shell.cp('-Rf', './dist/tuval-core-wp.js', '../../Tuval_Test_v_1/dist');