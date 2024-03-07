import styled from "@emotion/styled";
import { RangeSlider, SingleColorPicker, Switch } from "../";
import { Popover, PopoverButton } from "../components";
import ControlContainer from "../containers/ControlContainer";
import SelectButton from "./SelectButton";

const BoxShadowPopoverContent = styled.div`
  .components-range-control__wrapper {
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 7px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -7px;
      background-image: url("data:image/svg+xml,%3Csvg width='6' height='1' viewBox='0 0 6 1' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_330_2020)'%3E%3Cpath d='M0.9198 0.9375C0.803768 0.9375 0.692488 0.891406 0.610441 0.809359C0.528394 0.727312 0.4823 0.616032 0.4823 0.5C0.4823 0.383968 0.528394 0.272688 0.610441 0.190641C0.692488 0.108594 0.803768 0.0625 0.9198 0.0625H5.2948C5.41083 0.0625 5.52211 0.108594 5.60416 0.190641C5.68621 0.272688 5.7323 0.383968 5.7323 0.5C5.7323 0.616032 5.68621 0.727312 5.60416 0.809359C5.52211 0.891406 5.41083 0.9375 5.2948 0.9375H0.9198Z' fill='%2342474B'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_330_2020'%3E%3Crect width='5.25' height='0.875' fill='white' transform='translate(0.4823 0.0625)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"),
        url("data:image/svg+xml,%3Csvg width='2' height='7' viewBox='0 0 2 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_330_2022)'%3E%3Cpath d='M0.6073 6.5625V0.4375V6.5625Z' fill='%23D9D9D9'/%3E%3Cpath d='M0.6073 6.5625V0.4375' stroke='%2342474B' stroke-width='0.875' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_330_2022'%3E%3Crect width='0.875' height='7' fill='white' transform='translate(0.1698)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"),
        url("data:image/svg+xml,%3Csvg width='8' height='7' viewBox='0 0 8 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_330_2024)'%3E%3Cpath d='M3.98232 0.743652V6.25615M1.22607 3.4999H6.73857' stroke='%2342474B' stroke-width='0.875' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_330_2024'%3E%3Crect width='7' height='7' fill='white' transform='translate(0.4823)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
      background-position:
        left center,
        center center,
        right center;
      background-repeat: no-repeat;
    }
  }
  .cw__control-item.cw__box-shadow-blur{
		.components-range-control__wrapper{
			&::after{
				background-image: url("data:image/svg+xml,%3Csvg width='2' height='7' viewBox='0 0 2 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clipPath='url(%23clip0_330_2022)'%3E%3Cpath d='M0.6073 6.5625V0.4375V6.5625Z' fill='%23D9D9D9'/%3E%3Cpath d='M0.6073 6.5625V0.4375' stroke='%2342474B' stroke-width='0.875' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_330_2022'%3E%3Crect width='0.875' height='7' fill='white' transform='translate(0.1698)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"),
				url("data:image/svg+xml,%3Csvg width='8' height='7' viewBox='0 0 8 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clipPath='url(%23clip0_330_2024)'%3E%3Cpath d='M3.98232 0.743652V6.25615M1.22607 3.4999H6.73857' stroke='%2342474B' stroke-width='0.875' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_330_2024'%3E%3Crect width='7' height='7' fill='white' transform='translate(0.4823)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
				background-position: left center, right center;
			}
		}
	}
`;

const BoxShadowStyle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const PopoverContent = ({ value, onChange }) => {
  const { enable, xOffset, yOffset, blur, spread, position } = value
  return (
    <BoxShadowPopoverContent>
      <Switch
        label="Enable"
        direction="horizontal"
        value={enable}
        onChange={(val) => onChange({ ...value, enable: val })}
        isChildren
      />
      <RangeSlider
        label="Horizontal"
        value={xOffset}
        onChange={(val) => onChange({ ...value, xOffset: val })}
        units={[
          {
            unit: 'px',
            min: -100,
            max: 100
          }
        ]}
        isChildren
      />
      <RangeSlider
        label="Vertical"
        value={yOffset}
        onChange={(val) => onChange({ ...value, yOffset: val })}
        units={[
          {
            unit: 'px',
            min: -100,
            max: 100
          }
        ]}
        isChildren
      />
      <RangeSlider
        label="Blur"
        value={blur}
        onChange={(val) => onChange({ ...value, blur: val })}
        units={[
          {
            unit: 'px',
            min: 0,
            max: 100
          }
        ]}
        className="cw__box-shadow-blur"
        isChildren
      />
      <RangeSlider
        label="Spread"
        value={spread}
        onChange={(val) => onChange({ ...value, spread: val })}
        units={[
          {
            unit: 'px',
            min: -100,
            max: 100
          }
        ]}
        isChildren
      />
      <SelectButton
        label="Position"
        options={[
          { value: "outline", label: "Outline" },
          { value: "inset", label: "Inset" },
        ]}
        value={position}
        onChange={(val) => onChange({ ...value, position: val })}
        isChildren
      />
    </BoxShadowPopoverContent>
  );
};

const BoxShadow = ({
  colorPalette,
  value,
  onChange,
  changed,
  ...ControlContainer
}) => {
  const { color } = value;
  return (
    <BoxShadowStyle>
      {value?.enable && <SingleColorPicker
        colorPalette={colorPalette}
        value={color}
        onChange={(val) => onChange({ ...value, color: val })}
        isChildren
      />}
      <Popover content={<PopoverContent value={value} onChange={onChange} />}>
        <PopoverButton changed={changed} />
      </Popover>
    </BoxShadowStyle>
  );
};

export default (props) => {
  return ControlContainer(BoxShadow)({ ...props, direction: 'horizontal' });
};
