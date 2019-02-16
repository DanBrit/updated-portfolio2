// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/daniel/Desktop/node/git/updated-portfolio.git/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/daniel/Desktop/node/git/updated-portfolio.git/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/daniel/Desktop/node/git/updated-portfolio.git/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/daniel/Desktop/node/git/updated-portfolio.git/.cache/json/index.json")
}