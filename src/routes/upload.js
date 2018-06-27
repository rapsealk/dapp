const express = require('express');
const router = express.Router();

const multer = require('multer');
const STORAGE_PATH = 'storage/';
const upload = multer({
	// dest: STORAGE_PATH,
	limits: {
		fileSize: 5 * 1024 * 1024	// 5 MB
	},
	storage: multer.diskStorage({
		destination: (req, file, callback) => {
			callback(null, STORAGE_PATH);
		},
		filename: (req, file, callback) => {
			let newName = `${Date.now()}.${file.originalname.split('.').pop()}`;
			callback(null, newName);
		}
	})
});

const contracts = require('../dapp/contracts');

router.get('/', function(req, res) {
	res.end(`
		<script type="text/javascript">
			alert('invalid access');
			window.location.href = '/';
		</script>
	`);
});

router.post('/', upload.single('file'), async (req, res) => {

	console.log('req.file:', req.file);

	try {
		const accounts = await contracts.getAccounts();
	
		const account = accounts[1];
		// const receipt = await contracts.trade(account, '1000');
		// const receipt = await contracts.fund(account, '7');
		// await contracts.fund(account, '10');
		// console.log('fund receipt:', receipt);
	
		await contracts.provideData(account, req.file.filename);

		// console.log('receipt:', receipt);
	}
	catch (error) {
		console.error(error);
	}
	finally {
		// res.json({ succeed: true });
		res.redirect('/');
	}

	/*
	let receipt = await contracts.transfer(accounts[1], accounts[1], '10');
	console.log('transfer result >>');
	console.log('blockNumber:', receipt.blockNumber);
	console.log('blockHash:', receipt.blockHash);
	*/
});

module.exports = router;