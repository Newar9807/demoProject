import ControlContainer from "../containers/ControlContainer";
import styled from "@emotion/styled";
import { Tooltip } from "../components";

const SelectButtonStyles = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 10px;
  border-radius: var(--cw__border-radius);
  background-color: var(--cw__background-color);
  color: var(--cw__inactive-color);
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  transition: var(--cw__transition);
  .cw__select-button {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .cw__icon {
    display: flex;
    svg {
      height: 1em;
      vertical-align: -0.12em;
    }
  }
  .cw__icon + span {
    margin-left: 0.25rem;
  }
  .cw__select-button-input {
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }
  &.cw__select-button-wrapper-checked {
    background-color: var(--cw__secondary-color);
    color: #ffffff;
  }
`;

const SelectButtonGroupStyles = styled.div`
  padding: 6px;
  border-radius: var(--cw__border-radius);
  background-color: var(--cw__background-color);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  &.sm {
    padding: 4px;
  }
  > * {
    flex: 1;
    gap: 6px;
  }
  .cw__select-button {
    width: 100%;
    &:hover{
      background-color: #ffffff;
    }
    &.cw__select-button-checked {
      background-color: #ffffff;
      color: var(--cw__secondary-color);
      box-shadow: var(--cw__box-shadow);
    }
  }
  &.cw__separate {
    padding: 0;
    background: none;
    border-radius: 0;
    gap: 15px;
    .cw__select-button {
      border: 1px solid var(--cw__border-color);
      background: none;
      &.cw__select-button-checked {
        border-color: var(--cw__secondary-color);
        box-shadow: none;
      }
    }
  }
`;

const RadioList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 8px;
    column-gap: 12px;

    input {
        margin: 0;
    }

    label {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        font-size: 14px;
    }

    ${props => props.inline && `
    flex-direction: row;
  `}
`

const sizes = {
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
};

const SelectButton = ({
  value,
  label,
  checked,
  icon,
  onChange,
  title,
  size,
  ...rest
}) => {
  const { style, ..._rest } = { ...rest };
  const handleSelectOnKeyDown = (e) => {
    if (e.type === "keydown" && e.key === "Enter") {
      onChange(value);
    }
  };
  return (
    <Tooltip title={title}>
      <SelectButtonStyles
        tabIndex={0}
        className={`cw__select-button${(checked && " cw__select-button-checked") || ""
          }`}
        onKeyDown={handleSelectOnKeyDown}
        style={{ fontSize: sizes[size], ...style }}
      >
        <span className="cw__select-button">
          <input
            tabIndex={-1}
            className="cw__select-button-input"
            type="checkbox"
            value={value}
            checked={checked}
            onChange={onChange}
            {..._rest}
          />
        </span>

        {icon && <span className="cw__icon">{icon}</span>}
        {label && <span>{label}</span>}
      </SelectButtonStyles>
    </Tooltip>
  );
};

const SelectButtonGroup = ({
  options,
  className,
  onChange,
  value,
  separate,
  isMultiple,
  size,
                               type,
                               inline,
  ...ControlContainer
}) => {
  const handleOnChange = (_value) => () => {
    if (isMultiple) {
      onChange(
        !value.includes(_value)
          ? [...value, _value]
          : value.filter((a) => a != _value),
      );
    } else {
      onChange(_value);
    }
  };

    if (type == 'radio') {
        return <RadioList inline={inline}>
            {
                options?.map(({ value: _value, label, id, ...rest }) => {
                    return <li>
                        <label htmlFor={id}>
                            <input type="radio" checked={value === _value} id={id} {...rest}
                                   onChange={() => onChange(_value)} />
                            {label}
                        </label>
                    </li>
                })
            }
        </RadioList>
    }

  return (
    <SelectButtonGroupStyles
      className={`cw__select-button-group ${className || ""} ${separate ? "cw__separate" : ""
        } ${size || ""}`}
    >
      {options.map(({ value: _value, ...rest }, i) => {
        const _checked = isMultiple ? value.includes(_value) : value === _value;
        const { ..._rest } = { ...ControlContainer, ...rest };
        return (
          <SelectButton
            key={i}
            size={size}
            value={_value}
            checked={_checked}
            onChange={handleOnChange(_value)}
            {..._rest}
          />
        );
      })}
    </SelectButtonGroupStyles>
  );
};

export default (props) => {
    return ControlContainer(SelectButtonGroup)({ ...props, direction: false })
};
