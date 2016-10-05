var fs = require('fs');
var git = require('simple-git')
var REPO = require("../package.json").repository.wiki


//borrar posible repo git.
fs.rmdirSync('wiki/.git')


//inicializar repo y añadir nueva wiki
git()
    .init()
    .add('./lib/*')
    .commit("Update wiki")
    .addRemote('origin', REPO)
    .push(['--force', 'origin', 'master:master'], function () { });
    