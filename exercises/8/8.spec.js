const test = require('./8'),
    expect = require('chai').expect
describe('Exercice 8', () => {

    it('Les films devraient être triés en fonction de leur note, en nombre et rammené sur 20', () => {
        expect(test()).to.deep.equal([
            {
                nom: 'Les razmokets',
                note: 20,
                tags: ['dessin annimés', 'Dynosaure', 'enfant']
            },
            {
                nom: 'Star wars - 1 ère trilogie',
                note: 18,
                tags: ['sf', 'espace', 'pewpew']
            },
            {
                nom: 'Seigneur des anneaux',
                note: 16,
                tags: ['fantaisie', 'forêt', 'piedspoilus']
            },
            {
                nom: '300',
                note: 14,
                tags: ['historique', 'baston', 'hommetoutnus']
            },
            {
                nom: 'Matrix',
                note: 12,
                tags: ['sf', 'pillule', 'smith']
            }
        ]);
    });
})