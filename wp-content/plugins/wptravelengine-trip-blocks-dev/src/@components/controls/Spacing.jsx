import styled from "@emotion/styled";
import ControlContainer from "../containers/ControlContainer";
import { useState } from "@wordpress/element";
import { UnitPicker } from "../components";
import Icons from "../assets/Icons";
import { isBoolean } from "lodash"
import { isValidUnit, unitRegex } from '../validation'

const SpacingInputStyles = styled.label`
  text-align: center;
  flex: 1;
  input {
    text-align: center;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &:read-only{
      background-color: #efefef;
      color: #999999;
      pointer-events: none;
    }
  }
  .label {
    display: inline-block;
    font-size: 10px;
    margin-top: 0.25rem;
    text-transform: uppercase;
  }
`;

const SpacingGroupStyles = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 0.5rem;
  .cw__spacing-button-wrapper {
    background-color: var(--cw__background-color);
    border-radius: var(--cw__border-radius);
    display: flex;
    height: 45px;
    flex: 1;
    button {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--cw__inactive-color);
      padding: 0.5rem;
      font-size: 13px;
      border-radius: var(--cw__border-radius);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      &:hover,
      &.active {
        color: var(--cw__secondary-color);
      }
      &:focus {
        outline: 1px dotted;
      }
      &.cw__spacing-button-link-button {
        flex: 1;
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
    }
  }
`;
const properties = [
  { name: "top", label: "Top" },
  { name: "right", label: "Right" },
  { name: "bottom", label: "Bottom" },
  { name: "left", label: "Left" },
];

const dimensionsValues = (_value, value) => {
  let dimensions = {};
  properties.map(({ name }) => {
    const numberType = value[name] !== 'auto';
    dimensions = {
      ...dimensions,
      [name]: numberType ? _value : value[name]
    }
  })
  return dimensions;
}

const defaultUnits = [
  {
    unit: 'px',
    min: 0,
    max: 1000
  },
  {
    unit: 'em',
    min: 0,
    max: 20
  },
  {
    unit: 'rem',
    min: 0,
    max: 20
  },
  {
    unit: '%',
    min: 0,
    max: 100
  },
  {
    unit: 'pt',
    min: 0,
    max: 100
  },
]

const SapcingInput = ({ label, value, ...rest }) => {
  const isNumber = value != 'auto';
  return (
    <SpacingInputStyles className="cw__spacing-input-wrapper">
      <span className="cw__spacing-input">
        <input readOnly={!isNumber} type={isNumber ? 'number' : 'text'} value={value} {...rest} />
      </span>
      {label && <span className="label">{label}</span>}
    </SpacingInputStyles>
  );
};

const Spacing = ({ onChange, value, units, ...ControlContainer }) => {
  const [locked, setLocked] = useState(false);
  units = isBoolean(units) ? defaultUnits : units;
  const _unit = Object.values(value).find(v => v !== '' && v !== 'auto') || '';
  const [unit = "px"] = isValidUnit(_unit);
  const findUnit = units?.find(m => m.unit === unit)
  const max = findUnit?.max || 1000
  const min = findUnit?.min || 0
  const firstValue = Object.values(value).find(v => v !== '' && v !== 'auto') || 0 + unit

  const handleOnChange = (e) => {
    const val = e.target.value
    const key = e.target.name;
    if (e.target.type === 'number') {
      const _value = val !== '' ? (val >= max ? max : val <= min ? min : val) : val;
      if (locked) {
        onChange({
          ...value,
          ...dimensionsValues(_value + unit, value),
        });
      } else {
        onChange({ ...value, [key]: _value + unit })
      }
    }
  };

  const handleLocked = () => {
    setLocked(!locked);
    onChange({ ...value, ...dimensionsValues(firstValue, value) });
  };

  const handleUnitChange = (u) => {
    let newValue = {}
    Object.entries(value).map(([key, val = "0px"]) => {
      const [, num] = val?.match(/(\d+)/) ?? []
      if (val !== '') {
        newValue = { ...newValue, [key]: num + u }
      }
    })
    onChange({ ...value, ...newValue })
  }

  units = units?.map(u => u.unit);

  return (
    <SpacingGroupStyles className="cw__spacing-group">
      {properties.map(({ name, label }) => {
        // value : {top: '10px', left:'10px'}
        let val = value[name]
        if (isValidUnit(value[name]).length > 0) {
          const [, _val] = (value[name] ?? '')?.match(unitRegex) || []
          val = _val
        }

        return (
          <SapcingInput
            key={name}
            label={label}
            name={name}
            onChange={handleOnChange}
            value={val}
            {...ControlContainer}
          />
        );
      })}
      <div className="cw__spacing-button-wrapper">
        <button
          type="button"
          className={`cw__spacing-button-link-button${locked ? " active" : ""}`}
          onClick={() => handleLocked()}
        >
          {Icons.link}
        </button>
        <UnitPicker
          units={units}
          value={unit}
          onChange={(u) => handleUnitChange(u)}
        />
      </div>
    </SpacingGroupStyles>
  );
};

export default (props) => {
  return ControlContainer(Spacing)(props);
};
