const { getBTCAddress, getETHAddress } = require('./address');

const getWalletAddress = (privateKey, publicKey, environment, coin) => {
  switch (coin) {
    case 'BTC':
    case 'LTC':
    case 'DOGE':
    case 'DASH':
    case 'BCH':
      return getBTCAddress(publicKey, environment, coin);
    case 'ETH':
    case 'ETC':
      return getETHAddress(privateKey);
  }
}

module.exports = getWalletAddress;
