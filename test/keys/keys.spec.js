const { getAllKeys } = require('../../src/keys');
const should = require('chai').should();
const expect = require('chai').expect;

describe('Generate Public and Private Keys', () => {

  const mnemonic = "cement lunar mass act cause old aerobic position guitar crawl refuse thrive";
  const derivationPath = "m/44'/0'/0";
  const expectedXPrivKey = "xprv9xn6J86cQDtrMbn6x139oaWy1tBsZn3yuwmLfBwmNZYGZUricmkLKSnGY1WTekpV98m4wmYeZ7pgp29nFgQ5fEf215UTM7eEB2eqWzvcrQT";
  const expectedXPubKey = "xpub6BmShddWEbT9a5ra42aAAiThZv2MyEmqHAgwTaMNvu5FSHBsAK4asF6kPJvr8TPKrfJiPxvZz8ikhF7M2XwgLPAopY5zG4GS5ryAZYVBp1H";
  const expectedPrivateKey = '299c0d82d3d2b12bfa431cd27651d11eb3b740e3671290f1b2aded52896a9726';
  const expectedPublicKey = '03645dbfaa6da67bd47beab178a89653f48bda5f620aaa5c8949613faab7a3064f';

  it('should get all keys from mnemonic and derivation path', () => {
    const { xPrivKey, xPubKey, privKey, pubKey }  = getAllKeys(mnemonic, derivationPath);

    xPrivKey.should.equal(expectedXPrivKey);
    xPrivKey.should.be.a('string');
    expect(xPrivKey).to.include('xprv');

    xPubKey.should.equal(expectedXPubKey);
    xPubKey.should.be.a('string');
    expect(xPubKey).to.include('xpub');

    privKey.should.equal(expectedPrivateKey);
    privKey.should.be.a('string');

    pubKey.should.equal(expectedPublicKey);
    pubKey.should.be.a('string');
  });
});
