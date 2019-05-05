import React from 'react'
import styled from "styled-components";

let RectangleBlockFirst = () => <RectangleBlock bgColorStyle={`purple`} />
let RectangleBlockSecond = () => <RectangleBlock bgColorStyle={`marine`} />
let RectangleBlockThird = () => <RectangleBlock bgColorStyle={`dark-blue`} />

const RectangleBlock = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bgColorStyle}
`;

const array_rectangle = [RectangleBlockFirst, RectangleBlockSecond, RectangleBlockThird];
export default array_rectangle;