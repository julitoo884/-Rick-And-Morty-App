import styled from "styled-components";

export const ContainetCards = styled.div`
    background-color: ${props => props.bg || '#444'};
    display: flex;
    flex-wrap: wrap;
    padding: 5rem;
    align-items: flex-start;
    
    @media only screen and (max-width : 500px) {
        padding: 2rem;
    }
    
`  
