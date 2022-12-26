import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Title = styled.h2`
    font-size: 19px;
    color: ${props => props.theme.third};
    text-align: center;
    margin: 0;
    padding: 15px 0;

    &:before, &:after {
        content: '{';
        font-size: 30px;
        margin-right: 8px;
    }
    &:after {
        content: '}';
        margin-left: 8px;
    }
`

export const WrapperContainer = styled.div`
    background-color: ${props => props.theme.primary};
    min-height: calc(100vh - 59px);
    padding: 75px 15px 15px 15px;
    box-sizing: border-box;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.primary};
    text-transform: uppercase;
    transition-duration: 0.6s;
    @media only screen and (max-width: 768px) {
        color: ${props => props.theme.secondary};
    }
`