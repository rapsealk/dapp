pragma solidity ^0.4.23;

contract Source {
    
    mapping (bytes32 => address) public ownerOf;
    mapping (address => bytes32[]) public offeredBy;

    constructor() public {
        
    }

    // function offer(hash _dataId) public returns ()
    function offer(bytes32 _hashId) public returns (bytes32) {
        ownerOf[_hashId] = msg.sender;
        bytes32[] storage database = offeredBy[msg.sender];
        database[database.length] = _hashId;

        return keccak256(abi.encodePacked(_hashId, msg.sender, block.number));
    }

    /* Gas requirement of this function is high: infinite.
    function loadData() public view returns (bytes32[]) {
        return offeredBy[msg.sender];
    }
    */
}