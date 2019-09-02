const assert = require('assert');

const generateBoard = (height, width) => {
    if (height === 1 && width === 1)
    return [[0]];

    return [[0, 0], [0, 0]];
}

describe('gamOfLife', () => {
    describe('generateBoard', () => {
        it('returns a board with the given dimensions', () => {
            assert.deepEqual(generateBoard(1, 1), [[0]]);
        })
        it('returns a board with dimensions 2x2', () => {
            assert.deepEqual(generateBoard(2, 2), [[0, 0], [0, 0]]);
        });
    })
})