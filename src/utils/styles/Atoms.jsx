import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Title = styled.h2`
    font-size: 25px;
    color: ${props => props.theme.third};
    text-align: center;
    margin: 0;
    padding: 20px 0;

    &:before, &:after {
        content: '{';
        font-size: 40px;
        margin-right: 10px;
    }
    &:after {
        content: '}';
        margin-left: 10px;
    }
`

export const WrapperContainer = styled.div`
    background-color: ${props => props.theme.primary};
    min-height: 100vh;
    padding: 100px 20px 20px 20px;
    box-sizing: border-box;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.primary};
    text-transform: uppercase;
    transition-duration: 0.6s;
`