import React from 'react'

import { About } from '../components';


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
                    <About.ParagraphText>Blockchain's are great at managing the state of data on chain, but have no inherent access to important information off chain. For the success of Decentralized Blockchain technology, Blockchain networks must have access to important information that lies off chain. Here arises the problem. How does this data get on chain while maitaining decentralization?</About.ParagraphText>
                    <About.ContentTitle>---- The Solution</About.ContentTitle>
                    <About.ParagraphText>Blockchain's are as decentralized as their most decentralized point. To keep the decentralization of the network we must be able to provide off chain data in such a manner that no source of data is controlled or verified by one single party.</About.ParagraphText>
                    <About.ContentTitle>---- Chain Link</About.ContentTitle>
                    <About.ParagraphText>Blockchain's are as decentralized as their most decentralized point. To keep the decentralization of the Blockchain we must be able to provide off chain data in such a manner that no source of data is controlled or verified by one single party.</About.ParagraphText>
                </About.ContentFrame>
            </About>
        </>
    )
}