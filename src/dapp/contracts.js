const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

const Address = require('./address');

/*
const tradeABI = require('../../truffle/build/contracts/TradeV01.json').abi;
// const TradeContractAddress = require('../../truffle/build/contracts/TradeV01.json').networks['5777'].address;
const TradeContract = new web3.eth.Contract(tradeABI, Address.trade);
*/
// const CrowdFundingABI = require('../../truffle/build/contracts/CrowdFunding.json').abi;
const CrowdFundingABI = [ { "constant": false, "inputs": [], "name": "checkGoalReached", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "ended", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "numInvestors", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalAmount", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "status", "outputs": [ { "name": "", "type": "string", "value": "Funding" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "goalAmount", "outputs": [ { "name": "", "type": "uint256", "value": "1000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "deadline", "outputs": [ { "name": "", "type": "uint256", "value": "5130040841" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "investors", "outputs": [ { "name": "addr", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "amount", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xe5068b6a337963fefabdda6ffa158b9df384ef1b" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "fund", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "inputs": [ { "name": "_duration", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;duration", "template": "elements_input_uint", "value": "3600000000" }, { "name": "_goalAmount", "type": "uint256", "index": 1, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;goal Amount", "template": "elements_input_uint", "value": "1000" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ];
const CrowdFundingAddress = '0x2cF3d9d7EefC82d78a2D7eA803E5b1298F815355';
// const CrowdFundingContract = new web3.eth.Contract(CrowdFundingABI, '0x6F228f31075041FE3e7386e90b267C6912ACC68D');
const CrowdFundingContract = new web3.eth.Contract(CrowdFundingABI, CrowdFundingAddress);
/*
// console.log('Trade Address from ABI:', TradeContractAddress);
console.log('Trade Address from Deploy:', Address.trade);
*/

const tradeABI = [ { "constant": false, "inputs": [], "name": "provideData", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_address", "type": "address" } ], "name": "getTokenBalanceByAddress", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "tokenReward", "outputs": [ { "name": "", "type": "address", "value": "0x6f228f31075041fe3e7386e90b267c6912acc68d" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "uint256" } ], "name": "history", "outputs": [ { "name": "", "type": "bytes" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xe5068b6a337963fefabdda6ffa158b9df384ef1b" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getHistory", "outputs": [ { "name": "", "type": "bytes" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "tokenAddress", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "token Address", "template": "elements_input_address", "value": "0x6f228f31075041fe3e7386e90b267c6912acc68d" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ];
const tradeAddress = '0x32cb3408b1518a9AF37a0Fce7edf0799D2d19dCb';
const TradeContract = new web3.eth.Contract(tradeABI, tradeAddress);

/* Event WebSocket
const watchTradeEvent = () => {
	TradeContract.events.Transfer({}, (error, event) => {
		if (error) console.error(error);
		console.log('Trade Event:', event);
	})
		.on('data', function(event) {
			console.log('Trade Event::data:', event);
		})
		.on('changed', function(event) {
			console.log('Trade Event::changed:', event);
		})
		.on('error', console.error);
};
watchTradeEvent();
*/

/*
exports.pollingTransaction = id => {
	let transaction = web3.eth.getTransaction(id);
	if (transaction !== null) {
		console.log('mining done!');
		console.log('transaction:', transaction);
		return;
	}
	setTimeout(() => {
		transaction = web3.eth.getTransaction(id);
		if (transaction !== null) {
			console.log('mining done!');
			console.log('transaction:', transaction);
			clearTimeout(this);
		}
	}, 3000);

	this.pollingTransaction(id);
};
*/

exports.getAccounts = async () => {
	return await web3.eth.getAccounts();
};

exports.fund = async (from, password, value) => {
	//const methods = await CrowdFundingContract.methods;
	//console.log('methods:', methods);
	//console.log('methods.fund():', methods.fund());
	// const instance = await CrowdFundingContract.deployed();
	// console.log('instance:', instance);
	await web3.eth.personal.unlockAccount(from, password);
	CrowdFundingContract.methods.fund().send({
		from: from,
		value: web3.utils.toWei(value, 'ether'),
		gas: 5000000
	})
		.then((error, result) => {
			if (error) console.error(error);
			console.log('send result:', result);
		})
		.catch(error => console.error);
};

exports.getBalanceOf = async (address, password) => {
	// let instance = await TokenContract.deployed();
	try {
		await web3.eth.personal.unlockAccount(address, password);
		TradeContract.methods.getTokenBalanceByAddress(address).send({
			from: address,
			value: web3.utils.toWei('0', 'ether'),
			gas: 5000000
		})
			.then((error, result) => {
				if (error) throw error;
				console.log(`getBalanceOf(address: ${address}): ${result}`);
				return result;
			})
			.catch(error => console.error);
		// return await TradeContract.methods.balanceOf(address).call();
	}
	catch (error) {
		console.error(error);
		return 0;
	}
	finally {
		console.log(`getBalanceOf >> address: ${address}`);
	}
};

exports.provideData = async (address, password, data, value='10') => {
	try {
		await web3.eth.personal.unlockAccount(address, password);
		await TradeContract.methods.provideData().send({
			from: address,
			value: web3.utils.toWei(value, 'ether'),
			gas: web3.utils.toWei('8000000000000', 'wei'), // 65395990,
			data: web3.utils.stringToHex(data)
		});
	}
	catch (error) {
		console.error(error);
	}
	finally {
		console.log(`provideData >> data: ${data}`);
	}
};

/*
exports.airdrop = async (receiver, amount='1000') => {
	try {
		web3.eth.defaultAccount = receiver;
		return await web3.eth.sendTransaction({

		})
	}
};
*/

exports.trade = async (receiver, amount) => {
	try {
		//console.log('amount:', amount);
		//console.log('toWei:', web3.utils.toWei(amount, 'ether'));
		web3.eth.defaultAccount = receiver;
		return await web3.eth.sendTransaction({
			from: receiver,
			to: Address.trade,
			value: amount, // web3.utils.toWei(amount, 'ether'), // web3.utils.toWei(amount, 'ether'),
			gas: 121000
			// data: ''
		});
	}
	catch (error) {
		console.error(error);
		return null;
	}
	finally {
		console.log(`trade >> receiver: ${receiver}, amount: ${amount}`);
	}
};

/*
exports.transfer = async (_from, _to, _amount) => {
	try {
		let receipt = await web3.eth.sendTransaction({
			from: _from,
			to: _to,
			value: web3.utils.toWei(_amount),
			// value: _amount, // web3.toWei(_amount, 'ether')
			// data: ''
			gas: 100000
		});
		return receipt;
		// let transfer = await provisionContract.methods.transfer(_to, _amount);
		// console.log('transfer:', transfer);

		// return true;
	}
	catch (error) {
		console.error(error);
		return false;
	}
	finally {
		console.log('transfer::finally');
	}
};
*/

/*
exports.transfer = async (_to, _amount) => {
	try {
		return await TokenContract.methods.transfer(_to, _amount).call();
	}
	catch (error) {
		console.error(error);
		return false;
	}
	finally {
		console.log('transfer::finally');
	}
};
*/

exports.web3 = web3;