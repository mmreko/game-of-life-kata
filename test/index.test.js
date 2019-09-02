const assert = require('assert');

const generateBoard = (height, width) => {
    var board =  new Array(height);
    for(var i = 0; i < board.length; i++)
    {
        var temp = new Array(width);
        board[i] = temp.fill(0);
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