// Load asciidoctor.js and asciidoctor-reveal.js
const asciidoctor = require('asciidoctor.js')();
const asciidoctorRevealjs = require('asciidoctor-reveal.js');
asciidoctorRevealjs.register()

// Convert the document 'presentation.adoc' using the reveal.js converter
const options = {safe: 'safe', backend: 'revealjs'};
asciidoctor.convertFile('presentation.adoc', options); // (1)