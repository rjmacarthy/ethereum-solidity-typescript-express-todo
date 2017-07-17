pragma solidity ^0.4.4;

contract EternalStorage{

    mapping(bytes32 => uint) UIntStorage;
    mapping(bytes32 => string) StringStorage;
    mapping(bytes32 => address) AddressStorage;
    mapping(bytes32 => bytes) BytesStorage;
    mapping(bytes32 => bool) BooleanStorage;
    mapping(bytes32 => int) IntStorage;

    function getUIntValue(bytes32 record) constant returns (uint){
        return UIntStorage[record];
    }

    function setUIntValue(bytes32 record, uint value)
    {
        UIntStorage[record] = value;
    }

    function getStringValue(bytes32 record) constant returns (string){
        return StringStorage[record];
    }

    function setStringValue(bytes32 record, string value)
    {
        StringStorage[record] = value;
    }

    function getAddressValue(bytes32 record) constant returns (address){
        return AddressStorage[record];
    }

    function setAddressValue(bytes32 record, address value)
    {
        AddressStorage[record] = value;
    }

    function getBytesValue(bytes32 record) constant returns (bytes){
        return BytesStorage[record];
    }

    function setBytesValue(bytes32 record, bytes value)
    {
        BytesStorage[record] = value;
    }

    function getBooleanValue(bytes32 record) constant returns (bool){
        return BooleanStorage[record];
    }

    function setBooleanValue(bytes32 record, bool value)
    {
        BooleanStorage[record] = value;
    }

    function getIntValue(bytes32 record) constant returns (int){
        return IntStorage[record];
    }

    function setIntValue(bytes32 record, int value)
    {
        IntStorage[record] = value;
    }
}
