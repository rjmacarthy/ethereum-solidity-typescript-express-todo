Ethereum / Solidity, Typescript and Express.js Todo List
=======================================================

This project uses a solidity smart contract to keep track of a list of todos.

# Installation

To deploy the contracts, you need `truffle` installed globally and also `testrpc` command available to run a test ethereum network.

Run `testrpc` in a separate terminal.  

To deploy the todo contract run this command.

```
truffle migrate --reset
```

If this all works install the server and API dependencies.

```
cd server
npm install 
```

To run the server once the contract is deployed and the server is installed.

```
npm run build
npm run serve
```

Or to dev

```
npm run dev
```


# Methods

GET `/listtodos` - List the todos.

POST `/addtodo/:todoName` - Add a todo.

POST `/completeTodo/:todoIndex` - Complete a todo.


# Typescript

Typescript will output the compiled code to the `server/dist` folder.

# License

MIT - Do with as you like.
