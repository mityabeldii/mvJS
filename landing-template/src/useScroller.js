/*eslint-disable no-unused-vars*/
import React, { useState, useEffect } from 'react';
import { scroller, Link } from 'react-scroll'

let useScroller = () => {
    let [currentScreen, setCurrentScreen] = useState(0)
    let scrollTo = (number) => {
        scroller.scrollTo(`test${number}`, { duration: 1000, smooth: 'easeInOutQuart' })
    }
    let element = (props) => (
        <div id={`wrapper`} >
            {
                props.children.map((i, index) => {
                    return (
                        <Link spy={true} to={`test${index}`} key={index} id={`test${index}`} className={`element`} onSetActive={() => { setCurrentScreen(index) }}>
                            {i}
                        </Link>
                    )
                })
            }
        </div>
    )
    return [currentScreen, scrollTo, element]
}

export default useScroller;
/*eslint-enable no-unused-vars*/