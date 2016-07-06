'use strict';

require('chai').should();

module.exports = function() {

    this.Then(/^the response code must be (\d+)$/, function (requestCode,done) {
        const world = this;
/*
        const response = world.getValue('heartbeat');
		
//		console.log("***************** Test " + typeof(requestCode) );
//		console.log("***************** Request " + typeof( response.statusCode ));
		
        response.statusCode.should.equal(Number(requestCode));
*/
        const responseCode = world.getValue('heartbeatResponseCode');
		responseCode.should.equal(Number(requestCode));
		
        done();
    });

};
