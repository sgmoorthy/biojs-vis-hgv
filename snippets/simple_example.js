// if you don't specify a html file, the sniper will generate a div
var app = require("biojs-vis-hgv");
var hgvViewer = new app({
                    accession : "J3KP33",//"O15234",// "P00533",//O15234",//P15289",//"P45985",
                    baseUrl: "../data/",
                    target: yourDiv
                    });

// BioJS event system test (you can safely remove this in your app)
//@biojs-instance=hgvViewer
