import styled from 'styled-components'
import colors from './colors'
import { Link } from 'react-router-dom'

export const Title = styled.h2`
    font-size: 25px;
    color: ${colors.third};
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
    background-color: ${colors.primary};
    min-height: calc(100vh - 79px);
    padding: 20px;
    box-sizing: border-box;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
    text-transform: uppercase;
    transition-duration: 0.6s;
`