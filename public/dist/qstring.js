(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _ = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

module.exports = {

  getQString: function( qStringKey ) {

    var qStringSplit = "";

    var qStringAry = location.search.slice(1).split('&');

    var qString = _(qStringAry).find(function( qParam ){
      var searchString = new RegExp('^' + qStringKey);
      return searchString.test( qParam );
    });

    if ( typeof qString == 'undefined') {
      return false;
    }

    qStringSplit = qString.split('=');

    if ( qStringSplit.length == 0 ) {
      return false;
    }

    return qStringSplit[1];

  },

  getRestVal: function( key ) {

    var restfulPathAry = location.pathname.split('/');

    var keyIndex = _( restfulPathAry ).indexOf( key );

    if (keyIndex <= 0) {
      return false;
    }
    else if ( keyIndex++ == restfulPathAry.length ) {
      return false;
    }

    return restfulPathAry[ keyIndex++ ];

  }

}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
