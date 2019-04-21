/*eslint-disable no-unused-vars*/
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useScroller from './useScroller'

let array = [0, 1, 2]

let App = () => {
    let [currentScreen, scrollTo, Scroller] = useScroller()
    console.log(currentScreen); // currentScreen - хранит номер текущего экрана
    console.log(scrollTo); // scrollTo(number) - функция, которая подскролливает к экрану с номером number
    console.log(Scroller); // Scroller - сам компонент скорллера, в который внутрь вставляем все экраны
    return <Wrapper>
        <Header>
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
width: 100vw;
height: 8vh;
position: fixed;
top: 0;
transition: 0.2s;
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