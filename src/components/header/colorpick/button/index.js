import styled from "styled-components";

export const Button = styled.button`
    padding : 0 10px;
    font-weight: 800;
    text-decoration : none;
    color : #16A5A5;
    background : transparent;
    border : none;
    cursor : pointer;
    
    &:hover {
        color : #444
    }

    @media only screen and (max-width : 400px) {
        font-size : 13px
    }
`
