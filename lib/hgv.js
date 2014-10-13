/*
 * hgv
 * https://github.com/saketkc/hgv
 *
 * Copyright (c) 2014 Saket Choudhary
 * Licensed under the MIT license.
 */

/**
@class hgv
 */


var  hgv;
module.exports = hgv = function(opts){
  this.el = opts.el;
  this.el.textContent = hgv.hello(opts.text);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     hgv.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


hgv.hello = function (name) {

  return 'hello ' + name;
};

