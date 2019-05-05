import React from 'react'
import styled from "styled-components";

const ParagInside = () => <p>wefwefwefwef</p>

const RectangleBlockFirst = () => <RectangleBlock bgColorStyle = {`purple`}>
<ParagInside/>
</RectangleBlock>
const RectangleBlockSecond = () => < RectangleBlock bgColorStyle = {`green`}/>
const RectangleBlockThird = () => < RectangleBlock bgColorStyle = {`blue`}/>


const RectangleBlock = styled.section `
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bgColorStyle}
`;

export default [RectangleBlockFirst, RectangleBlockSecond, RectangleBlockThird];