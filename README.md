# referer-filter [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> Middleware to filter requests by referer header values.

This middleware returns a 403 status code if the referer isn't defined in the
filter.

##Example

```javascript
var refererFilter('referer-filter');
app.use(refererFilter('http://my-domain.com/'));
app.use(refererFilter(['http://domain-2.com/', 'http://domain-3.com/']));
//request from http://some-other-domain.com/ will return 403
```

##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2014 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/referer-filter.svg
[npm-url]: https://npmjs.org/package/referer-filter
[npm-image]: http://img.shields.io/npm/v/referer-filter.svg

[travis-url]: https://travis-ci.org/jsdevel/node-referer-filter
[travis-image]: http://img.shields.io/travis/jsdevel/node-referer-filter.svg

[coveralls-url]: https://coveralls.io/r/jsdevel/node-referer-filter
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/node-referer-filter/master.svg
