#/bin/sh
${HOME}/Library/Application\ Support/Mist/binaries/Geth/unpacked/geth --dev --ipcpath test-net/geth.ipc --datadir test-data --networkid 1234 --targetgaslimit 9000000 --rpc --rpcport 8545 --rpcapi db,eth,net,web3,personal,miner console
