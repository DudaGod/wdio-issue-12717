# wdio-issue-12717
MRE for issue - https://github.com/webdriverio/webdriverio/issues/12717

How to reproduce problem:
- `npm i`
- `./node_modules/.bin/wdio run ./wdio.conf.js`
- got an error: `Error: Can't call "elemCmd" on element with selector "body", it is not a function`
