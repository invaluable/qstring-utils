'use strict';

var _ = require("underscore");

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