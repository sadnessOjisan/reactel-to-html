const convert = require("../../../dist/index");

const html = process.argv[2];

console.log(convert.default(html));
