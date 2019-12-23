const convict = require('convict');

const schema = {
  blockchain: {
    doc: 'Blockchain Type',
    format: ['BTC', 'BCH', 'DASH', 'DOGE', 'ETH', 'ETC', 'LTC'],
    default: 'BTC',
    env: 'BLOCKCHAIN',
    arg: 'blockchain',
  },
  blockchain_environment: {
    doc: 'Blockchain environment configuration',
    format: ['livenet', 'testnet'],
    default: 'testnet',
    env: 'BLOCKCHAIN_ENVIRONMENT',
    arg: 'blockchain_environment',
  },
  derivation_path: {
    doc: 'Path for which xpriv, xpub, public key, private key and address will be derived',
    format: String,
    default: 'm/0',
    env: 'DERIVATION_PATH',
    arg: 'derivation_path',
  },
  mnemonic: {
    doc: 'Mnemonic',
    format: String,
    default: 'spend victory pony absurd uphold tenant casual media fork hollow champion stereo tip oppose field',
    env: 'MNEMONIC',
    arg: 'mnemonic',
  },
};

const envConfig = convict(schema);
envConfig.validate({ allowed: 'strict' });

module.exports = envConfig;
