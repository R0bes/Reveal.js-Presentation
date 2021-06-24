
var module = module ? module : {};     // shim for browser use

function hljsDefineMyLanguage(hljs) {

	var FOO = {
		className: 'foo',
		begin: 'foo',
		relevance: 1
	};

    return {
    	aliases: ['ml'],
    	keywords: ['my', 'language', '10'],
    	contains: [ FOO ]
    }
}