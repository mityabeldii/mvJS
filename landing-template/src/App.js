/*eslint-disable no-unused-vars*/
import React, { useState } from 'react'
import styled from 'styled-components'

let screens = [
    {
        name: `first`,
        color: `blue`,
    },
    {
        name: `second`,
        color: `green`,
    }
]

let App = () => {
    return (
        <Wrapper>
            <Header>
                {
                    screens.map((i, index) => {
                        return (
                            <MenuItem
                                key={index}
                                color={i.color}
                                onClick={() => {

                                }}
                            >
                                {i.name}
                            </MenuItem>
                        )
                    })
                }
            </Header>
            <Workspace>
                {
                    screens.map((i, index) => {
                        return (
                            <Block key={index} color={i.color}>

                            </Block>
                        )
                    })
                }
            </Workspace>
        </Wrapper>
    )
}

export default App

const Wrapper = styled.div`
display: flex
justify-content: center
align-items: center
flex-direction: column
transition: 0.2s;
width: 100vw;
height: 100vh;
background-color: white;
@media (min-width: 320px) and (max-width: 480px) {
    
}`

const Header = styled.div`
display: flex
justify-content: center
align-items: center
flex-direction: row;
transition: 0.2s
width: 100vw;
height: 8vh;
background-color: red;
@media (min-width: 320px) and (max-width: 480px) {
    
}`

const Workspace = styled.div`
display: block;
overflow: scroll;
width: 100vw;
height: 92vh;
background-color: yellow;
@media (min-width: 320px) and (max-width: 480px) {
    
}`

const Block = styled.div`
display: flex
justify-content: center
align-items: center
flex-direction: column
transition: 0.2s
width: 100vw;
height: 92vh;
background-color: ${props => props.color}
@media (min-width: 320px) and (max-width: 480px) {
    
}`

const MenuItem = styled.div`
display: flex
justify-content: center
align-items: center
flex-direction: column
transition: 0.2s
width: 10vw;
height: 8vh;
background-color: white;
cursor: pointer;
@media (min-width: 320px) and (max-width: 480px) {
    
}`
/*eslint-enable no-unused-vars*/