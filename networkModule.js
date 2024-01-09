// networkModule.js

const os = require('os');

const getNetworkInfo = () => {
  const interfaces = os.networkInterfaces();
  const networkData = {};

  for (let interface in interfaces) {
    networkData[interface] = [];
    interfaces[interface].forEach(details => {
      networkData[interface].push({
        Familia: details.family,
        Dirección: details.address,
        Interno: details.internal
      });
    });
  }

  return networkData;
};

module.exports = getNetworkInfo;