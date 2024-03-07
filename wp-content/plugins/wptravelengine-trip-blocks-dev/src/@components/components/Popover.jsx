import Tippy from "@tippyjs/react";

export default ({ content, children, className, interactive, ...rest }) => {
  const cls = `cw_popover ${className}`;
  return (
    <Tippy
      content={content}
      className={cls}
      trigger="click"
      theme="light"
      disabled={!content}
      animation="shift-away"
      interactive
      allowHTML
      arrow
      {...(!interactive ? { appendTo: document.body } : {})}
      {...rest}
    >
      <div>{children}</div>
    </Tippy>
  );
};
