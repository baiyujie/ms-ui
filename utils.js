const path = require('path')
const glob = require('glob')

exports.getMultiEntry = function (globPath) {
  var entries = {};
  var key;
  glob.sync(globPath).forEach(function (entry) {
    key = entry.substring(entry.lastIndexOf('/') + 1, entry.lastIndexOf('.'))
    entries[key] = ['eventsource-polyfill', entry]
  });
  return entries;
}
exports.getMultiHtml = function (globPath) {
  var pages = [];
  glob.sync(globPath).forEach(function (page) {
    var page_obj = {};
    var page_name = page.substring(page.lastIndexOf('/') + 1, page.lastIndexOf('.'));
    var chunk_name = path.basename(page_name, '.html');
    page_obj['filename'] = page_name + '.html';
    page_obj['template'] = page;
    page_obj['chuckName'] = chunk_name;
    pages.push(page_obj)
  });
  return pages;
}
/*设置生产环境与开发环境路径*/
exports.assetsPath = function (_path) {
 var assetsSubDirectory = process.env.NODE_ENV === 'production' ? 'static' : 'static'
 return path.posix.join(assetsSubDirectory, _path)
}
