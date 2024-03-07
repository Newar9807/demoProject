import styled from "@emotion/styled";
import Icons from "../assets/Icons";
import Tooltip from "./Tooltip";

const PopoverButtonStyle = styled.button`
  padding: 4px;
  // border: 1px solid var(--cw__border-color);
  border: none;
  border-radius: var(--cw__border-radius);
  cursor: pointer;
  background: none;
  box-shadow: 0 0 0 1px var(--cw__border-color);
  &:hover,
  &.changed {
    color: var(--cw__secondary-color);
    box-shadow: 0 0 0 1px var(--cw__secondary-color);
  }
  svg{
    vertical-align: top;
  }
  &+button{
    margin-left: 8px;
  }
`;

const PopoverButton = ({ title, changed, children, ...rest }) => {
  return (
    <Tooltip title={title}>
      <PopoverButtonStyle type="button" className={changed === 1 ? "changed" : ""} {...rest}>
        {children || Icons.pen}
      </PopoverButtonStyle>
    </Tooltip>
  );
};

export default PopoverButton;
