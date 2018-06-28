export default function(
  state = [
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'wreq',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/wreq/blob/0c736d6de8495e0d4e7f653226a33d1d90b52942/example/server.js',
      file_path: 'example/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\napp.listen(8000);\n\napp.use(express.static(__dirname));\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'sandman',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/sandman/blob/308c1f668db1009045bb12011edee67190a86e69/server.js',
      file_path: 'server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\n\napp.get('/', function () {\n    \n});\n"
    },
    {
      avatar: 'https://avatars3.githubusercontent.com/u/132562?v=4',
      username: 'theRemix',
      repository: 'Message-Bored',
      user_github_url: 'https://github.com/theRemix',
      file_html_url:
        'https://github.com/theRemix/Message-Bored/blob/15d0dbb35cb690bc10116e8b83a773cabb17c5bc/api/index.js',
      file_path: 'api/index.js',
      file_name: 'index.js',
      file_code:
        "const express = require('express');\nconst Router = express.Router();\n\nRouter.use('/users', require('./users'));\nRouter.use('/topics', require('./topics'));\nRouter.use('/messages', require('./messages'));\n\nmodule.exports = Router;\n"
    },
    {
      avatar: 'https://avatars3.githubusercontent.com/u/132562?v=4',
      username: 'theRemix',
      repository: 'Springy-Findeon',
      user_github_url: 'https://github.com/theRemix',
      file_html_url:
        'https://github.com/theRemix/Springy-Findeon/blob/947b32e102e0f68f4296b5d51dce8f965332ed4a/server.js',
      file_path: 'server.js',
      file_name: 'server.js',
      file_code:
        "'use strict';\n\nconst express = require('express');\nconst server = express();\n\nconst pokedex = require('./routes/pokedex');\n\nserver.use('/api/pokedex', pokedex);\n\n\nmodule.exports = server;\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'dnode-website',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/dnode-website/blob/73d052289e35aa23bdd0ef49200393b9d94262bb/examples/express/server.js',
      file_path: 'examples/express/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\napp.use(express.static(__dirname));\n\nvar dnode = require('dnode');\n\ndnode(function (client) {\n    this.cat = function (cb) {\n        cb('meow');\n    };\n}).listen(app);\n\napp.listen(8080);\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'node-keyboardify',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/node-keyboardify/blob/82febb756cbca27917f8ddf2e15493b1a89ba45e/example/clickedy/server.js',
      file_path: 'example/clickedy/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar browserify = require('browserify');\n\nvar app = express.createServer();\napp.use(express.static(__dirname));\n\nvar bundle = browserify({\n    entry : __dirname + '/main.js',\n    watch : true,\n});\napp.use(bundle);\n\nconsole.log('Listening on :8080');\napp.listen(8080);\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'node-stackedy',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/node-stackedy/blob/80475a0966745cb0881761710d623e1abf456e2e/example/web/server.js',
      file_path: 'example/web/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar browserify = require('browserify');\n\nvar app = express.createServer();\napp.use(express.static(__dirname));\napp.use(browserify({\n    entry : __dirname + '/main.js',\n    watch : true,\n}));\n\napp.listen(8081);\nconsole.log('Listening on :8081');\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'dnode-slides',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/dnode-slides/blob/7829d4cd7062196cda7fe2bb9b9c7a29099504b5/code/browser/both.js',
      file_path: 'code/browser/both.js',
      file_name: 'both.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\napp.use(express.static(__dirname));\napp.listen(8080);\n\nvar dnode = require('dnode');\n\nvar server = dnode({\n    zing : function (n, cb) { cb(n * 100) }\n});\nserver.listen(app);\nserver.listen(5000);\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'dnode-slides',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/dnode-slides/blob/7829d4cd7062196cda7fe2bb9b9c7a29099504b5/code/browser/server.js',
      file_path: 'code/browser/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\napp.use(express.static(__dirname));\napp.listen(8080);\n\nvar dnode = require('dnode');\n\nvar server = dnode({\n    zing : function (n, cb) { cb(n * 100) }\n});\nserver.listen(app);\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'node-progressify',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/node-progressify/blob/db08775cbbce2f03c5be5a6ae4e5d6ee3db8b635/example/progress/server.js',
      file_path: 'example/progress/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\napp.use(express.static(__dirname));\n\nvar browserify = require('browserify');\napp.use(browserify({ entry : 'main.js' }));\napp.use(require('progressify'));\n\napp.listen(8080);\nconsole.log('Listening on :8080');\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'socket.io-test',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/socket.io-test/blob/4da5d909e4d98d7fa27115d0f82d5c59931ebebc/test/default/server.js',
      file_path: 'test/default/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\napp.listen(9000);\n\napp.use(express.static(__dirname));\n\nvar io = require('socket.io').listen(app);;\n\nio.sockets.on('connection', function (socket) {\n    socket.emit('news', 'hello world!');\n});\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'hexhack-server',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/hexhack-server/blob/84d740d49da342a800018acd370e6a332ae053ea/web.js',
      file_path: 'web.js',
      file_name: 'web.js',
      file_code:
        "var express = require('express');\nvar app = module.exports = express.createServer();\n\napp.use(express.staticProvider(__dirname + '/static'));\n\napp.get('/dnode.js', require('dnode/web').route());\n\napp.get('/', function (req, res) {\n    res.render('index.jade');\n});\n"
    },
    {
      avatar: 'https://avatars1.githubusercontent.com/u/499550?v=4',
      username: 'yyx990803',
      repository: 'generator-dude',
      user_github_url: 'https://github.com/yyx990803',
      file_html_url:
        'https://github.com/yyx990803/generator-dude/blob/db3d23f72273764f68c374a5e97aceea8ceb3f2d/app/templates/node/server/index.js',
      file_path: 'app/templates/node/server/index.js',
      file_name: 'index.js',
      file_code:
        "var express = require('express'),\n    http \t= require('http'),\n    path \t= require('path'),\n    hbs     = require('express3-handlebars')\n\nvar app = express()\n\napp.configure(function(){\n    app.set('views', __dirname + '/../views')\n    app.engine('handlebars', hbs({ defaultLayout: 'main' }))\n    app.set('view engine', 'handlebars')\n    app.use(express.favicon())\n    app.use(app.router)\n    app.use(express.static(__dirname + '/../static'))\n})\n\napp.configure('development', function(){\n    app.use(express.logger('dev'))\n    app.use(express.errorHandler())\n})\n\napp.get('/', function(req, res){\n    res.render('index', {\n        message: 'Node/Express works!!!'\n    })\n})\n\nmodule.exports = http.createServer(app)"
    },
    {
      avatar: 'https://avatars1.githubusercontent.com/u/499550?v=4',
      username: 'yyx990803',
      repository: 'roetem',
      user_github_url: 'https://github.com/yyx990803',
      file_html_url:
        'https://github.com/yyx990803/roetem/blob/744df5f2b64e00e27529f4d8903aa552e53ca842/lib/app.js',
      file_path: 'lib/app.js',
      file_name: 'app.js',
      file_code:
        "var express = require('express')\nvar http = require('http')\nvar sio = require('socket.io')\nvar connectionHandlerFactory = require('./connection')\n\nmodule.exports = function initApp (app, cb) {\n  console.log('initializing app...')\n\n  var expressApp = app.express = express()\n  var server = app.server = new http.Server(expressApp)\n  var io = app.io = sio(server)\n\n  // realtime stuff\n  io.on('connection', connectionHandlerFactory(app, cb))\n  \n  // setup the express app and get things running\n  var appDir = process.cwd()\n  expressApp.use(express.static('public'))\n  expressApp.get('/', function (req, res) {\n    res.sendFile(appDir + '/public/index.html')\n  })\n\n  var port = app._opts.port || 8000\n  server.listen(port, function () {\n    console.log('app running on port ' + port)\n    cb()\n  })\n}"
    },
    {
      avatar: 'https://avatars2.githubusercontent.com/u/9287?v=4',
      username: 'isaacs',
      repository: 'paas-tester',
      user_github_url: 'https://github.com/isaacs',
      file_html_url:
        'https://github.com/isaacs/paas-tester/blob/1021ed55e533730f701386f1bc1bffe3fe613dec/server.js',
      file_path: 'server.js',
      file_name: 'server.js',
      file_code:
        'var express = "not found"\nvar fs = require("fs")\ntry {\n  express = JSON.parse(fs.readFileSync(require.resolve("express/package.json")).toString())\n} catch (ex) {\n  express = "can\'t load package.json data"\n}\n\nconsole.error("express is: "+express)\n\nvar util = require("util")\n\nrequire("http").createServer(function (req, res) {\n  var data = { env: process.env\n             , module: module\n             , express: express\n             , pid: process.pid\n             , argv: process.argv\n             }\n  data = new Buffer(util.inspect(data))\n  res.writeHead(200, { "content-type":"text/plain", "content-length": data.length })\n  res.end(data)\n}).listen(+process.env.PORT || 3000)\n\n'
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/810438?v=4',
      username: 'gaearon',
      repository: 'react-hot-loader',
      user_github_url: 'https://github.com/gaearon',
      file_html_url:
        'https://github.com/gaearon/react-hot-loader/blob/9ef4c35aa62695c46fdbca6929de1db77ad22ba2/examples/SSR/src/server.js',
      file_path: 'examples/SSR/src/server.js',
      file_name: 'server.js',
      file_code:
        "import express from 'express'\nimport React from 'react'\nimport { renderToString } from 'react-dom/server'\nimport App from './App'\nimport template from './template'\n\nconst server = express()\n\nserver.use('/dist', express.static('dist'))\n\nserver.get('/', (req, res) => {\n  const app = <App />\n\n  const appString = renderToString(app)\n\n  res.send(\n    template({\n      body: appString,\n    }),\n  )\n})\n\nserver.listen(8080)\n\nconsole.log('server ready')\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'dnode-website',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/dnode-website/blob/73d052289e35aa23bdd0ef49200393b9d94262bb/examples/express-browserify-jquery/server.js',
      file_path: 'examples/express-browserify-jquery/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\n\nvar browserify = require('browserify');\nvar dnode = require('dnode');\n\napp.use(express.static(__dirname));\napp.use(browserify({\n    require : [ 'dnode', 'jquery-browserify' ]\n}));\n\ndnode(function (client) {\n    this.cat = function (cb) {\n        cb('meow');\n    };\n}).listen(app);\n\napp.listen(8080);\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'dnode-website',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/dnode-website/blob/73d052289e35aa23bdd0ef49200393b9d94262bb/examples/express-browserify/server.js',
      file_path: 'examples/express-browserify/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\n\nvar browserify = require('browserify');\nvar dnode = require('dnode');\n\napp.use(express.static(__dirname));\napp.use(browserify({ require : 'dnode' }));\n\ndnode(function (client) {\n    this.cat = function (cb) {\n        cb('meow');\n    };\n}).listen(app);\n\nserver.listen(8080);\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'dnode-slides',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/dnode-slides/blob/7829d4cd7062196cda7fe2bb9b9c7a29099504b5/code/browserify/server.js',
      file_path: 'code/browserify/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar browserify = require('browserify');\nvar dnode = require('dnode');\n\nvar server = express.createServer();\n\nserver.use(express.static(__dirname));\n\nserver.use(browserify({\n    require : 'dnode',\n    mount : '/browserify.js'\n}));\n\ndnode(function (client) {\n    this.cat = function (cb) {\n        cb('meow');\n    };\n}).listen(server);\n\nserver.listen(8080);\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'node-keysym',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/node-keysym/blob/662f686ecf2b6b4528c76b46bf5e1e758b590528/generate/web.js',
      file_path: 'generate/web.js',
      file_name: 'web.js',
      file_code:
        "// mash all the keys with this webapp\nvar express = require('express');\nvar app = express.createServer();\n\napp.use(express.static(__dirname + '/web'));\n\napp.use(require('browserify')({\n    entry : __dirname + '/web/main.js',\n    require : [ 'jquery-browserify' ],\n}));\n\napp.listen(8080);\nconsole.log('Listening on :8080');\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/31404557?v=4',
      username: 'steveninouye',
      repository: 'create-react-app-server-boiler',
      user_github_url: 'https://github.com/steveninouye',
      file_html_url:
        'https://github.com/steveninouye/create-react-app-server-boiler/blob/3698156a699dcf5e7b8bfcdc896ab0b522dbaf55/server.js',
      file_path: 'server.js',
      file_name: 'server.js',
      file_code:
        "const express = require('express');\nconst bodyParser = require('body-parser');\nconst path = require('path');\nconst app = express();\nconst PORT = process.env.PORT || 8080;\napp.use(express.static(path.join(__dirname, 'build')));\n\napp.get('/ping', (req, res) => {\n  res.send('pong');\n});\n\napp.get('/', (req, res) => {\n  res.sendFile(path.join(__dirname, 'build', 'index.html'));\n});\napp.listen(PORT, () => {\n  console.log(`Server listening on port `);\n});\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'node-fileify',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/node-fileify/blob/90fdfd67bb6fed48c68fb47a7d5b08019d38dc19/example/simple/server.js',
      file_path: 'example/simple/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\n\napp.use(express.static(__dirname));\napp.listen(8080);\nconsole.log('Listening on 8080');\n\nvar browserify = require('browserify');\nvar bundle = browserify({\n    require : { jquery : 'jquery-browserify' }\n});\napp.use(bundle);\n\nvar fileify = require('fileify');\nbundle.use(fileify('files', __dirname + '/files'));\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'mrcolor',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/mrcolor/blob/5da88a953fe78ea1a31d150afc1c695f9e2e61bc/example/browser/server.js',
      file_path: 'example/browser/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\napp.use(express.static(__dirname));\n\nvar browserify = require('browserify');\nvar bundle = browserify({\n    entry : __dirname + '/main.js',\n    watch : true\n});\napp.use(bundle);\n\napp.get('/', function (req, res) {\n    res.render('index.jade', {\n        modified : bundle.modified,\n        layout : false\n    });\n});\n\napp.listen(8080);\nconsole.log('Listening on :8080');\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'node-sesame',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/node-sesame/blob/7064655756f0641076ad95d6ede53a7e2ced7b5a/examples/memory-express.js',
      file_path: 'examples/memory-express.js',
      file_name: 'memory-express.js',
      file_code:
        "var express = require('express');\nvar webserver = express.createServer();\nwebserver.use(require('sesame')());\n\nwebserver.use(express.router(function (app) {\n    app.get('/', function (req, res) {\n        req.session.times = (req.session.times || 0) + 1;\n        \n        res.writeHead(200, { 'Content-Type' : 'text/plain' });\n        res.end(req.session.times + ' times!');\n    });\n}));\n\nconsole.log('Listening on 9090');\nwebserver.listen(9090);\n"
    },
    {
      avatar: 'https://avatars3.githubusercontent.com/u/1315101?v=4',
      username: 'yangshun',
      repository: 'nutty-ninjas-x',
      user_github_url: 'https://github.com/yangshun',
      file_html_url:
        'https://github.com/yangshun/nutty-ninjas-x/blob/ae3f7113c2c987708607d3b75217b1d05f2a13cb/index.js',
      file_path: 'index.js',
      file_name: 'index.js',
      file_code:
        "// Setup basic express server\nvar express = require('express');\nvar app = express();\nvar server = require('http').createServer(app);\nvar port = process.env.PORT || 3000;\n\n// Initialize our room management instance\nvar RoomManager = require('./room-manager');\nvar roomManager = new RoomManager(server);\n\napp.use(express.static(__dirname + '/public'));\napp.use(express.bodyParser());\napp.use(app.router);\n\n// Routing\napp.get('/', function (req, res) {\n  res.sendfile(__dirname + '/public/index.html');\n});\n\napp.get('/play', function (req, res) {\n  res.sendfile(__dirname + '/public/play.html');\n});\n\napp.get('/lobby', function (req, res) {\n  res.sendfile(__dirname + '/public/lobby.html');\n});\n\nserver.listen(port, function () {\n  console.log('Server listening at port %d', port);\n});\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'node-jadeify',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/node-jadeify/blob/cef341da872681d031e7e6d7ed0e4718aab608be/example/partials/server.js',
      file_path: 'example/partials/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\nvar util = require('util');\n\napp.use(express.static(__dirname + '/static'));\n\napp.get('/', function (req, res) {\n    res.render('index.jade', { layout : false });\n});\n\nvar browserify = require('browserify');\nvar jadeify = require('jadeify');\n\nutil.print('Generating bundle... ');\nvar bundle = browserify()\n    .use(jadeify(__dirname + '/views'))\n    .addEntry(__dirname + '/static/main.js')\n;\nconsole.log('done');\n\napp.use(bundle);\napp.listen(8080);\nconsole.log('Listening on 8080');\n"
    },
    {
      avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4',
      username: 'substack',
      repository: 'node-jadeify',
      user_github_url: 'https://github.com/substack',
      file_html_url:
        'https://github.com/substack/node-jadeify/blob/cef341da872681d031e7e6d7ed0e4718aab608be/example/simple/server.js',
      file_path: 'example/simple/server.js',
      file_name: 'server.js',
      file_code:
        "var express = require('express');\nvar app = express.createServer();\nvar util = require('util');\n\napp.use(express.static(__dirname + '/static'));\n\napp.get('/', function (req, res) {\n    res.render('index.jade', { layout : false });\n});\n\nvar browserify = require('browserify');\nvar jadeify = require('jadeify');\n\nutil.print('Generating bundle... ');\nvar bundle = browserify().use(jadeify(__dirname + '/views', { watch : true }));\nbundle.addEntry(__dirname + '/static/main.js');\napp.use(bundle);\nconsole.log('done');\n\napp.listen(8080);\nconsole.log('Listening on 8080');\n"
    },
    {
      avatar: 'https://avatars3.githubusercontent.com/u/1315101?v=4',
      username: 'yangshun',
      repository: 'healthsocial',
      user_github_url: 'https://github.com/yangshun',
      file_html_url:
        'https://github.com/yangshun/healthsocial/blob/bcfa806f9181d77b91a068d73024fa5a4aea51bd/server/api/activity/index.js',
      file_path: 'server/api/activity/index.js',
      file_name: 'index.js',
      file_code:
        "'use strict';\n\nvar express = require('express');\nvar controller = require('./activity.controller');\n\nvar router = express.Router();\n\nrouter.get('/', controller.index);\nrouter.get('/:id', controller.show);\nrouter.post('/', controller.create);\nrouter.put('/:id', controller.update);\nrouter.patch('/:id', controller.update);\nrouter.delete('/:id', controller.destroy);\n\nmodule.exports = router;"
    },
    {
      avatar: 'https://avatars3.githubusercontent.com/u/1315101?v=4',
      username: 'yangshun',
      repository: 'healthsocial',
      user_github_url: 'https://github.com/yangshun',
      file_html_url:
        'https://github.com/yangshun/healthsocial/blob/bcfa806f9181d77b91a068d73024fa5a4aea51bd/server/api/blood_pressure/index.js',
      file_path: 'server/api/blood_pressure/index.js',
      file_name: 'index.js',
      file_code:
        "'use strict';\n\nvar express = require('express');\nvar controller = require('./blood_pressure.controller');\n\nvar router = express.Router();\n\nrouter.get('/', controller.index);\nrouter.get('/:id', controller.show);\nrouter.post('/', controller.create);\nrouter.put('/:id', controller.update);\nrouter.patch('/:id', controller.update);\nrouter.delete('/:id', controller.destroy);\n\nmodule.exports = router;"
    },
    {
      avatar: 'https://avatars3.githubusercontent.com/u/1315101?v=4',
      username: 'yangshun',
      repository: 'healthsocial',
      user_github_url: 'https://github.com/yangshun',
      file_html_url:
        'https://github.com/yangshun/healthsocial/blob/bcfa806f9181d77b91a068d73024fa5a4aea51bd/server/api/fluid_intake/index.js',
      file_path: 'server/api/fluid_intake/index.js',
      file_name: 'index.js',
      file_code:
        "'use strict';\n\nvar express = require('express');\nvar controller = require('./fluid_intake.controller');\n\nvar router = express.Router();\n\nrouter.get('/', controller.index);\nrouter.get('/:id', controller.show);\nrouter.post('/', controller.create);\nrouter.put('/:id', controller.update);\nrouter.patch('/:id', controller.update);\nrouter.delete('/:id', controller.destroy);\n\nmodule.exports = router;"
    }
  ],
  action
) {
  switch (action.type) {
    case 'GET_CODE_RESULTS':
      console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}
