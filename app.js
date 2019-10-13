
const fetch = require('node-fetch');

console.log("hello world");
fetch('https://google.com')
.then(
	  (result) => console.log(result)
	  );

