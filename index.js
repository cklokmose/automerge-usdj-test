const Automerge = require('@automerge/automerge')
const fs = require('fs');

let smallScene = JSON.parse(fs.readFileSync('small-scene.usdj', 'utf8'));
let largerScene = JSON.parse(fs.readFileSync('larger-scene.usdj', 'utf8'));

let amDoc = Automerge.init();

console.log("Loading small scene into automerge doc");
let start = Date.now();
amDoc = Automerge.change(amDoc, doc => {
	doc.scene = smallScene;
})
console.log("Time loading small scene", (Date.now() - start)/1000);

console.log("Replacing small scene with larger scene in automerge doc");
start = Date.now();
amDoc = Automerge.change(amDoc, doc => {
	doc.scene = largerScene;
})
console.log("Time loading large scene", (Date.now() - start)/1000);
