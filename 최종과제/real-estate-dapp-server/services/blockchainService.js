const Web3 = require('web3');
const contract = require('@truffle/contract');
const contractArtifact = require('../../abis/RealEstateContract.json');

const initWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      } else if (window.web3) {
        resolve(window.web3);
      } else {
        reject('Must install MetaMask');
      }
    });
  });
};

const getContractInstance = async (web3) => {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = contractArtifact.networks[networkId];
  const instance = new web3.eth.Contract(
    contractArtifact.abi,
    deployedNetwork && deployedNetwork.address,
  );
  return instance;
};

module.exports = { initWeb3, getContractInstance };