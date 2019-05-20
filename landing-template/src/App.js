/*eslint-disable no-unused-vars*/
import React, { useState, useEffect } from 'react'
import useScroller from './useScroller'

import * as LayoutStyle from "./styled-components/LayoutStyle"
import array from './first'

// let array = [`red`, `green`, `blue`]

let App = () => {
    let [currentScreen, scrollTo, Scroller] = useScroller()
    return <LayoutStyle.Wrapper>
        <LayoutStyle.Header visible={currentScreen > 0} >
            {
                array.map((item, index) => {
                    return (
                        <div key={index} onClick={() => { scrollTo(index) }} >screen {index}</div>
                    )
                })
            }
        </LayoutStyle.Header>
        <Scroller>
            {
                array.map((item, index) => {
                    return (
                        <div key={index}>{item()}</div>
                    )
                })
            }
        </Scroller>
    </LayoutStyle.Wrapper>
}

export default App;

/*eslint-enable no-unused-vars*/