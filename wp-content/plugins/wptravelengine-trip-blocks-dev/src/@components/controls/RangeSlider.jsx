import styled from '@emotion/styled'
import { RangeControl } from '@wordpress/components'
import ControlContainer from '../containers/ControlContainer'
import { UnitPicker } from '../components'
import { isBoolean, isString } from 'lodash'
import { unitRegex } from '../validation'

const RangeStyles = styled.div`
    display: flex;

    > .components-base-control {
        flex: 1;
        margin-bottom: 0;

        .components-base-control__field {
            margin-bottom: 0;

            .components-input-control__input {
                border: none;
                background-color: var(--cw__background-color);
                padding-left: 5px;
                padding-right: 5px;
                text-align: center;
                padding-top: 0;
                padding-bottom: 0;
                min-height: 40px;
                -moz-appearance: textfield;
                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
            }
        }
    }

    &.cw__has-unit {
        .components-input-control__container {
            max-width: 40px;
        }

        .components-input-control__input {
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
        }
    }

    .cw__unit-picker-wrapper {
        position: relative;

        &::before {
            content: "";
            width: 0;
            height: 14px;
            border-left: 1px solid var(--cw__inactive-color);
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }

        button {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            color: var(--cw__inactive-color);
        }
    }
`

const defaultUnits = [
    {
        unit: 'px',
        min: 0,
        max: 1000,
    },
    {
        unit: 'em',
        min: 0,
        max: 20,
    },
    {
        unit: 'rem',
        min: 0,
        max: 20,
    },
    {
        unit: '%',
        min: 0,
        max: 100,
    },
    {
        unit: 'pt',
        min: 0,
        max: 100,
    },
]

const RangeSlider = ({ units, value, onChange, className, ...ControlContainer }) => {
    const [, num = '', _unit = 'px'] = value?.match(unitRegex) ?? []
    let val = num
    let unit = _unit

    units = isBoolean(units) ? defaultUnits : units
    const min = units.find(u => u.unit === unit)?.min || 0
    const max = units.find(u => u.unit === unit)?.max || 1000
    units = units?.map(u => u?.unit)

    const handleOnChange = (newValue, unit) => {
        if (newValue >= max) {
            newValue = max;
        } else if (newValue <= min) {
            newValue = min;
        }
        onChange(newValue + unit)
    }

    return (
        <RangeStyles className={unit ? 'cw__has-unit' : ''}>
            <RangeControl
                value={Number(val)}
                onChange={(_val) => handleOnChange(_val, unit)}
                min={min}
                max={max}
                {...ControlContainer}
            />
            {(unit) && (
                <UnitPicker
                    units={units}
                    value={unit}
                    onChange={(u) => handleOnChange(val, u)}
                />
            )}
        </RangeStyles>
    )
}

export default (props) => {
    return ControlContainer(RangeSlider)(props)
};
