/*eslint-disable no-unused-vars*/
import styled from "styled-components";
import * as Variables from "./VariableStyle";

export const WrapTeam = styled.section `
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 90%;
    border: 1px solid ${Variables._$white};
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
    position: relative;
    display: flex;
    flex-direction: column;
    width: 20%;
    min-width: 150px;
    height: 30%;
    background-color: rgba(255,0,255,0.5);
    @media (min-width: 640px) and (max-width: 991px) {
        width: 30%;
        min-width: 150px;
        };
    @media (min-width: 320px) and (max-width: 640px) {
            
        }`;

export const TeamItemEmpty = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    width:6%;
    height: 30%;
    background-color: transparent;
    @media (min-width: 640px) and (max-width: 991px) {
        width:3%;
        };
    @media (min-width: 320px) and (max-width: 640px) {
            
        }`;


/*eslint-enable no-unused-vars*/