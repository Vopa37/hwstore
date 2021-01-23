const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\vojte\\Documents\\HardwareStore\\.cache\\dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\vojte\\Documents\\HardwareStore\\src\\pages\\index.js"))),
  "component---src-pages-productform-js": hot(preferDefault(require("C:\\Users\\vojte\\Documents\\HardwareStore\\src\\pages\\productform.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("C:\\Users\\vojte\\Documents\\HardwareStore\\src\\templates\\page.js")))
}

