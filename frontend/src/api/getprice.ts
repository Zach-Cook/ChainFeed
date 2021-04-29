import Web3 from 'web3';

export default function getPrice(oracleAddress : string){
    
    const CHAINLINK_ORACLE_ABI: any = [
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


    const price : Promise<number> = oracle.methods.latestAnswer().call()


    return { price: price}

}
    