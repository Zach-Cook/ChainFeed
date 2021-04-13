import Web3 from 'web3';

export default function getPrice(oracleAddress){
    const CHAINLINK_ORACLE_ABI = [
        {
            "constant": true,
            "inputs": [],
            "name": "latestAnswer",
            "outputs": [
                {
                    "name": "",
                    "type": "int256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "latestTimestamp",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]

    let w3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURAPROJECTID}`));

    let oracle = new w3.eth.Contract(CHAINLINK_ORACLE_ABI, oracleAddress);


    const price = oracle.methods.latestAnswer().call()


    return { price: price}

}
    