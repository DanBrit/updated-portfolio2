// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/daniel/Desktop/node/git/updated-portfolio.git/src/pages/index.js"))
}

exports.json = {
  "index.json": require("/Users/daniel/Desktop/node/git/updated-portfolio.git/.cache/json/index.json")
}