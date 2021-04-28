import React from 'react'
import { About, TitleFrame, Title, Horizontal, ContentFrame, ContentTitle, ParagraphText, LearnMoreFrame, } from '../components/about/index'
import { openInNewTab } from '../helpers/openinnewtab';


export const AboutContainer: React.FC = ({}) => {
        return (
            <About>
                <TitleFrame>
                    <Title>About</Title>
                </TitleFrame>
                <Horizontal />
                <ContentFrame>
                    <ContentTitle>---- The Oracle Problem</ContentTitle>
                    <ParagraphText>Blockchains are great at managing the state of on-chain data but have no built in access to important information off-chain. For the success of Decentralized Blockchains, these networks must have access to important information that situate off-chain. For example, how would a smart contract have access to the price of wheat? How does this data get on-chain while maintaining decentralization?</ParagraphText>
                    <ContentTitle>---- The Solution</ContentTitle>
                    <ParagraphText>To get this off-chain data onto a Blockchain, we use an oracle. An oracle is software that inputs off-chain data onto the chain. Although this solves the problem of getting outside data onto the chain, a new problem arises. How does a blockchain verify that this information can be trusted? Trusting a single party to provide off-chain knowledge re-introduces the risk of centralization.</ParagraphText>
                    <ContentTitle>---- Chainlink</ContentTitle>
                    <ParagraphText>Chainlink is a network of oracles that provide verifiable external data to a blockchain. Per source of data, there are numbers of oracles, that retrieve, validate, and deliver data on-chain. The implementation of Chainlink allows smart contracts to trustlessly interact with off chain data. This solves the inherent oracle problem while maintaining the integrity of decentralization.</ParagraphText>
                    <ContentTitle>---- Learn More</ContentTitle>
                    <LearnMoreFrame>
                        <ParagraphText>For more information visit the Chainlink Blog: </ParagraphText>
                        <ParagraphText
                            textDecoration='underline'
                            marginLeft='10px'
                            cursor='pointer'
                            onClick={() => openInNewTab('https://blog.chain.link/what-is-chainlink/')}
                        >
                        blog.chain.link
                        </ParagraphText>
                    </LearnMoreFrame>
                </ContentFrame>
            </About>
        );
}


