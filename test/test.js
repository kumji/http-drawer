
'use strict'

var chai = require('chai'),
	expect = chai.expect,
	chaiHTTP = require('chai-http');
	gulp = require('gulp');
//var http_router = require(__dirname + '/../lib/httpframework');

chai.use(chaiHTTP);

var server = require(__dirname + '/../lib/server');


var url = 'http//localhost:3000';

describe('GET request', function() {

  var res;

  before(function(done) {
    chai.request(url)
      .get('/read/hello.txt')
      .end(function(response) {
        res = response;
        done();
      });
  });

  it('should connect without error', function() {
    expect(res).to.have.status(200);
  });

  it('should read hello.txt ', function() {
    expect(res.body).to.eql('hello world');
  });

});