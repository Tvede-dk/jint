/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-100.js
 * @description Object.defineProperties - 'P' is data property, several attributes values of P and properties are different (8.12.9 step 12)
 */


function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", { 
            value: 100, 
            writable: true, 
            configurable: true 
        });

        Object.defineProperties(obj, {
            foo: {
                value: 200,
                writable: false,
                configurable: false
            }
        });
        return dataPropertyAttributesAreCorrect(obj, "foo", 200, false, false, false);
    }
runTestCase(testcase);
