const getWalletAddress = require('../../src/walletAddress');
const expect = require('chai').expect;
const should = require('chai').should();

describe('Generate Address', () => {

  const privateKey = '2b469e7a85f0bb78c2f7ec3c2c3daca1f884042f1776bcebafd879845f795d74';
  const publicKey = '02cd979f8278405ee92a8609a1fc7af8218c99cf39aafc3431c0230050b4a58640';

  // Mainnet Addresses
  const expectedBTCMainnetAddr = '1KXkWEJ2TCZCWbeNjyxjcPhtXH1d6aMHz4';
  const expectedLTCMainnetAddr = 'LdkhmSbrXroFmQLXv7x2tQmejVNu9rovUE';
  const expectedDASHMainnetAddr = 'XuDbLUwvQumnfYExbsGxTvPgMcbK8BJhrE';
  const expectedDOGEMainnetAddr = 'DPfr3VEfkcTV3bpyUZxJA9sVQQjvMmyXrk';
  const expectedETHMainnetAddr = '0x548eb81b4ec958d9f8e542e9501a92f2c08889f2';

  // Testnet Addresses
  const expectedBTCTestnetAddr = 'mz3hoHP1GDzTHi7zTYw7SJvDPGcL1RSeFS';
  const expectedDASHTestnetAddr = 'yerCMS2MrTRs1HAWAibMVwp2du5gbCyBF6';
  const expectedDOGETestnetAddr = 'nniumVyagavCvaQAWPbkQZTneH8DLfhqtB';
  const expectedETHTestnetAddr = '0x548eb81b4ec958d9f8e542e9501a92f2c08889f2';

  it('should generate wallet address for BTC mainnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'livenet', 'BTC');

    address.should.equal(expectedBTCMainnetAddr);
    address.should.be.a('string');
  });

  it('should generate wallet address for LTC mainnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'livenet', 'LTC');

    address.should.equal(expectedLTCMainnetAddr);
    address.should.be.a('string');
  });

  it('should generate wallet address for DASH mainnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'livenet', 'DASH');

    address.should.equal(expectedDASHMainnetAddr);
    address.should.be.a('string');
  });

  it('should generate wallet address for DOGE mainnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'livenet', 'DOGE');

    address.should.equal(expectedDOGEMainnetAddr);
    address.should.be.a('string');
  });

  it('should generate wallet address for BCH mainnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'livenet', 'BCH');

    address.should.equal(expectedBTCMainnetAddr);
    address.should.be.a('string');
  });

  it('should generate wallet address for ETH mainnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'livenet', 'ETH');

    address.should.equal(expectedETHMainnetAddr);
    address.should.be.a('string');
    expect(expectedETHMainnetAddr).to.include('0x');
  });

  it('should generate wallet address for ETC mainnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'livenet', 'ETC');

    address.should.equal(expectedETHMainnetAddr);
    address.should.be.a('string');
    expect(expectedETHMainnetAddr).to.include('0x');
  });

  it('should generate wallet address for BTC testnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'testnet', 'BTC');

    address.should.equal(expectedBTCTestnetAddr);
    address.should.be.a('string');
  });

  it('should generate wallet address for LTC testnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'testnet', 'LTC');

    address.should.equal(expectedBTCTestnetAddr);
    address.should.be.a('string');
  });

  it('should generate wallet address for DASH testnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'testnet', 'DASH');

    address.should.equal(expectedDASHTestnetAddr);
    address.should.be.a('string');
  });

  it('should generate wallet address for DOGE testnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'testnet', 'DOGE');

    address.should.equal(expectedDOGETestnetAddr);
    address.should.be.a('string');
  });

  it('should generate wallet address for BCH testnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'testnet', 'BCH');

    address.should.equal(expectedBTCTestnetAddr);
    address.should.be.a('string');
  });

  it('should generate wallet address for ETH testnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'testnet', 'ETH');

    address.should.equal(expectedETHTestnetAddr);
    address.should.be.a('string');
    expect(expectedETHTestnetAddr).to.include('0x');
  });

  it('should generate wallet address for ETC testnet', () => {
    const address = getWalletAddress(privateKey, publicKey, 'testnet', 'ETC');

    address.should.equal(expectedETHTestnetAddr);
    address.should.be.a('string');
    expect(expectedETHTestnetAddr).to.include('0x');
  });

});
