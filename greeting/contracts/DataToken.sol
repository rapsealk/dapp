pragma solidity ^0.4.23;

contract DataToken {
    
    string public constant name = "Decentralized Artificial Intelligence Token";
    string public constant symbol = "DATs";
    uint8 public decimals = 18;
    // string public name = "Wallet Compatible Token";
    // string public symbol = "WCTs";
    // uint8 public decimals = 18;
    
    mapping (address => uint256) public balanceOf;
    
    event Transfer(address indexed _from, address indexed _to, uint256 _amount);
    
    constructor(uint256 initialSupply) public {
        balanceOf[msg.sender] = initialSupply;
    }
    /*
    function WalletCompatibleToken(string tokenName, string tokenSymbol, uint8 decimalUnits, uint256 initialSupply) public {
        name = tokenName;
        symbol = tokenSymbol;
        decimals = decimalUnits;
        balanceOf[msg.sender] = initialSupply;
    }
    */
    
    function transfer(address _to, uint256 _amount) public {
        require(balanceOf[msg.sender] >= _amount);
        if (balanceOf[_to] + _amount < balanceOf[_to]) revert();
        
        balanceOf[msg.sender] -= _amount;
        balanceOf[_to] += _amount;
        emit Transfer(msg.sender, _to, _amount);
    }
}