Basic Node.js Server Seed
=========================

A Node.js based server using express and typescript (Angular2 for the client side)

## File Structure
```bash

# Configuration files
package.json
webpack.config.js
gulpfile.js
tsconfig.json
typings.json

# Server Sources
src/

    # Core Utils
    core/
        classes/..
        interfaces/..
        services/..
        db-models/..
        db-transactions/..

    # Server settings
    settings/..

    # Server
    server/
        index.ts
        statics/..
        routing/..

# Other files
..

```

## Requirements

#### Development
- [NPM](https://www.npmjs.com)
- [Node.js](https://nodejs.org)
- [Gulp](http://gulpjs.com/)

#### Production
- [NPM](https://www.npmjs.com)
- [Node.js](https://nodejs.org)
- [PM2](https://github.com/Unitech/pm2)

## Install
```bash
# Install npm dependencies
npm install

# Setup server
gulp init
```

## Start server
```bash
# Start server
gulp serve [--build]
```