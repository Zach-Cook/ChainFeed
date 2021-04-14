import React from 'react';
import { Main } from '../components'

export default function MainContainer({children}){
    
    return (
            <>
                <Main>
                    <Main.MainText>Price Data</Main.MainText>
                    {children}
                </Main>
            </>
        )
}