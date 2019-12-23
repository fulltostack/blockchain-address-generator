const bip39 = require('bip39');
const bipPath = require('bip32-path');

const isValidMnemonic = mnemonic => bip39.validateMnemonic(mnemonic);

const isValidPath = path => bipPath.validateString(path);

module.exports = { isValidMnemonic, isValidPath };
