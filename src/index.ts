import {windowManager} from 'node-window-manager';

const window = windowManager.getActiveWindow();

console.log(window.getBounds());
