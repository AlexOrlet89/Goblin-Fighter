// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderGoblin } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="goblin" id="DivId1"><p>Randy Johnson</p><p>&gt;:)</p><p id="GoblinHP1">8</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGoblin({ name: `Randy Johnson`, id: 1, hp: `8` });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
