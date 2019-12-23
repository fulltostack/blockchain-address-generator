const config = require('./config');
const { getAllKeys } = require('./keys');
const getWalletAddress = require('./src/walletAddress');
const { isValidMnemonic, isValidPath } = require('./src/utils');

const derivationPath = config.get('derivation_path');
const mnemonic = config.get('mnemonic');
const blockchain = config.get('blockchain');
const environment = config.get('blockchain_environment');

const main = () => {

  if (!isValidMnemonic(mnemonic)) {
    throw Error(`Invalid Mnemonic. ${mnemonic}`);
  }

  if (!isValidPath(derivationPath)) {
    throw Error(`Invalid Derivation Path. ${derivationPath}`);
  }

  const isEthClone = (blockchain === 'ETH' || blockchain === 'ETC');
  const { xPrivKey, xPubKey, privKey, pubKey } = getAllKeys(mnemonic, derivationPath);
  const walletAddress = getWalletAddress(privKey, pubKey, environment, blockchain);

  console.log('Extended Private Key:', xPrivKey);
  console.log('Extended Public Key:', xPubKey);
  console.log('Private Key:', isEthClone ? `0x${privKey}` : privKey);
  console.log('Public Key:', isEthClone ? `0x${pubKey}` : pubKey);
  console.log('Wallet Address:', walletAddress);
}

module.exports = main;