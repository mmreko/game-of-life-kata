const assert = require('assert');

const generateBoard = (height, width) => {
    const board =  new Array(height);
    for(let i = 0; i < board.length; i++)
    {
        board[i] = new Array(width).fill(0);
    }
    return board;
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