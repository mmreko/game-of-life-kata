const assert = require('assert');

const generateBoard = (height, width) => {
    return [[0]];
}

describe('gamOfLife', () => {
    describe('generateBoard', () => {
        it('returns a board with the given dimensions', () => {
            assert.deepEqual(generateBoard(1, 1), [[0]]);
        })
    })
})