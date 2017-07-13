pragma solidity ^0.4.4;
import "./EternalStorage.sol";

contract HelloWorld {
    address public owner; 
    string public message; 
	EternalStorage public eternalStorage;

    function HelloWorld() {
        owner = msg.sender; 
        message = 'Hello, world'; 
		eternalStorage = new EternalStorage();
    }

	function setMessage(string _message) {
		message = _message;
	}

	function set(bytes32 record, int value) {
		eternalStorage.setIntValue(record, value);
	}

	 function get(bytes32 record) constant returns (int){
        return eternalStorage.getIntValue(record);
    }
}
