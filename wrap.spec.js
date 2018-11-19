const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it("New lines are created at the maxLen if it's a space", () => {
    expect(wrap('Ceramic Galaxy', 8)).to.equal('Ceramic \nGalaxy');
  });

  it('New lines are not created in the middle of words', () => {
    expect(wrap('The quick brown fox', 12)).to.equal('The quick \nbrown fox');
  });

  it('New lines are not created in the middle of words', () => {
    expect(wrap('The quick brown fox jumps over the lazy dog.', 6)).to.equal('The \nquick \nbrown \nfox \njumps \nover \nthe \nlazy \ndog.');
  });
});
