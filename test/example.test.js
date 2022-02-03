// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderGoblin } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="goblin">
<p>Ross from friends</p>
<p id="face1">😈</p>
<p id="hp1">666</p>
</div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGoblin({ name: `Ross from friends`, id: 1, hp: `666` });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
