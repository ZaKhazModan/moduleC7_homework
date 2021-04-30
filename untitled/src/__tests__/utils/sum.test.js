import {sum} from '../../utils/sum.js';

describe ( "my test", () => {
        it ('adds 1 + 2 to equal 3', () => {
            expect(sum(1, 2)).toBe(3);
        }),
            it ('adds 5 + 8 to equal 13', () => {
                expect(sum(5, 8)).toBe(13);
            })
});

describe ( "my test 2", () => {
    it ('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    }),
        it ('adds 5 + 8 to equal 13', () => {
            expect(sum(5, 8)).toBe(13);
        })
});