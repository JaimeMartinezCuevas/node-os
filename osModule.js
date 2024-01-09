// osModule.js

const os = require('os');

const getOSInfo = () => {
  return {
    Nombre: os.type(),
    Tipo: os.platform(),
    Versión: os.version(),
    Arquitectura: os.arch(),
    CPUs: os.cpus().length,
    MemoriaTotal: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
    MemoriaLibre: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`
  };
};

module.exports = getOSInfo;