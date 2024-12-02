import { expect } from 'chai';
import  hallo  from './hallo';  // an import changed

import { another_import } from 'chai';  // an import added
import { one_more_import } from 'chai';  // an import added

// this is a comment

describe(`Hallo`, () => {
    it(`should say Hallo to someone`, () => {
        const name = 'Someone';
        const result = hallo(name);
        expect(result).equal(`Hallo ${name}`);
        // really a new line
        console.log('This is really a new line of code', name);  
    // in the line below we just remove the trailing semicolon
    })
});
