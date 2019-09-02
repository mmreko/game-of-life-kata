const assert = require('assert');

const boardGenerator = (height, width) => {
    return [[0]];
}

describe('gamOfLife', () => {
    describe('boardGenerator', () => {
        it('returns a board with the given dimensions', () => {
            assert.deepEqual(boardGenerator(1, 1), [[0]]);
        })
    })
})