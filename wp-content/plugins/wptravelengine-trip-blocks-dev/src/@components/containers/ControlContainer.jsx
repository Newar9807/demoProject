import styled from '@emotion/styled'
import { useRef, useState } from '@wordpress/element'
import { Tooltip } from '../components'
import Icons from '../assets/Icons'

const ControlItemStyles = styled.div`
    color: var(--cw__primary-color);
    padding: 16px 0;
    width: 100%;

    * {
        box-sizing: border-box;
    }

    .cw__control-item {
        padding: 0;
        width: unset;
    }

    &[data-divider*="top"] {
        border-top: 1px solid var(--cw__background-color);
        padding-top: 16px;
    }

    &[data-divider*="bottom"] {
        border-bottom: 1px solid var(--cw__background-color);
        padding-bottom: 16px;
    }

    > header {
        &:not(:empty) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            flex: 1;
        }

        label {
            margin: 0;
            font-size: 14px;
            font-weight: 600;
            position: relative;
            display: inline-flex;
            align-items: center;
            color: #2b3034;
        }

        .cw__action-buttons {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }

    &:not(.horizontal) {
        > header {
            margin: 0 0 16px;
        }
    }

    .cw__control-description {
        flex: 0 0 100%;
        margin: 12px 0 16px;
        font-size: 13px;
        line-height: 1.5;
    }

    .cw__reset-button {
        display: inline-block;
        padding: 0;
        width: 16px;
        height: 16px;
        border: none;
        background: none;
        background-image: url("data:image/svg+xml,%3Csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.93963 2.09581C2.49505 1.53695 3.15568 1.09348 3.88342 0.790986C4.61115 0.488489 5.3916 0.332942 6.17978 0.333314C9.49685 0.333314 12.176 3.01831 12.176 6.33331C12.176 9.64831 9.49685 12.3333 6.17978 12.3333C3.38053 12.3333 1.04657 10.4208 0.378653 7.83331H1.93963C2.24877 8.71045 2.82267 9.4701 3.58215 10.0074C4.34162 10.5448 5.24924 10.8333 6.17978 10.8333C8.66383 10.8333 10.6826 8.81581 10.6826 6.33331C10.6826 3.85081 8.66383 1.83331 6.17978 1.83331C4.934 1.83331 3.82331 2.35081 3.0128 3.16831L5.42931 5.58331H0.176025V0.333314L1.93963 2.09581Z' fill='%2393999F'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        font-size: 0;
        cursor: pointer;
        transition: var(--cw__transition);

        &:hover {
            transform: rotate(-30deg);
        }
    }

    .cw__visibility-button {
        display: inline-block;
        padding: 0;
        width: 16px;
        height: 16px;
        border: none;
        background: none;
        background-image: url("data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.16667 10.75C10.2083 10.75 11.0938 10.3854 11.8229 9.65625C12.5521 8.92708 12.9167 8.04167 12.9167 7C12.9167 5.95833 12.5521 5.07292 11.8229 4.34375C11.0938 3.61458 10.2083 3.25 9.16667 3.25C8.125 3.25 7.23958 3.61458 6.51042 4.34375C5.78125 5.07292 5.41667 5.95833 5.41667 7C5.41667 8.04167 5.78125 8.92708 6.51042 9.65625C7.23958 10.3854 8.125 10.75 9.16667 10.75ZM9.16667 9.25C8.54167 9.25 8.01042 9.03125 7.57292 8.59375C7.13542 8.15625 6.91667 7.625 6.91667 7C6.91667 6.375 7.13542 5.84375 7.57292 5.40625C8.01042 4.96875 8.54167 4.75 9.16667 4.75C9.79167 4.75 10.3229 4.96875 10.7604 5.40625C11.1979 5.84375 11.4167 6.375 11.4167 7C11.4167 7.625 11.1979 8.15625 10.7604 8.59375C10.3229 9.03125 9.79167 9.25 9.16667 9.25ZM9.16667 13.25C7.13889 13.25 5.29167 12.684 3.625 11.5521C1.95833 10.4201 0.75 8.90278 0 7C0.75 5.09722 1.95833 3.57986 3.625 2.44792C5.29167 1.31597 7.13889 0.75 9.16667 0.75C11.1944 0.75 13.0417 1.31597 14.7083 2.44792C16.375 3.57986 17.5833 5.09722 18.3333 7C17.5833 8.90278 16.375 10.4201 14.7083 11.5521C13.0417 12.684 11.1944 13.25 9.16667 13.25Z' fill='%2342474B'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        font-size: 0;
        cursor: pointer;
        transition: var(--cw__transition);
    }

    .cw__reset-button + .cw__responsive-buttons {
        position: relative;
        padding-left: 10px;

        &::before {
            content: "";
            width: 0;
            height: 14px;
            border-left: 2px solid var(--cw__border-color);
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }
    }

    &.horizontal {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        column-gap: 8px;
        // > section {
        //   max-width: 150px;
        // }

        .cw__custom-select {
            .cw__select-dropdown {
                left: auto;
                right: 0;
            }
        }

        .cw__color-picker-popover {
            right: 0;
        }

        > header > .cw__action-buttons {
            padding-right: 10px;
            position: relative;

            &::after {
                content: "";
                width: 0;
                height: 14px;
                border-right: 2px solid var(--cw__border-color);
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
            }
        }
    }
`

