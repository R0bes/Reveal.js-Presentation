
var module = module ? module : {};     // shim for browser use

function hljsDefineTerraform(hljs) {
	var NUMBERS = {
		className: 'number',
		begin: '\\b\\d+(\\.\\d+)?',
		relevance: 0
	};

    return {
    	aliases: ['ml'],
    	keywords: 'my language|10',
    	literal: 'foo bar',
    	contains: [
       		hljs.COMMENT('\\#', '$'),
       		NUMBERS
    	]
    }
}

module.exports = function(hljs) {
    hljs.registerLanguage('mylanguage', hljsDefineMyLanguage);
};

module.exports.definer = hljsDefineMyLanguage;