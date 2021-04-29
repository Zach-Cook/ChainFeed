import React from 'react'
import { Main } from '../components/main/index'

interface mainProps {
        children: JSX.Element | null;
}

export const MainContainer: React.FC<mainProps> = ({children}) => {
        return (
                <>
                        <Main>
                                {children}
                        </Main>
                </>
        );
}