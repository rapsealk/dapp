pragma solidity ^0.4.18;

contract TokenV01 {

    string public name = "Decentralized Artificial Intelligence Token";
    string public symbol = "DATs";
    uint8 public decimanls = 18;

    mapping (address => uint256) public balanceOf;

    event Transfer(address _from, address _to, uint _value);

    //*
    constructor
    /*/
    function TokenV01
    //*/
    (uint256 initialSupply) public {
        balanceOf[msg.sender] = initialSupply;
    }

    function transfer(address _to, uint256 _amount) public {
        if (balanceOf[msg.sender] < _amount ||
            balanceOf[_to] + _amount < balanceOf[_to]) revert();

        balanceOf[msg.sender] -= _amount;
        balanceOf[_to] += _amount;

        emit Transfer(msg.sender, _to, _amount);
    }
}