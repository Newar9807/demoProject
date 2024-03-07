import React from 'react'
import ControlContainer from '../containers/ControlContainer'
import styled from '@emotion/styled'

const ButtonStyle = styled.button`
    min-height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    line-height: 18.6px;
    padding: 10px 16px;
    border: none;
    background: none;
    gap: 8px;
    cursor: pointer;
    border-radius: var(--cw__border-radius);
    transition: var(--cw__transition);
    background-image: none;
    box-shadow: var(--cw__box-shadow);
    ${props => props.variant === 'solid' && `
        background-color: var(--cw__secondary-color);
        color: #ffffff;
    `}
    &:hover{
        background-color: var(--cw__secondary-color);
        color: #ffffff;
        box-shadow: 0 5px 10px rgba(0,0,0, .3);
        transform: translateY(-5px);
    }
`

const Button = ({ value, type, ...ControlContainer }) => {
    return (
        <ButtonStyle type={type || 'button'} {...ControlContainer}>{value || ''}</ButtonStyle>
    )
}

export default (props) => {
    return ControlContainer(Button)(props)
}