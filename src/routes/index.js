const express = require('express');
const router = express.Router();

const Contract = require('../dapp/contracts');

router.get('/', async function(req, res) {

	let accounts = await Contract.getAccounts();
	console.log(accounts);

	let account = accounts[1];
	let amount = await Contract.getBalanceOf(account, password='') || -1;
	console.log('amount:', amount);

	await Contract.getData(account, password='');

	res.render('index', { account: account, amount: amount });
});

module.exports = router;