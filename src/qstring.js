'use strict';

var _ = require("underscore");

var qStringUtils = {

  getLocationArray: function() {

    return location.search.slice(1).split('&');

  },

  getRestfulPathArray: function() {

    return location.pathname.split('/');

  },

  getQString: function( qStringKey, options ) {

    var qStringSplit = "";

    var qStringAry = this.getLocationArray();

    var caseSensitive = 
        ( typeof options !== 'undefined' && options.hasOwnProperty( 'caseSensitive' ) ) 
        ? options.caseSensitive 
        : false;
    
    var qString = _(qStringAry).find(function( qParam ){
      var searchString = ( !caseSensitive )
          ? new RegExp('^' + qStringKey, 'i')
          : new RegExp('^' + qStringKey);
      return searchString.test( qParam );
    });

    if (qStringKey.length === 0) {
      return false;
    }

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

    var restfulPathAry = this.getRestfulPathArray();

    var keyIndex = _( restfulPathAry ).indexOf( key );

    var nextElement = keyIndex++;

    if (key.length === 0) {
      return false;
    }

    if (keyIndex <= 0) {
      return false;
    }
    else if ( keyIndex == restfulPathAry.length ) {
      return false;
    }

    if (restfulPathAry.length < nextElement ) {
      return false;
    }

    return restfulPathAry[ keyIndex ];

  }

}

module.exports = qStringUtils;