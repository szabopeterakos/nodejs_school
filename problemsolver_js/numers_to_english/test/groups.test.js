const assert = require('chai').assert;
const expect = require('chai').expect;
const groupMaker = require('../groups').groupMaker;

describe('groupMaker', ()=>{
    it('should be equal', ()=>{
        assert.equal(groupMaker(120)[0][0],1);
        expect(groupMaker(120)).to.eql([ [ 1, 2, 0 ] ]);
        expect(groupMaker(0)).to.eql([ [ 0 ] ]);
        expect(groupMaker(12)).to.eql([ [ 1, 2 ] ]);
        expect(groupMaker(1200000)).to.eql([ [ 1 ], [ 2, 0, 0 ], [ 0, 0, 0 ] ]);
    })
});