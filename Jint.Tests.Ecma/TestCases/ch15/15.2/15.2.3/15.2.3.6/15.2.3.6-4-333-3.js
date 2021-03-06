/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-333-3.js
 * @description Object.defineProperty will update [[Value]] attribute of named property 'P' successfully when [[Configurable]] attribute is false, [[Writable]] attribute is true and 'O' is an Arguments object (8.12.9 - step 10)
 */


function testcase() {

        var obj = (function () {
            return arguments;
        }());

        Object.defineProperty(obj, "property", {
            value: 1001,
            writable: true,
            configurable: false
        });

        Object.defineProperty(obj, "property", {
            value: 1002
        });

        return dataPropertyAttributesAreCorrect(obj, "property", 1002, true, false, false);
    }
runTestCase(testcase);
