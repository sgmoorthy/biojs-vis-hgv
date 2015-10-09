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

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var hgv = require('../..');

describe('hgv module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(hgv.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      hgv.hello('biojs').should.equal("hello biojs");
    });
  });
});
