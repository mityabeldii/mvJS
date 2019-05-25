/*eslint-disable no-unused-vars*/
import styled from "styled-components";
import * as Variables from "./VariableStyle";

export const WrapLevelOne = styled.section`
    display: flex;
    width: 95%;
    height: ${props => props.heightStyle};
    border: 1px solid ${props => props.borderColor};
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const WrapLevelTwo = styled.div`
    display: flex;
    width: ${props => props.widthStyle};
    height: auto;
    margin: 10px;
    background-color: ${Variables.$white50};
    p {
        width: 100%;
        font-size: 3rem;
        text-align: center;
        color: blue;
    }
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;
/*eslint-enable no-unused-vars*/