import { expect } from 'chai';

describe('Service Test', () => {

    it('placeholder', async () => {
        let result;

        try {
            result = true;
        } catch (ex) {
            result = false;
        }

        expect(result).to.deep.equal(true);
    });
});