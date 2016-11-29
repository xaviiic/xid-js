# Globally Unique ID Generator

xid-js is a global unique id generator module for Node.js. The generator implementation is
ported from golang package [xid](https://github.com/rs/xid).

A 20 chars long unique id can be generated directly without any configuration, and id
is encoded in base32 format (w/o padding) by
using [Crockford's Base32](http://www.crockford.com/wrmg/base32.html) alphabet set.

## Install

    npm install xid-js

## Usage

```javascript
const xid = require('xid-js');

// generate an id
xid.next(); // b0xzcjjhcjkbqnpwz150

```

## License
[MIT License](https://raw.github.com/xaviiic/xid-js/master/LICENSE).