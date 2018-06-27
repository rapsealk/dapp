const Token = artifacts.require("Token.sol");
const Trade = artifacts.require("Trade.sol");

module.exports = async (deployer) => {
    deployer.deploy(Token, 10000)
        .then(function() {
            deployer.deploy(Trade, Token.address);
        });
/*
        try {
        await deployer.deploy(Token, 100);
        console.log('Deployed Token:', Token);
        await deployer.deploy(Trade, Token.address);
        console.log('Deployed Trade:', Trade);
    }
    catch (error) {
        throw error;
    }
*/    
    // deployer.deploy(Source);
    /*
        .then(() => {
            console.log('Source.address:', Source.address);
        })
        .then(() => Source.deployed())
        .then(_instance => console.log(_instance.address));
    */
};