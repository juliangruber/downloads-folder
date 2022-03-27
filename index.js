'use strict';

const os = require('os');
const execSync = require('child_process').execSync;
const statSync = require('fs').statSync;

module.exports = () => {
  return {
    darwin: darwin,
    freebsd: unix,
    linux: unix,
    sunos: unix,
    win32: windows
  }[os.platform()]();
};

module.exports.darwin = darwin;
module.exports.unix = unix;
module.exports.windows = windows;

function darwin () {
  return `${process.env.HOME}/Downloads`;
}

function unix () {
  let dir;
  try {
    dir = execSync('xdg-user-dir DOWNLOAD', { encoding: 'utf8' }).trim();
  } catch (_) {}
  if (dir && dir !== process.env.HOME) return dir;

  let stat;
  const homeDownloads = `${process.env.HOME}/Downloads`;
  try {
    stat = statSync(homeDownloads);
  } catch (_) {}
  if (stat) return homeDownloads;

  return '/tmp/';
}

function windows () {
  const registry = require('registry-js');
  let folder = `${process.env.USERPROFILE}\\Downloads`;
  const folders =
    registry.enumerateValues(
      registry.HKEY.HKEY_CURRENT_USER,
      'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders');
  for (const value of folders) {
    if (value.name === '{374DE290-123F-4565-9164-39C4925E467B}') {
      folder = value.data.replace('%USERPROFILE%', process.env.USERPROFILE);
      break;
    }
  }
  return folder;
}
