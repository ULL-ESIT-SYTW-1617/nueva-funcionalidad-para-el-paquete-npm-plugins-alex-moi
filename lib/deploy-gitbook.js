var path = require("path")
var REPO = require("../package.json").repository.url
var ghpages = require("gh-pages")



ghpages.publish(path.join(__dirname, './lib/gh-pages'), {
  repo: REPO
});