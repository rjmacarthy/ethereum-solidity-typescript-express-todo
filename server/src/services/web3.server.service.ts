import * as Web3 from 'web3';
import * as abi from '../../../build/contracts/TodoContract.json';
import * as contract from 'truffle-contract';
const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);
const todoContract = contract(abi);
todoContract.setProvider(provider);
const todoInstance = (): Promise<any> => {
    return todoContract.deployed();
}
export { todoInstance, web3 };



