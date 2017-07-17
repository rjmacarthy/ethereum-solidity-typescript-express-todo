const Web3 = require('web3');
const abi = require('../build/contracts/TodoContract.json');
const program = require('commander');
var colors = require('colors');
var truffleContract = require('truffle-contract');
var contract = require('truffle-contract');

var provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);
var todoContract = contract(abi);

todoContract.setProvider(provider);

todoContract.deployed().then((instance) => {
    const app = instance;
    
    program
        .version('0.0.1')
        .command('add-todo [todoName]')
        .description('Add a new todo')
        .action((todoName) => {
            console.log(web3.eth.accounts[0]);
            app.addTodo(todoName, {
                from: web3.eth.accounts[0]
            }).then(() => {
                console.log(colors.green('Adding todo with name %s'), todoName)
            });
        });

    program.command('list-todos')
        .description('List contract todos')
        .action(() => {
            app.getTodos().then((todos) => console.log(todos));
            console.log(colors.green('Listing Todos'));
        });

    program.parse(process.argv);
});