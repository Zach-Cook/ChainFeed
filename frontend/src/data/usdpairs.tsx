import { images } from '../images/imageimport'

interface pairsProps {
    [index: number]: {id: string | null; pair: string | null; contractAddress: string; iconPath: string | null; price?: string; }
}

export const usdPairs: any = [
    {
        id: "1",
        pair: "ETH / USD",
        contractAddress: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
        iconPath: images.ETH
    },
    {
        id: "2",
        pair: "BTC / USD",
        contractAddress: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
        iconPath: images.BTC
    },
    {
        id: "3",
        pair: "LINK / USD",
        contractAddress: "0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c",
        iconPath: images.LINK
    }
    , {
        id: "4",
        pair: "SNX / USD",
        contractAddress: "0xDC3EA94CD0AC27d9A86C180091e7f78C683d3699",
        iconPath: images.SNX
    },
    {
        id: "5",
        pair: "BCH / USD",
        contractAddress: "0x9F0F69428F923D6c95B781F89E165C9b2df9789D",
        iconPath: images.BCH
    },
    {
        id: "6",
        pair: "COMP / USD",
        contractAddress: "0xdbd020CAeF83eFd542f4De03e3cF0C28A4428bd5",
        iconPath: images.COMP
    },
    {
        id: "7",
        pair: "DASH / USD",
        contractAddress: "0xFb0cADFEa136E9E343cfb55B863a6Df8348ab912",
        iconPath: images.DASH
    },
    {
        id: "8",
        pair: "EOS / USD",
        contractAddress: "0x10a43289895eAff840E8d45995BBa89f9115ECEe",
        iconPath: images.EOS
    },
    {
        id: "9",
        pair: "ETC / USD",
        contractAddress: "0xaEA2808407B7319A31A383B6F8B60f04BCa23cE2",
        iconPath: images.ETC
    },
    {
        id: "10",
        pair: "KNC / USD",
        contractAddress: "0xFb0cADFEa136E9E343cfb55B863a6Df8348ab912",
        iconPath: images.KNC
    }
    ,
    {
        id: "11",
        pair: "LTC / USD",
        contractAddress: "0x6AF09DF7563C363B5763b9102712EbeD3b9e859B",
        iconPath: images.LTC
    },

    {
        id: "12",
        pair: "XRP / USD",
        contractAddress: "0xCed2660c6Dd1Ffd856A5A82C67f3482d88C50b12",
        iconPath: images.XRP
    },
    {
        id: "13",
        pair: "AAVE / USD",
        contractAddress: "0x547a514d5e3769680Ce22B2361c10Ea13619e8a9",
        iconPath: images.AAVE
    },
    {
        id: "14",
        pair: "ADA / USD",
        contractAddress: "0xAE48c91dF1fE419994FFDa27da09D5aC69c30f55",
        iconPath: images.ADA
    }
    ,
    {
        id: "15",
        pair: "ADX / USD",
        contractAddress: "0x231e764B44b2C1b7Ca171fa8021A24ed520Cde10",
        iconPath: images.ADX
    },
    {
        id: "16",
        pair: "AMP / USD",
        contractAddress: "0x8797ABc4641dE76342b8acE9C63e3301DC35e3d8",
        iconPath: images.AMP
    },
    // {
    //     id: "17",
    //     pair: "AMPL / USD",
    //     contractAddress: "0xe20CA8D7546932360e37E9D72c1a47334af57706",
    //     iconPath: images.AMPL
    // },
    {
        id: "18",
        pair: "BAND / USD",
        contractAddress: "0x919C77ACc7373D000b329c1276C76586ed2Dd19F",
        iconPath: images.BAND
    }

    ,
    {
        id: "19",
        pair: "BNB / USD",
        contractAddress: "0x14e613AC84a31f709eadbdF89C6CC390fDc9540A",
        iconPath: images.BNB
    },
    {
        id: "20",
        pair: "BNT / USD",
        contractAddress: "0x1E6cF0D433de4FE882A437ABC654F58E1e78548c",
        iconPath: images.BNT
    },
    {
        id: "21",
        pair: "COVER / USD",
        contractAddress: "0x0ad50393F11FfAc4dd0fe5F1056448ecb75226Cf",
        iconPath: images.COVER
    }

    ,
    {
        id: "22",
        pair: "DOT / USD",
        contractAddress: "0x1C07AFb8E2B827c5A4739C6d59Ae3A5035f28734",
        iconPath: images.DOT
    },
    {
        id: "23",
        pair: "FIL / USD",
        contractAddress: "0x1A31D42149e82Eb99777f903C08A2E41A00085d3",
        iconPath: images.FIL
    },
    {
        id: "24",
        pair: "FNX / USD",
        contractAddress: "0x80070f7151BdDbbB1361937ad4839317af99AE6c",
        iconPath: images.FNX
    }

    ,
    {
        id: "25",
        pair: "HEGIC / USD",
        contractAddress: "0xBFC189aC214E6A4a35EBC281ad15669619b75534",
        iconPath: images.HEGIC
    },
    {
        id: "26",
        pair: "INJ / USD",
        contractAddress: "0xaE2EbE3c4D20cE13cE47cbb49b6d7ee631Cd816e",
        iconPath: images.INJ
    },
    {
        id: "27",
        pair: "MATIC / USD",
        contractAddress: "0x7bAC85A8a13A4BcD8abb3eB7d6b4d632c5a57676",
        iconPath: images.MATIC
    }
    ,
    {
        id: "28",
        pair: "OXT / USD",
        contractAddress: "0xd75AAaE4AF0c398ca13e2667Be57AF2ccA8B5de6",
        iconPath: images.OXT
    },
    {
        id: "29",
        pair: "REN / USD",
        contractAddress: "0x0f59666EDE214281e956cb3b2D0d69415AfF4A01",
        iconPath: images.REN
    },
    {
        id: "30",
        pair: "SXP / USD",
        contractAddress: "0xFb0CfD6c19e25DB4a08D8a204a387cEa48Cc138f",
        iconPath: images.SXP
    },
    {
        id: "31",
        pair: "TRU / USD",
        contractAddress: "0x26929b85fE284EeAB939831002e1928183a10fb1",
        iconPath: images.TRU
    },
    {
        id: "32",
        pair: "TRX / USD",
        contractAddress: "0xacD0D1A29759CC01E8D925371B72cb2b5610EA25",
        iconPath: images.TRX
    },
    {
        id: "33",
        pair: "UNI / USD",
        contractAddress: "0x553303d460EE0afB37EdFf9bE42922D8FF63220e",
        iconPath: images.UNI
    },
    {
        id: "34",
        pair: "WAVES / USD",
        contractAddress: "0x9a79fdCd0E326dF6Fa34EA13c05d3106610798E9",
        iconPath: images.WAVES
    }
    ,
    {
        id: "35",
        pair: "XHV / USD",
        contractAddress: "0xeccBeEd9691d8521385259AE596CF00D68429de0",
        iconPath: images.XHV
    }
    ,
    {
        id: "36",
        pair: "XMR / USD",
        contractAddress: "0xFA66458Cce7Dd15D8650015c4fce4D278271618F",
        iconPath: images.XMR
    }
    ,
    {
        id: "37",
        pair: "XTZ / USD",
        contractAddress: "0x5239a625dEb44bF3EeAc2CD5366ba24b8e9DB63F",
        iconPath: images.XTZ
    },
    {
        id: "38",
        pair: "YFI / USD",
        contractAddress: "0xA027702dbb89fbd58938e4324ac03B58d812b0E1",
        iconPath: images.YFI
    },
    {
        id: "39",
        pair: "IOST / USD",
        contractAddress: "0xd0935838935349401c73a06FCde9d63f719e84E5",
        iconPath: images.IOST
    }
]