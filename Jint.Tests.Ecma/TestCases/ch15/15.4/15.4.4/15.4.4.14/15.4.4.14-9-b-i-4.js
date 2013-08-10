/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-b-i-4.js
 * @description Array.prototype.indexOf - element to be retrieved is own data property that overrides an inherited data property on an Array-like object
 */


function testcase() {

        try {
            Object.prototype[0] = false;
            return 0 === Array.prototype.indexOf.call({ 0: true, 1: 1, length: 2 }, true);
        } finally {
            delete Object.prototype[0];
        }
    }
runTestCase(testcase);