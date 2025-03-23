````md
## Package.json Configuration

`package.json` should look like this:

```json
{
  "name": "01_crud_api",
  "version": "1.0.0",
  "description": "app for crud api",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "debug": "nodemon index.js"
  },
  "keywords": [],
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.21.2",
    "mongoose": "^8.11.0"
  }
}
```
````

## Debug Configuration in VS Code

`Launch Json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch API in Debug Mode",
      "program": "${workspaceFolder}/index.js",
      "console": "integratedTerminal",
      "runtimeExecutable": "node",
      "env": {
        "NODE_ENV": "development"
      },
      "restart": true,
      "autoAttachChildProcesses": true,
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```
