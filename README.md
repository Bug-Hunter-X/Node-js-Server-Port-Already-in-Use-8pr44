# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js: attempting to start a server on a port that is already in use.  It also shows how to handle this situation gracefully.

## The Problem

The `server.js` file contains a simple HTTP server. If you run it and then attempt to run it again immediately, you'll encounter an error because the port is already occupied by the first instance.

## The Solution

The `serverSolution.js` file provides a solution that checks if the port is available before attempting to start the server. If the port is unavailable, it waits for a short period and tries again. This prevents the application from crashing and improves its robustness.