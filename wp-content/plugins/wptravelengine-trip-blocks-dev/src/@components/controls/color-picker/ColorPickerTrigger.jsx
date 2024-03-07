import styled from "@emotion/styled";
import { Tooltip, Popover } from "../../components";

const ColorPickerStyles = styled.div`
  background-color: #e5e5f7;
  opacity: 1;
  background-image:  repeating-linear-gradient(45deg, #c1c1c1 25%, transparent 25%, transparent 75%, #c1c1c1 75%, #c1c1c1), repeating-linear-gradient(45deg, #c1c1c1 25%, #e5e5f7 25%, #e5e5f7 75%, #c1c1c1 75%, #c1c1c1);
  background-position: 0 0, 6px 6px;
  background-size: 12px 12px;
  border-radius: 50%;
  [aria-expanded] {
    display: flex;
  }
  .cw__color-picker-color-block {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    &:hover, &:focus {
      outline: 1px solid #dfe1eb;
      outline-offset: 2px;
      outline-color: var(--cw__secondary-color);
    }
  }

    ${props => props.color ? `
  .cw__color-picker-color-block{
      border: 1px solid #efefef;
      background-color: ${props.color}
    }
    ` : `
    .cw__color-picker-color-block{
      background: #fff linear-gradient(-45deg,transparent 48%,#ddd 0,#ddd 52%,transparent 0);
      box-shadow: inset 0 0 0 1px #dddddd;
    }`
  }
  .cw__color-picker-popover {
    position: absolute;
    z-index: 11;
  }
  &:focus {
    .cw__color-picker-color-block {
      outline: 1px solid #dfe1eb;
      outline-offset: 2px;
    }
  }
`;

const ColorPickerTrigger = ({ color, title, children, interactive }) => {
  return (
    <ColorPickerStyles className={`cw__color-picker-trigger`} color={color}>
      <Popover content={children} interactive={interactive} placement="left">
        <Tooltip title={title}>
          <span
            tabIndex={0}
            className="cw__color-picker-color-block"
          >
            <span className="cw__color-picker-color-block-inner"></span>
          </span>
        </Tooltip>
      </Popover>
    </ColorPickerStyles>
  );
};

export default ColorPickerTrigger;
