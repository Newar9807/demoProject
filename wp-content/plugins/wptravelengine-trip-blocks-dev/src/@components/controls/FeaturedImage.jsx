import styled from "@emotion/styled";
import { Select, Text } from "..";
import { Popover, PopoverButton } from "../components";
import ControlContainer from "../containers/ControlContainer";
import Icons from "../assets/Icons";
import SelectButton from "./SelectButton";

const PopoverStyle = styled.div`
  .cw__control-item {
    &.cw__divider-top {
      margin-top: 12px;
      padding-top: 12px;
    }
  }
`;

const CustomWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    .cw__control-item{
        margin: 0 !important;
        padding: 0 !important;
    }
`

const CustomRatio = ({ value, onChange, ...rest }) => {
    const [firstVal, secondVal] = value.split(":");
    return <CustomWrapper className="cw__custom-wrapper cw__control-item">
        <Text type="number" value={firstVal} onChange={f => onChange(`${f}:${secondVal}`)} {...rest} />
        <span>:</span>
        <Text type="number" value={secondVal} onChange={s => onChange(`${firstVal}:${s}`)} {...rest} />
    </CustomWrapper>
}

const PopoverContent = ({ value, onChange }) => {
  const { ratio, scale, size, visibility, customRatio } = value;
  return (
    <PopoverStyle>
      <Select
        label="Image Ratio"
        direction="horizontal"
        options={[
          {
            value: "original",
            label: "Original",
          },
          {
            value: "1:1",
            label: "Square - 1:1",
          },
          {
            value: "4:3",
            label: "Standard - 4:3",
          },
          {
            value: "3:4",
            label: "Portrait - 3:4",
          },
          {
            value: "3:2",
            label: "Classic - 3:2",
          },
          {
            value: "2:3",
            label: "Classic Portrait - 2:3",
          },
          {
            value: "16:9",
            label: "Wide - 16:9",
          },
          {
            value: "9:16",
            label: "Tall - 9:16",
          },
          {
            value: "custom",
            label: "Custom",
          },
        ]}
        value={ratio}
        onChange={(val) => onChange({ ...value, ratio: val })}
        isChildren
        style={{ width: "136px" }}
        variant="solid"
      />
      {ratio === "custom" && <CustomRatio value={customRatio || "1:1"} onChange={r => onChange({ ...value, customRatio: r })} />}
      {ratio !== "original" && <Select
        label="Image Scale"
        direction="horizontal"
        options={[
          { value: "default", label: "Default" },
          { value: "fill", label: "Fill" },
          { value: "contain", label: "Contain" },
          { value: "cover", label: "Cover" },
          { value: "none", label: "None" },
        ]}
        divider="top"
        value={scale}
        onChange={(val) => onChange({ ...value, scale: val })}
        isChildren
        style={{ width: "136px" }}
        variant="solid"
      />}
      <Select
        label="Image Size"
        direction="horizontal"
        options={[
          { value: "default", label: "Default" },
          { value: "full-size", label: "Full Size" },
          { value: "medium", label: "Medium" },
          { value: "thumbnail", label: "Thumbnail" },
        ]}
        divider="top"
        value={size}
        onChange={(val) => onChange({ ...value, size: val })}
        isChildren
        style={{ width: "136px" }}
        variant="solid"
      />
      <SelectButton
        label="Image Visibility"
        size="xl"
        options={[
          { value: "desktop", icon: Icons.desktop, title: "Desktop" },
          { value: "tablet", icon: Icons.tablet, title: "Tablet" },
          { value: "mobile", icon: Icons.mobile, title: "Mobile" },
        ]}
        divider="top"
        value={visibility}
        onChange={(val) => onChange({ ...value, visibility: val })}
        isMultiple
        isChildren
      />
    </PopoverStyle>
  );
};

const FeaturedImage = ({ changed, ...ControlContainer }) => {
  return (
    <Popover content={<PopoverContent {...ControlContainer} />}>
      <PopoverButton changed={changed} />
    </Popover>
  );
};

export default (props) => {
  return ControlContainer(FeaturedImage)(props);
};
