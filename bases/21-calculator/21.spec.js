const test = require('./21'),
	expect = require('chai').expect;

describe('Exercice base 21 calculator', () => {
	it('La fonction devrait pouvoir calculer des additions', () => {
		expect(test()(1, 2, '+')).to.deep.equal(3);
		expect(test()(7, 9, '+')).to.deep.equal(16);
		expect(test()(100, 98, '+')).to.deep.equal(198);
	});

	it('La fonction devrait pouvoir calculer des soustractions', () => {
		expect(test()(1, 2, '-')).to.deep.equal(-1);
		expect(test()(7, 9, '-')).to.deep.equal(-2);
		expect(test()(100, 98, '-')).to.deep.equal(2);
	});

	it('La fonction devrait pouvoir calculer des multiplications', () => {
		expect(test()(1, 2, '*')).to.deep.equal(2);
		expect(test()(7, 9, '*')).to.deep.equal(63);
		expect(test()(100, 98, '*')).to.deep.equal(9800);
	});

	it('La fonction devrait pouvoir calculer des divisions', () => {
		expect(test()(1, 2, '/')).to.deep.equal(0.5);
		expect(test()(7, 9, '/')).to.deep.equal(0.7777777777777778);
		expect(test()(100, 2, '/')).to.deep.equal(50);
	});
});
