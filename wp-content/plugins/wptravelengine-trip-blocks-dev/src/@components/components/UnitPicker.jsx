import styled from "@emotion/styled";
import { useState } from "@wordpress/element";
import Popover from "./Popover";

const UnitPickerStyles = styled.div`
  display: inline-block;
  position: relative;
  > div,
  button {
    height: 100%;
  }
  button {
    min-width: 40px;
    border: none;
    border-radius: var(--cw__border-radius);
    background-color: var(--cw__background-color);
    cursor: pointer;
    min-height: 36px;
    &:hover {
      color: var(--cw__secondary-color);
    }
    &:focus {
      outline: 1px dotted;
    }
  }
  .cw__unit-picker-options {
    max-width: 72px;
    width: 72px;
    border-radius: var(--cw__border-radius);
    background-color: var(--cw__background-color);
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    margin-bottom: 10px;
    bottom: 100%;
    left: -17.5px;
    right: -17.5px;
    animation: fadeInUp 0.1s ease;
    border: 1px solid var(--cw__border-color);
    z-index: 1;
    &::before,
    &::after {
      content: "";
      border: 6px solid transparent;
      border-top-color: var(--cw__background-color);
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translateX(-50%);
    }
    &::before {
      margin-top: 1px;
      border-top-color: #dcdcdc;
    }
    span {
      min-width: 35px;
      flex-basis: 0;
      flex-grow: 1;
      display: inline-block;
      padding: 0.5rem 0.25rem;
      text-align: center;
      font-size: 12px;
      cursor: pointer;
      border-top: 1px solid #dcdcdc;
      &:nth-of-type(2n + 1) {
        border-right: 1px solid #dcdcdc;
      }
      &:nth-of-type(-n + 2) {
        border-top: 0;
      }
      &:last-child {
        border-right: 0;
      }
      &:hover {
        background-color: #ffffff;
      }
    }
  }
`;

const UnitPickerOptions = styled.div`
  max-width: 72px;
  width: 72px;
  display: flex;
  flex-wrap: wrap;
  span {
    min-width: 35px;
    flex-basis: 0;
    flex-grow: 1;
    display: inline-block;
    padding: 0.5rem 0.25rem;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
    border-top: 1px solid #dcdcdc;
    &:nth-of-type(2n + 1) {
      border-right: 1px solid #dcdcdc;
    }
    &:nth-of-type(-n + 2) {
      border-top: 0;
    }
    &:last-child {
      border-right: 0;
    }
    &:hover {
      background-color: var(--cw__background-color);
    }
  }
`

const UnitPicker = ({ value, onChange, units }) => {
  const [open, setOpen] = useState(false);

  const handleOpenOnKeyDown = (e) => {
    if (e.type === "keydown" && e.key === "Enter") {
      setOpen(open);
    }
  };

  const handleSelectOnKeyDown = (_unit) => (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      onChange(_unit);
      setOpen(false);
    }
  };

  return (
    <UnitPickerStyles className="cw__unit-picker-wrapper">
      <Popover
        className='cw__unit-picker-popover'
        content={
          <UnitPickerOptions>
            {units?.map((unit, i) => {
              return (
                <span
                  key={i}
                  tabIndex={0}
                  onClick={handleSelectOnKeyDown(unit)}
                  onKeyDown={handleSelectOnKeyDown(unit)}
                >
                  {unit}
                </span>
              );
            })}
          </UnitPickerOptions>
        }
        disabled={(units || [])?.length <= 1}
        interactive={true}
      >
        <button
          tabIndex={0}
          type="button"
          onClick={() => setOpen(!open)}
          onKeyDown={handleOpenOnKeyDown}
        >
          {value}
        </button>
      </Popover>
    </UnitPickerStyles>
  );
};

export default UnitPicker;
