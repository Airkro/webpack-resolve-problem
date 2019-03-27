// webpack.config.resolve.alias: qs => qss
const qs = require("qs");

const foo = qs.stringify({
  name: "john"
});

console.log(foo);
