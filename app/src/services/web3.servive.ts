import * as Web3 from 'web3';
import * as abi from '../../../build/contracts/LoversBridge.json';
import * as contract from 'truffle-contract';
const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);
const loversContract = contract(abi);
loversContract.setProvider(provider);
const loversInstance = (): Promise<any> => {
    return loversContract.deployed();
}
export { loversInstance, web3 };



