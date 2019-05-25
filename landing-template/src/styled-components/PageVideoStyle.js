/*eslint-disable no-unused-vars*/
import styled from "styled-components";
import * as Variables from "./VariableStyle";

// style of third page
export const WrapVideo = styled.section `
    display: flex;
    width: 100%;
    height: 80%;
    border: 1px solid red;
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const WrapTourWatch = styled.div `
    display: flex;
    width: 100%;
    height: 20%;
    background-color: ${Variables.$white};
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;
/*eslint-enable no-unused-vars*/