# Express.js - Handling Missing Request Headers

This repository demonstrates a common error in Express.js applications where attempting to access a request header that might be missing leads to an application crash.

## Bug Description

The `bug.js` file contains an Express.js application that attempts to access the `user-agent` header. If a request is made without this header, the application crashes. This occurs because accessing a missing property on an object (like `req.headers['user-agent']`) results in `undefined`, and attempting to use it within a string interpolation leads to the error. 

## Solution

The `bugSolution.js` file shows how to safely handle the scenario.  The solution uses optional chaining (?.) and nullish coalescing (??) to gracefully handle the case where the 'user-agent' header is missing.