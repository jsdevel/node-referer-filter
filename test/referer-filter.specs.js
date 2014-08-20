'use strict';

describe('referer-filter', function(){
  var sinon = require('sinon');
  var next = sinon.stub();
  var sut = require('..');

  sut.should.be.type('function');

  beforeEach(function(){
    next.reset();
  });

  describe('with a string rule', function(){
    var filter = sut('foo');

    it('should block unkown referers', function(){
      filter({headers:{referer: 'asdf'}}, null, next);
      sinon.assert.calledWith(next, sinon.match({
        status: 403
      }));
    });

    it('should allow known referers', function(){
      filter({headers:{referer: 'foo'}}, null, next);
      sinon.assert.calledWith(next);
    });
  });

  describe('with array rules', function(){
    var filter = sut(['foo', 'boo']);

    it('should block unkown referers', function(){
      filter({headers:{referer: 'asdf'}}, null, next);
      sinon.assert.calledWith(next, sinon.match({
        status: 403
      }));
    });

    it('should allow known referers', function(){
      filter({headers:{referer: 'boo'}}, null, next);
      sinon.assert.calledWith(next);
    });
  });

});
