import { expect } from 'chai';
import { hallo } from './hallo';

// this is a comment

describe(`Hallo`, () => {
    it(`should say Hallo to someone`, () => {
        const name = 'Someone';
        const result = hallo(name);
        expect(result).equal(`Hallo ${name}`);
    });
});
