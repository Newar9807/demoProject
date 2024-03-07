import styled from "@emotion/styled";
import Tippy from "@tippyjs/react";

const TooltipStyle = styled.div`
  display: inline-flex;
  cursor: pointer;
  &:hover {
    color: var(--cw__secondary-color);
  }
  .wc__tooltip {
    display: block !important;
  }
`;
export default ({ children, title, ...rest }) => {
  return (
    <TooltipStyle>
      <Tippy
        className="wc__tooltip"
        content={title}
        disabled={!title}
        animation="shift-away"
        arrow
        {...rest}
      >
        {children}
      </Tippy>
    </TooltipStyle>
  );
};
