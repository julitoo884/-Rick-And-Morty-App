import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    list-style: none;
    padding : 0 10px;
    font-weight: 700;
    text-decoration : none;
    color : ${props => props.color || '#16A5A5'};

    &:hover {
        color : #444
    } 

    @media only screen and (max-width : 400px) {
        font-size : 13px;
        font-weight : 800
    }
`;  


