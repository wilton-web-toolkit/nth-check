define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var parse = require("nth-check/parse.js"),
    compile = require("nth-check/compile.js");

module.exports = function nthCheck(formula){
	return compile(parse(formula));
};

module.exports.parse = parse;
module.exports.compile = compile;

return module.exports;});
