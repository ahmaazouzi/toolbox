// Needs improvement

const readline = require('readline');
const fs = require('fs');
const ISHEADER = new RegExp("^#+");
const OUTCODEBLOCK = 0;
const INCODEBLOCK = 1;
let inCodeBLOCKState = OUTCODEBLOCK;

const readInterface = readline.createInterface({
    input: fs.createReadStream('file.md'),
    console: false
});

readInterface.on('line', function(line) {
	if (ISHEADER.test(line) && inCodeBLOCKState === OUTCODEBLOCK){
		let trimmed = line.trim();
		const header = genHeader(trimmed);
		const link = genLink(trimmed);
		console.log(header + link);
	}

	// if ((/^```/).test(line))
	// 	toggleCodeBlock(inCodeBLOCKState);
})

genHeader = (s) => {
	const indent = genIndent(s);
	const prefix = genPrefix(indent);
	s = s.replace(/[#:]/g, "");
	return prefix + " " + "[" + s.replace(/^\s/, "") + "]";
}

genIndent = (s) => {
	let i = 0;
	while (s[i] === '#')
		i++;
	return i;
}

genPrefix = (indent) => {
	let prefix;
	switch(indent) {
		case 2:
			prefix = "\t*";
			break;
		case 3:
			prefix = "\t\t+";
			break;
		case 4:
			prefix = "\t\t+";
			break;
		default:
			prefix = "-";
	}

	return prefix;
}

genLink = (s) => {
	s = s.replace(/[#,`"':.?@<>;]/g, "").
		trim().
		toLowerCase().
		replace(/^/,"(#").
		replace(/$/, ")").
		replace(/\s/g, "-");
	return s;
}

toggleCodeBlock = (blockState) => {
	if (blockState === INCODEBLOCK)
		inCodeBLOCKState = OUTCODEBLOCK;
	else
		inCodeBLOCKState = INCODEBLOCK;
}