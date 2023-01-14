/**
 * @jest-environment jsdom
 */

import countComments from "../modules/countComments";

describe('Count comments', () => {
    beforeAll(() => {
        document.body.innerHTML = ` <ul class="ul-comment">
        <li>1</li>
        <li>3</li>
        <li>5
        </li>
       </ul>`
    });

    test('it should print 3', () => {
        const ul = document.querySelector('.ul-comment');
        const result = countComments(ul);
        expect(result).toBe(3);
    });
})