const ResponsiveButtons = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;

    .cw__responsive-button {
        font-size: 15px;
        cursor: pointer;
        color: var(--cw__inactive-color);
        transition: var(--cw__transition);
        padding: 0;
        border: none;
        background: none;

        svg {
            width: 1em;
            height: 1em;
            vertical-align: -0.12em;
        }

        &:hover,
        &.active {
            color: var(--cw__secondary-color);
        }
    }
`

const ControlHelpStyle = styled.i`
    margin: 0 8px;
`

// Responsive Buttons
const ResponsiveControl = ({ device, onChange }) => {
    return (
        <ResponsiveButtons className="cw__responsive-buttons">
            <button
                className={`cw__responsive-button${device === 'desktop' ? ' active' : ''
                }`}
                onClick={() => onChange('desktop')}
                title="Desktop"
            >
                {Icons.desktop}
            </button>
            <button
                className={`cw__responsive-button${device === 'tablet' ? ' active' : ''
                }`}
                onClick={() => onChange('tablet')}
                title="Tablet"
            >
                {Icons.tablet}
            </button>
            <button
                className={`cw__responsive-button${device === 'mobile' ? ' active' : ''
                }`}
                onClick={() => onChange('mobile')}
                title="Mobile"
            >
                {Icons.mobile}
            </button>
        </ResponsiveButtons>
    )
}

// Controls Container
const ControlContainer =
    (Component) =>
        ({
             direction,
             className,
             label,
             divider,
             description,
             value,
             defaultValue,
             onChange,
             responsive,
             isChildren,
             visibility,
             setVisibility,
             help,
             children,
             hideResetButton,
             containerStyle,
             ...rest
         }) => {
            let _ref = useRef(null)
            if (_ref.current == null) {
                _ref.current = value
            }

            const [responsiveState, setResponsiveState] = useState('desktop')

            const handleOnChange = (_value) => {
                onChange(
                    responsive ? { ...value, [responsiveState]: _value } : _value,
                )
            }
            const border = divider ? ` cw__divider-${divider}` : ''

            const preValue = JSON.stringify(defaultValue || _ref.current)
            const currentValue = JSON.stringify(value)

            const handleVisibility = () => {
                setVisibility(!visibility)
            }

            return (
                <ControlItemStyles
                    className={`cw__control-item ${direction || ''} ${className || ''}`}
                    data-visibility={visibility ? 'hidden' : false}
                    data-divider={divider}
                >
                    {label && (
                        <header>
                            <label>
                                {label}
                                {help && (
                                    <Tooltip title={help}>
                                        <ControlHelpStyle>{Icons.help}</ControlHelpStyle>
                                    </Tooltip>
                                )}
                            </label>
                            {(visibility || (!hideResetButton && (!isChildren && preValue !== currentValue)) || responsive) && (
                                <div className="cw__action-buttons">
                                    {
                                        !hideResetButton && <>
                                            {!isChildren && preValue !== currentValue && (
                                                <button
                                                    tabIndex={0}
                                                    className="cw__reset-button"
                                                    onClick={() => onChange(_ref.current)}
                                                >
                                                    Reset
                                                </button>
                                            )}
                                        </>
                                    }
                                    {responsive && (
                                        <ResponsiveControl
                                            onChange={setResponsiveState}
                                            device={responsiveState}
                                        />
                                    )}
                                    {
                                        visibility && <button className="cw__visibility-button"
                                                              onClick={handleVisibility}>Visibility</button>
                                    }
                                </div>
                            )}
                        </header>
                    )}
                    {description && direction !== 'horizontal' && (
                        <div className="cw__control-description">{description}</div>
                    )}
                    <section className={className || ''} style={containerStyle}>
                        <Component
                            changed={preValue !== currentValue ? 1 : 0}
                            value={responsive ? value[responsiveState] : value}
                            onChange={(res) => handleOnChange(res)}
                            {...rest}
                        />
                        {children}
                    </section>
                    {description && direction === 'horizontal' && (
                        <div
                            className="cw__control-description"
                            style={{ margin: '16px 0 0' }}
                        >
                            {description}
                        </div>
                    )}
                </ControlItemStyles>
            )
        }

export default ControlContainer
