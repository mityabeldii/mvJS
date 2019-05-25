/*eslint-disable no-unused-vars*/
import styled from "styled-components";
import * as Variables from "./VariableStyle";

export const WrapTeam = styled.section `
    display: flex;
    position: relative;
    width: 90%;
    height: 90%;
    border: 1px solid ${Variables.$white};
    margin-bottom: 50px;
    /* p {
        width: 100%;
        font-size: 2rem;
        height: auto;
        margin: 0.5rem;
        text-transform: uppercase;
        text-align: center;
    } */
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const TeamItem = styled.div `
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    background-color: rgba(255,0,255,0.5);
    p {
        text-align: center;
    }
    @media (min-width: 640px) and (max-width: 991px) {
       
        };
    @media (min-width: 320px) and (max-width: 640px) {
            
        }`;




/*eslint-enable no-unused-vars*/