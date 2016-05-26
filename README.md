
# downloads-folder

  Get the local downloads folder, for all major platforms.

## Usage

```js
const downloadsFolder = require('downloads-folder');

console.log(downloadsFolder());
```

## Installation

```bash
$ npm install downloads-folder
```

## API

### downloadsFolder()

Return the location of the downloads folder for the current platform.

__Warning__: On *nix, this will perform _synchronous_ operations, so don't
place it where concurrency is required. It's probably the best to just
determine this folder once when your application starts.

## Algorithm

- Mac OS X: `~/Downloads`
- Windows: `~/Downloads`
- *nix: `xdg-user-dir DOWNLOAD` || `~/Downloads` || `/tmp`

## License

MIT
