import { expect } from 'chai';
import  hallo  from './hallo';

import { another_import } from 'chai';

// this is a comment

describe(`Hallo`, () => {
    it(`should say Hallo to someone`, () => {
        const name = 'Someone';
        const result = hallo(name);
        expect(result).equal(`Hallo ${name}`);
        console.log('This is really a new line of code', name);  // really a new line
    })  // just remove the trailing semicolon
});
