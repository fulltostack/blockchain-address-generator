const bip39 = require('bip39');
const bip32 = require('bip32');

const getNode = (mnemonic, path) => {
  const masterNode = bip32.fromSeed(bip39.mnemonicToSeed(mnemonic));
  return masterNode.derivePath(path);
}

const getExtendedPrivKey = childNode => childNode.toBase58();

const getExtendedPubKey = childNode => childNode.neutered().toBase58();

const getPrivKey = xprivChildNode => {
  const hdPrivNode = bip32.fromBase58(xprivChildNode);
  return hdPrivNode.privateKey.toString('hex');
}

const getPubKey = xpubChildNode => {
  const hdPubNode = bip32.fromBase58(xpubChildNode);
  return hdPubNode.publicKey.toString('hex');
}

const getAllKeys = (mnemonic, derivationPath) => {
  const childNode = getNode(mnemonic, derivationPath);
  const xPrivKey = getExtendedPrivKey(childNode);
  const xPubKey = getExtendedPubKey(childNode);
  return {
    xPrivKey,
    xPubKey,
    privKey: getPrivKey(xPrivKey),
    pubKey: getPubKey(xPubKey),
  }
}

module.exports = { 
  getAllKeys,
 };
