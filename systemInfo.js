// systemInfo.js

const getOSInfo = require('./osModule');
const getNetworkInfo = require('./networkModule');

const osInfo = getOSInfo();
const networkInfo = getNetworkInfo();

console.log("Información del Sistema Operativo:");
for (let key in osInfo) {
  console.log(`${key}: ${osInfo[key]}`);
}

console.log("\nInformación de Red:");
for (let interface in networkInfo) {
  console.log(`Interfaz ${interface}:`);
  networkInfo[interface].forEach(data => {
    for (let key in data) {
      console.log(`  ${key}: ${data[key]}`);
    }
  });
}