/*eslint-disable no-unused-vars*/
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useScroller from './useScroller'
import array from './first'

// let array = [`red`, `green`, `blue`]

let App = () => {
    let [currentScreen, scrollTo, Scroller] = useScroller()
    return <Wrapper>
        <Header visible={currentScreen > 0} >
            {
                array.map((item, index) => {
                    return (
                        <div key={index} onClick={() => { scrollTo(index) }} >screen {index}</div>
                    )
                })
            }
        </Header>
        <Scroller>
            {
                array.map((item, index) => {
                    return (
                        <div key={index}>{item()}</div>
                    )
                })
            }
        </Scroller>
    </Wrapper>
}

export default App

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
@media (min-width: 320px) and (max-width: 480px) {
    
}`

const Header = styled.div`
display: flex
justify-content: space-around;
align-items: center;
flex-direction: row;
width: 100vw;
height: 8vh;
position: fixed;
top: 0;
transition: 0.2s;
visibility: ${props => props.visible ? `visible`: `hidden`};
@media (min-width: 320px) and (max-width: 480px) {
    
}`

const Block = styled.div`
display: flex
justify-content: center;
align-items: center;
flex-direction: column;
transition: 0.2s;
width: 100vw;
height: 100vh;
background-color: ${props => props.color};
@media (min-width: 320px) and (max-width: 480px) {
    
}`
/*eslint-enable no-unused-vars*/