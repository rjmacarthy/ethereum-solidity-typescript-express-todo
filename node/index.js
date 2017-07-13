var Web3 = require('web3');
var web3 = new Web3();
var contractBuild = require('../build/contracts/HelloWorld.json');
var contractAddress = '0x995addc1eb6ee4e72b78175ac17a36d8556dd46b';

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

web3.eth.defaultAccount = web3.eth.coinbase;

var contract = web3.eth.contract(contractBuild.abi).at(contractAddress);

contract.setMessage('pimpin');

console.log(contract.message.call());

