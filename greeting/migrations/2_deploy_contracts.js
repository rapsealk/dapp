var DataToken = artifacts.require("./DataToken.sol");
var Provision = artifacts.require("./Provision.sol");

module.exports = function(deployer) {
	deployer.deploy(DataToken);
	deployer.deploy(Provision);
};