import Web3 from 'web3';
import BigNumber from 'bignumber.js'

export default function getPriceFeed(){


    // add a try except for debugging
    const web3 = new Web3(`https://kovan.infura.io/v3/${process.env.REACT_APP_INFURAPROJECTID}`);
    const aggregatorV3InterfaceABI = [
        {"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
    const addr = "0x9326BFA02ADD2366b30bacB125260Af641031331";
    const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);
    priceFeed.methods.latestRoundData().call()
        .then((roundData) => {
            // Do something with roundData
            console.log("Latest Round Data", roundData)

            return roundData
        });
        

}


export function getPrice(){
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


    const ORACLE_ADDRESS = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
    let w3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURAPROJECTID}`));

    let oracle = new w3.eth.Contract(CHAINLINK_ORACLE_ABI, ORACLE_ADDRESS);

    const price = oracle.methods.latestAnswer().call() 
    const timeStamp = oracle.methods.latestTimestamp().call()
    
    return { price: price, timeStamp: timeStamp }

}
    