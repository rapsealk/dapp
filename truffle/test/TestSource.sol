pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Source.sol";

contract TestSource {

    Source source = Source(DeployedAddresses.Source());

    function testUserCanOffer() public {
        bytes32 hashId = 0x0A5B;

        bytes32 result = source.offer(hashId);
        bytes32 expected = keccak256(abi.encodePacked(hashId, this, block.number));

        Assert.equal(result, expected, "Offering data should be recorded.");
    }
}