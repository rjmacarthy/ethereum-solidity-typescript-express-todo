pragma solidity ^0.4.4;

contract TodoContract {

  Todo[] public todos;
  address public owner;
  uint initialId = 1;
  
  struct Todo {
    uint id;
    bytes32 name;
    bool completed;
  }

  function TodoContract() {

  }

  function addTodo(bytes32 todoName) returns (bool) {
    uint id = todos.length + 1;
    todos.push(Todo(id, todoName, false));
    return true;
  }

  function completeTodo(uint todoIndex) returns (bool) {
    if(todos[todoIndex].name.length > 0){
        todos[todoIndex].completed = true;
        return true;
    } else {
        revert();
    }
  }

  function getTodos() constant returns (uint[], bytes32[], bool[]) {
     uint length = todos.length;
     uint[] memory ids = new uint[](length);
     bytes32[] memory names = new bytes32[](length);
     bool[] memory completeds = new bool[](length);
     for (uint i = 0; i < length; i++) {
       ids[i] = todos[i].id;
       names[i] = todos[i].name;
       completeds[i] = todos[i].completed;
     }
     return (ids, names, completeds);
   }
}
