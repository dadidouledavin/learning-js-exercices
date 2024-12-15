const test = require('./9'),
    expect = require('chai').expect
describe('Exercice 9', () => {

    it('Les objets devraient avoir une propriété full name en plus', () => {
        expect(test()).to.deep.equal([
            {
                firstname: 'Jon',
                lastname: 'Snow',
                fullname: 'Jon Snow'
            },
            {
                firstname: 'Daenerys',
                lastname: 'Targaryen',
                fullname: 'Daenerys Targaryen'
            },
            {
                firstname: 'Tyrion',
                lastname: 'Lannister',
                fullname: 'Tyrion Lannister'
            }
        ]);
    });
})