import styled from "@emotion/styled";
import { ColorPalette, ColorPicker } from "@wordpress/components";
import ControlContainer from "../../containers/ControlContainer";
import ColorPickerTrigger from "./ColorPickerTrigger";

const ColorPickerHeader = styled.header`
  padding: 5px;
  border: 1px solid var(--cw__border-color);
  border-radius: var(--cw__border-radius);
  margin: 0 -4px 13px;
  .components-circular-option-picker__swatches{
    gap: 3px;
    .components-circular-option-picker__option-wrapper, .components-button{
      width: 26px;
      height: 26px;
    }
    .components-circular-option-picker__option-wrapper{
      &:hover{
        transform: scale(1.1);
      }
    }
  }
`;

const SingleColorPicker = ({ colorPalette, value, title, interactive, ...ControlContainer }) => {
  return (
    <ColorPickerTrigger color={value} title={title} interactive={interactive}>
      {colorPalette && (
        <ColorPickerHeader>
          <ColorPalette
            colors={colorPalette}
            value={value}
            clearable={false}
            disableCustomColors
            {...ControlContainer}
          />
        </ColorPickerHeader>
      )}
      <ColorPicker
        color={value}
        enableAlpha
        defaultValue="#000"
        {...ControlContainer}
      />
    </ColorPickerTrigger>
  );
};

export default (props) => {
  return ControlContainer(SingleColorPicker)(props);
};
