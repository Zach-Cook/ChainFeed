import React from 'react'

import { About } from '../components';
import { openInNewTab } from '../helpers/openinnewtab';

export default function AboutContainer(){



    return (

        <>

            <About>
                <About.TitleFrame>
                    <About.Title>About</About.Title>
                </About.TitleFrame>
                <About.Horizontal/>
                <About.ContentFrame>
                    <About.ContentTitle>---- The Oracle Problem</About.ContentTitle>
                    <About.ParagraphText>Blockchains are great at managing the state of on-chain data but have no inherent access to important information off-chain. For the success of Decentralized Blockchain technology, Blockchain networks must have access to important information that lies off-chain. For example, how would a smart contract have access to the price of wheat? How does this data get on-chain while maintaining decentralization?</About.ParagraphText>
                    <About.ContentTitle>---- The Solution</About.ContentTitle>
                    <About.ParagraphText>To get this off-chain data onto a Blockchain, we use an oracle. An oracle is a piece of software that inputs off-chain data onto the chain. Although this provides access to external data, we must ensure that this data is verifiable and not falsely manipulated by one single party. Chainlink provides this solution.</About.ParagraphText>
                    <About.ContentTitle>---- Chainlink</About.ContentTitle>
                    <About.ParagraphText>Chainlink is a network of oracles that provide verifiable external data to a single point that is callable by a smart contract. Per source, there is a network of parties called oracles, that retrieve, validate, and deliver data to one single source of truth. Now, smart contracts can have access to trustworthy information.</About.ParagraphText>
                    <About.ContentTitle>---- Learn More</About.ContentTitle>
                    <About.LearnMoreFrame>
                        <About.ParagraphText>For a more information please visit the Chainlink Blog: </About.ParagraphText>
                        <About.ParagraphText
                            textDecoration='underline'
                            marginLeft='10px'
                            cursor='pointer'
                            onClick={() => openInNewTab('https://blog.chain.link/what-is-chainlink/')}
                        >
                        blog.chain.link
                        </About.ParagraphText>
                    </About.LearnMoreFrame>
                </About.ContentFrame>
            </About>
        </>
    )
}