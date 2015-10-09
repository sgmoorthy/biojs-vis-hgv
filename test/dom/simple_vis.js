/*
 * hgv
 * https://github.com/saketkc/hgv
 *
 * Copyright (c) 2014 Saket Choudhary
 * Licensed under the MIT license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// this is your global div instance (see index.html)
var yourDiv = document.getElementById('mocha');

// requires your main app (specified in index.js)
var hgv = require('../..');

describe('hgv module', function(){
  describe('#init()', function(){
    it('should fill the textBox', function(){
      var opts = {el: yourDiv, text: 'biojs'};
      var instance = new hgv(opts);
      assert.equal(yourDiv.textContent,"hello biojs");
    });
  });
});
