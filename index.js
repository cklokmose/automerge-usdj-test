const Automerge = require('@automerge/automerge')
const fs = require('fs');

let scene = JSON.parse(fs.readFileSync('scene.usdj', 'utf8'));

let amDoc = Automerge.init();

let start = Date.now();
amDoc = Automerge.change(amDoc, doc => {
	doc.scene = scene;
})
console.log("No patch callback:", (Date.now() - start)/1000);


start = Date.now();
Automerge.change(amDoc, {patchCallback: callback},doc => {
	doc.scene = scene;
})
console.log("With patch callback:", (Date.now() - start)/1000);

function callback(patch) {
	console.log(patch);
}
