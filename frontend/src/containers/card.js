import React from 'react';
import usePriceData from '../hooks/usepricedata';
import usdPairs from '../data/usdpairs.json';
import LINK from '../images/LINK.svg'

import { Card } from '../components';


export default function CardContainer(){

    const usdPriceData = usePriceData(usdPairs, 'USD')

    return (
        <>
            <Card>
                <Card.PairType>USD PAIRS</Card.PairType>
                <Card.CardGrid>
                    {
                        usdPriceData ?
                        usdPriceData.map((price)=> (

                            <Card.CardItem key={price.id}>
                                <Card.ItemInnerTop>
                                    <Card.ItemLogo src={LINK}/>
                                    <Card.ItemPairTitle>{price.pair}</Card.ItemPairTitle>
                                </Card.ItemInnerTop>
                                <Card.ItemInnerBottom>
                                    <Card.ItemInnerPrice>${price.price}</Card.ItemInnerPrice>
                                </Card.ItemInnerBottom>
                            </Card.CardItem>
                            
                        ))
                            :
                            <h1>Loading</h1>
   
                    }

                    
                </Card.CardGrid>
            </Card>
        </>
    )
}