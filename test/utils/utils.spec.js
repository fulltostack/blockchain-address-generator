const { isValidMnemonic, isValidPath } = require('../../src/utils');
const should = require('chai').should();
const expect = require('chai').expect;

describe('Validate Mnemonic and Derivation path', () => {
  
  const validMnemonic = "cement lunar mass act cause old aerobic position guitar crawl refuse thrive";
  const invalidMnemonic = "abcd lunar mass act cause old aerobic position guitar crawl refuse thrive";
  const validPath = "m/44'/0'/0";
  const invalidPath = "m/44'/0'/s";

  it('should return true for valid mnemonic', () => {
    const validateMnemonic = isValidMnemonic(validMnemonic);

    validateMnemonic.should.equal(true);
  });

  it('should return true for valid derivation path', () => {
    const validatePath = isValidPath(validPath);

    validatePath.should.equal(true);
  });

  it('should return error for invalid mnemonic', () => {
    const validateMnemonic = isValidMnemonic(invalidMnemonic);

    validateMnemonic.should.equal(false);
  });

  it('should return error for invalid derivation path', () => {
    const validatePath = isValidPath(invalidPath);

    validatePath.should.equal(false);
  });
});
