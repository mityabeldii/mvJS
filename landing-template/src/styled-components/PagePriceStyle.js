/*eslint-disable no-unused-vars*/
import styled from "styled-components";
import * as Variables from "./VariableStyle";

export const WrapPriceTable = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 90%;
    height: 90%;
    border: 1px solid ${Variables.$white};
    margin-bottom: 50px;
    p {
        width: 100%;
        font-size: 2rem;
        height: auto;
        margin: 0.5rem;
        text-transform: uppercase;
        text-align: center;
    }
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const PriceTableHead = styled.div `
    display: flex;
    width: 100%;
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const PriceTableHeadItem = styled.div `
    display: flex;
    width: calc( 100% / 5 );
    border: 1px solid yellow;
    p {
        margin: 0.5rem;
    }
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const PriceTable = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const PriceTableRow = styled.div `
display: flex;
height: 50px;
width: 100%;
border: 1px solid red;
p {
    
}
@media (min-width: 320px) and (max-width: 768px) {
        
    }`;

export const PriceTableItem = styled.div `
display: flex;
width: calc( 100% / 5 );
border: 1px solid blue;
p {
    margin: 0.5rem;
    font-size: 1rem;
    text-transform: lowercase;
}
@media (min-width: 320px) and (max-width: 768px) {
        
    }`;

/*eslint-enable no-unused-vars*/