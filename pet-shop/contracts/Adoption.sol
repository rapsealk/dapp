pragma solidity ^0.4.17;

contract Adoption {

    // public variables have automatic getter methods.
    address[16] public adopters;

    // Adopting a pet
    function adopt(uint petId) public returns (uint) {
        require(0 <= petId && petId < 16);

        adopters[petId] = msg.sender;

        return petId;
    }

    // Retrieving the adopters
    function getAdopters() public view returns (address[16]) {
        return adopters;
    }
}