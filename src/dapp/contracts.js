const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
// const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/EcBohFQTnBqLW6ExBeXO'));

const ABI = require('./abi');
const Address = require('./address');

const tokenABI = ABI.Token;
const tokenAddress = Address.Token;
const TokenContract = new web3.eth.Contract(tokenABI, tokenAddress);

const tradeABI = ABI.Trade;
const tradeAddress = Address.Trade;
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
/*
exports.fund = async (from, password, value) => {
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
*/
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
		await TradeContract.methods.provideData(web3.utils.stringToHex(data).toString(0, 32)).send({
			from: address,
			// value: web3.utils.toWei(value, 'ether'),
			gas: web3.utils.toWei('1000000', 'wei'),
			//gas: web3.utils.toWei('700000', 'wei'), // web3.utils.toWei('8000000000000', 'wei'), // 65395990,
			// data: web3.utils.stringToHex(data) // web3.utils.stringToHex(data)
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