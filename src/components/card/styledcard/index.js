import styled from "styled-components"
import { Link } from 'react-router-dom'

export const StyledCard = styled(Link)`
    width: calc((100% - 10rem) / 4);
    margin: auto;
    border-radius: 8px;
    overflow: hidden;    
    transition: all 0.1s;
    margin-top: 2rem; 
    background-color: #444444;
    box-shadow: 0 1px 5px white;
    text-decoration : none;
 
    &:nth-child(2n+1) {
        background-color : rgba(68, 68, 68, 0.5);
        border : 1px solid red
    }

    &:hover {
        box-shadow: 0 1px 15px #16A5A5;
    }

    @media only screen and (max-width :1200px) {
        width : calc((100% - 10rem) / 3)
    }

    @media only screen and (max-width :1000px) {
        width : calc((100% - 10rem) / 2)
    }

    @media only screen and (max-width : 750px) {
        width : calc((100% - 10rem))
    }

    @media only screen and (max-width : 500px) {
        width : 100% 
    }
`

//La opacidad en numeros impares tambien se puede lograr enviando el index como prop al styledComponent y verificando (index+1) % 2
