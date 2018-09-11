# raf-after [![Build Status](https://travis-ci.org/goldenyz/raf-after.svg?branch=master)](https://travis-ci.org/goldenyz/raf-after) [![npm](https://img.shields.io/npm/v/raf-after.svg?style=flat-square)](https://www.npmjs.com/package/raf-after) [![npm downloads](https://img.shields.io/npm/dm/raf-after.svg)](https://www.npmjs.com/package/raf-after)

invoke the callback after the next repaint, while the requestAnimationFrame calls the callback before the next repaint

### Usage
1. Install the package `npm install raf-after -S`
2. Import the module in the place you want to use:
```js
import rafAfter from 'raf-after';

rafAfter(function () => {
  // do what you want after next repaint
});
```
