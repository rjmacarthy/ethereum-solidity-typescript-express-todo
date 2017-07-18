const Web3 = require('web3');
const abi = require('../build/contracts/TodoContract.json');
const program = require('commander');
var colors = require('colors');
var truffleContract = require('truffle-contract');
var contract = require('truffle-contract');
var _ = require('lodash');
var provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);
var todoContract = contract(abi);

todoContract.setProvider(provider);

const toStr = (str) => {
    return web3.toUtf8(str)
}

todoContract.deployed().then((instance) => {
    const app = instance;
    program
        .version('0.0.1')
        .command('add [todoName]')
        .description('Add a new todo')
        .action((todoName) => {
            app.addTodo(todoName, {
                from: web3.eth.accounts[0]
            }).then(() => {
                console.log(colors.green('Added todo with name %s'), todoName);
            });
        });

    program
        .version('0.0.1')
        .command('list')
        .description('List contract todos')
        .action(() => {
            console.log(colors.green('Listing Todos'));
            app.getTodos().then((response) => {
                var len = 0;
                var arr = _.flatten(_.map(response, (todos, i) => {
                    len = todos.length;
                    return todos;
                }));
                var list = [];
                _.times(len, (i) => {
                    list.push({
                        id: arr[i].toString(),
                        name: toStr(arr[i + len].toString()),
                        complted: arr[i + len * 2].toString()
                    });
                })
                console.log(list);
            });
        });

    program
        .version('0.0.1')
        .command('complete [todoIndex]')
        .description('Complete a todo')
        .action((todoId) => {
            var todoId = '1';
            console.log(colors.green('Completing todo with index: %s'), todoIndex);
            app.completeTodo(todoIndex, {
                from: web3.eth.accounts[0]
            }).then(() => {
                console.log("Success!");
            });
        });

    program.parse(process.argv);
});