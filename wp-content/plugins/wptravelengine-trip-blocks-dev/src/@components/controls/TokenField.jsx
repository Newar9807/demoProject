import { FormTokenField } from '@wordpress/components'
import ControlContainer from '../containers/ControlContainer'
import styled from '@emotion/styled'

const TokenFieldStyle = styled.div`
    .components-form-token-field__label{
        visibility: hidden;
        width: 0;
        height: 0;
        overflow: hidden;
        position: absolute;
        top: -99999999px;
        z-index: -1;
    }
    .components-form-token-field__help{
        font-size: 12px;
        margin-bottom: 0;
    }
    .components-form-token-field__input-container{
        border: 1px solid var(--cw__border-color);
        border-radius: var(--cw__border-radius);
        transition: var(--cw__transition);
        min-height: 44px;
        padding: 10px;
        display: flex;
        align-items: center;
        position: relative;
        &.is-active{
            border-color: var(--cw__secondary-color);
        }
        input.components-form-token-field__input{
            all: unset;
            width: 100%;
            min-width: 50px;
            max-width: 100%;
            display: inline-block;
            flex: 1;
        }
        > .components-flex{
            padding: 0;
            gap: 8px;
        }
        .components-form-token-field__suggestions-list{
            position: absolute;
            max-height: 202px;
            border: 1px solid var(--cw__border-color);
            border-radius: var(--cw__border-radius);
            padding: 6px;
            list-style: none;
            margin: 0;
            width: 100%;
            top: 100%;
            margin-top: 10px;
            box-shadow: 0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814;
            left: 0;
            background: #ffffff;
            li{
                font-size: 14px;
                color: #2b3034;
                padding: 10.5px 8px;
                cursor: default;
                &:hover{
                    color: var(--cw__secondary-color);
                }
            }
        }
        .components-form-token-field__token{
            display: inline-flex;
            align-items: center;
            color: #2b3034;
            padding: 6px 12px;
            background-color: #e5f0ff;
            border-radius: var(--cw__border-radius);
            gap: 4px;
            .components-form-token-field__remove-token{
                flex: 0 0 24px;
                height: 24px;
                width: 24px;
                border: none;
                padding: 0;
                background: none;
                transition: var(--cw__transition);
                cursor: pointer;
                border-radius: var(--cw__border-radius);
                svg{
                    fill: currentColor;
                }
                &:hover{
                    background-color: #ff0e0e;
                    color: #ffffff;
                }
            }
        }
    }
`

const TokenField = (props) => {
    return <TokenFieldStyle>
        <FormTokenField
            {...props}
        />
    </TokenFieldStyle>
}

export default (props) => {
    return ControlContainer(TokenField)(props)
}  