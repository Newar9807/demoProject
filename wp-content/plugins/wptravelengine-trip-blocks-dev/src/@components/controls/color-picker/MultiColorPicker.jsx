import styled from "@emotion/styled";
import ControlContainer from "../../containers/ControlContainer";
import SingleColorPicker from "./SingleColorPicker";

const MultiColorPickerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const MultiColorPicker = ({ colors, value, onChange, ...ControlContainer }) => {
  return (
    <MultiColorPickerStyle>
      {colors?.map(({ title, name, colorPalette }, i) => {
        return (
          <SingleColorPicker
            key={i}
            value={value[name]}
            title={title}
            colorPalette={colorPalette}
            onChange={(_color) => onChange({ ...value, [name]: _color })}
            {...ControlContainer}
          />
        );
      })}
    </MultiColorPickerStyle>
  );
};

export default (props) => {
  return ControlContainer(MultiColorPicker)(props);
};
