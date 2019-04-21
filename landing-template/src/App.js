/*eslint-disable no-unused-vars*/
import React, { useState } from 'react'
import styled from 'styled-components'
import Scroller from './Scroller'

let array = [0, 1, 2]

let App = () => {
    let [screenNumber, setScreenNumber] = useState(0)
    return <Wrapper>
        <Header>
            {
                array.map((item, index) => {
                    return (
                        <div key={index} onClick={() => { setScreenNumber(index) }} >screen {index}</div>
                    )
                })
            }
        </Header>
        <Scroller screenNumber={screenNumber} >
            {
                array.map((item, index) => {
                    return (
                        <Block key={index}>{index}</Block>
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
justify-content: space-around
align-items: center
flex-direction: row
transition: 0.2s
width: 100vw;
height: 8vh;
position: fixed;
top: 0;
@media (min-width: 320px) and (max-width: 480px) {
    
}`

const Block = styled.div`
display: flex
justify-content: center
align-items: center
flex-direction: column
transition: 0.2s
width: 100vw;
height: 100vh;
@media (min-width: 320px) and (max-width: 480px) {
    
}`
/*eslint-enable no-unused-vars*/