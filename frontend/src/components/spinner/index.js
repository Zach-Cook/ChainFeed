import React from 'react'
import './styles/spinner.css'


export default function Spinner({children, ...restProps}){
    return (
        <>

            <div class="spin-container">
                <div class="spin" id="loader"></div>
                <div class="spin" id="loader2"></div>
                <div class="spin" id="loader3"></div>
                <div class="spin" id="loader4"></div>
                <span id="text">LOADING...</span>
            </div>

        </>
    )
}