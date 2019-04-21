/*eslint-disable no-unused-vars*/
import React, { useEffect } from 'react';
import { scroller } from 'react-scroll'

let Scroller = (props) => {
    useEffect(() => { scroller.scrollTo(`test${props.screenNumber}`, { duration: 200, smooth: 'easeInOutQuart' }) })
    return (
        <div id={`wrapper`} >
            {
                props.children.map((i, index) => {
                    return (
                        <div key={index} id={`test${index}`} className={`element`} >
                            {i}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Scroller;
/*eslint-enable no-unused-vars*/