var qStringUtils = require('../qstring');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('qStringUtils', function(){

  describe('getQString', function(){

    var windowLocationAry = ['one=1','two=2','three=3'];
    sinon.stub(qStringUtils, 'getLocationArray').returns(windowLocationAry);

    it('should return the key\s value if the key passed in is found in the urls\'s location', function(){

      var getQString = qStringUtils.getQString('one');

      expect(getQString).to.equal('1');

    });

    it('should return false if caseSensitive option is passed in and you search for a string with the wrong case', function(){

      var getQString = qStringUtils.getQString('One', { 'caseSensitive' : true });

      expect(getQString).to.be.false;

    });

    it('should return false if you search for a key not present in the url', function(){

      var getQString = qStringUtils.getQString('foo');

      expect(getQString).to.be.false;

    });

    it('should return false if you pass in nothing', function(){

      var getQString = qStringUtils.getQString('');

      expect(getQString).to.be.false;

    });

  });

  describe('getRestVal', function(){

    var locationPathnameAry = ['','one','1','two','2','','three'];

    sinon.stub(qStringUtils, 'getRestfulPathArray').returns(locationPathnameAry);

    it('should return false if you pass in nothing', function(){

      var getRestVal = qStringUtils.getRestVal('');

      expect(getRestVal).to.be.false;

    });

    it('should return false if there\'s nothing after your key in the url', function(){

      var getRestVal = qStringUtils.getRestVal('three');

      expect(getRestVal).to.be.false;

    });

    it('should return false if you search for a key not present in the url', function(){

      var getRestVal = qStringUtils.getRestVal('foo');

      expect(getRestVal).to.be.false;

    });

    it('if key passed in is found in the urls\'s pathname, should return the key\'s value', function(){

      var getRestVal = qStringUtils.getRestVal('one');

      expect(getRestVal).to.equal('1');

    });

  });

});