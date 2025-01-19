# day36 - NodeJS Fundamentals

## Topics

- [x] What is NodeJS?
- [x] Understanding nodemodules
- [x] package.json and package-lock.json
- [x] Built-in, Third-party and Custom Modules
- [x] Dependencies and DevDependencies
- [ ] FileSystem in NodeJS
- [x] Http Module in NodeJS
- [x] Type of Imports

### What is NodeJS?

- Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
- Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
- Node.js represents a "JavaScript everywhere" paradigm, unifying web application development around a single programming language, rather than different languages for server- and client-side scripts.

### What is npm?

- npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently.
- npm is extremely fast, and helps to manage the packages that you download.
- npm is the default package manager for the JavaScript runtime environment Node.js.

### Package.json

- package.json is the manifest file for Node.js projects and it holds metadata relevant to the project.
- It holds various metadata relevant to the project like the name, version, description, homepage, etc.
- It also holds the list of dependencies.
- Version:
  - Major version: 1.0.0: Breaking changes
  - Minor version: 0.1.0: New features
  - Patch version: 0.0.1: Bug fixes

### Type of Imports

- CommonJS: `require()`, `module.exports`
  - package.json

```json
{
  "type": "commonjs"
}
```

- extension: `.js`

- ES6: `import`, `export`
  - package.json

```json
{
  "type": "module"
}
```

- extension: `.mjs`

### Built-in Modules, Third-party Modules and Custom Modules

- Built-in Modules: Modules that are available in Node.js by default.

  - http: To create a http server
  - fs: To work with file system
  - path: To work with file paths
  - os: To get information about the operating system

- Third-party Modules: Modules that are not available in Node.js by default.

  - express: Web framework for Node.js
  - mongoose: MongoDB object modeling tool
  - nodemailer: Send e-mails from Node.js
  - nodemon: Monitor for any changes in your source and automatically restart your server
  - dotenv: Loads environment variables from a .env file into process.env
  - axios: Promise based HTTP client for the browser and node.js
  - morgan: HTTP request logger middleware for node.js
  - cors: Middleware for enabling Cross-Origin Resource Sharing
  - body-parser: Node.js body parsing middleware or express.json() and express.urlencoded()
  - cookie-parser: Parse Cookie header and populate req.cookies with an object keyed by the cookie names
  - bcrypt: Library to help you hash passwords
  - jsonwebtoken: An implementation of JSON Web Tokens (authentication)
  - multer: Middleware for handling `multipart/form-data`

- Custom Modules: Modules that are created by the developer.
  - ErrorRoute
  - Authentication
  - Authorization
  - Logger
  - Validation
  - SendMail

### package.json and package-lock.json

- package.json: Holds metadata relevant to the project and a list of dependencies.
- package-lock.json:
  - Holds the exact version of the dependencies that are installed.
  - It helps to lock the version of the dependencies so that the same version is installed in all the environments.
  - It is created automatically when you run `npm install`.

### nodemodules

- The `node_modules` directory is created when you run `npm install`.
- It holds all the dependencies that are installed for the project.
- It is recommended not to commit the `node_modules` directory to the version control system.

### Dependencies and DevDependencies

- Dependencies: Modules that are required for the application to run in the production environment.
- DevDependencies: Modules that are required for the development of the application but not required for the application to run in the production environment.

Commands:

```bash
# Install a package
npm install <package-name>

# Uninstall a package
npm uninstall <package-name>

# Install a package as a dev dependency
npm install <package-name> --save-dev or npm install <package-name> -D

# Uninstall a package from dev dependencies
npm uninstall <package-name> --save-dev or npm uninstall <package-name> -D

# Install all the dependencies
npm install or npm i
```
