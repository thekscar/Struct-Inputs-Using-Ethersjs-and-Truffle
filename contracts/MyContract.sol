pragma solidity 0.4.24;
pragma experimental ABIEncoderV2;

contract MyContract {

    struct Data {
        uint256 number; 
        address person;
        bytes32 random; 
    }

    Data[] public data; 
    
    function addStruct(Data _data) public returns(bool){
        data.push(_data);
        return true;
    } 

}
