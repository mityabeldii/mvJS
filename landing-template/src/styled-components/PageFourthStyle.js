/*eslint-disable no-unused-vars*/
import styled from "styled-components";
// import * as Variables from "./styled-components/VariableStyle";

// style of fourth page
export const WrapContacts = styled.section`
    display: flex;
    width: 100%;
    height: 70%;
    border: 1px solid red;
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const WrapFooter = styled.footer`
    display: flex;
    width: 100%;
    height: 30%;
    background-color: #000;
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const FooterFirstLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 100%;
    p {
        display: block;
        position: relative;
        text-align: center;
        width: 100%;
        color: #ffffff;
        height: auto;
    };
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

/*eslint-enable no-unused-vars*/