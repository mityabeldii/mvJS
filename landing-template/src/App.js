/*eslint-disable no-unused-vars*/
import React, { useState, useEffect } from 'react'
import useScroller from './useScroller'

import * as LayoutStyle from "./styled-components/LayoutStyle"
import array from './screens'

let App = () => {
    let [currentScreen, scrollTo, Scroller] = useScroller()
    let getIndexByName = (name) => array.map(i => i.name).indexOf(name)
    return <LayoutStyle.Wrapper>
        <LayoutStyle.Header visible={currentScreen > 0} >
            {
                array.map((item, index) => {
                    return (
                        <div key={index} onClick={() => { scrollTo(index) }} >{item.name}</div>
                    )
                })
            }
        </LayoutStyle.Header>
        <Scroller>
            {
                array.map((Item, index) => {
                    return (
                        <div key={index}>
                            <Item.component scrollTo={(index) => { scrollTo(getIndexByName(Item.name)) }} />
                        </div>
                    )
                })
            }
        </Scroller>
    </LayoutStyle.Wrapper>
}

export default App;

/*eslint-enable no-unused-vars*/