pragma solidity ^0.4.4;


contract LoversBridge {
    address public owner;
    Message[] public messages;
    mapping(address => bytes32) donations;

    //Events
    event Donation(address from, string _msg, uint amount);

   // Main contract
    function LoversBridge () {
        owner = msg.sender;
    }

    struct Message {
        uint id;
        bytes32 firstName;
        bytes32 secondName;
        bytes32 message;
    }

    //Utilities
    modifier isOwner () {
        require(msg.sender == owner);
        _;
    }

    function getBalance () constant returns (uint) {
        return this.balance;
    }

    function changeOwner (address newOwner) isOwner returns (bool) {
        require(newOwner != owner);
        owner = newOwner;
        return true;
    }

    function Donate () payable {
        Donation(msg.sender, 'Donation received. Thanks!', msg.value);
    }

    function recordMessage (bytes32 firstName, bytes32 secondName, bytes32 _msg) returns (bool) {
        uint id = messages.length + 1;
        messages.push(Message(id, firstName, secondName, _msg));
        return true;
    }

    function getMessages() constant returns (uint[], bytes32[], bytes32[], bytes32[]) {
        uint length = messages.length;
        uint[] memory ids = new uint[](length);
        bytes32[] memory firstNames = new bytes32[](length);
        bytes32[] memory secondNames = new bytes32[](length);
        bytes32[] memory msgs = new bytes32[](length);
        for (uint i = 0; i < length; i++) {
            ids[i] = messages[i].id;
            firstNames[i] = messages[i].firstName;
            secondNames[i] = messages[i].secondName;
            msgs[i] = messages[i].message;
        }
        return (ids, firstNames, secondNames, msgs);
   }

    function kill () isOwner returns (bool) {
        suicide(owner);
        return true;
    }
}

//"test", "test", "test"