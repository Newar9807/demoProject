import { useState } from "@wordpress/element";
import { Popover } from "../../components";
import styled from "@emotion/styled";
import ControlContainer from "../../containers/ControlContainer";
import Icons from "../../assets/Icons";
import ColorSwatches from "./ColorSwatches";

const ColorPaletteOptions = styled.div`
  .cw__palette-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    margin: 0 0 8px;
  }
  .cw__color-palette-option {
    &:not(:last-child) {
      margin-bottom: 13px;
    }
    .cw__color-palette-swatches-inner {
      gap: 2px;
    }
  }
`;

const ColorPalettes = ({ value, onChange, colorPalettes, ...ControlContainer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleTrigger = (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      setIsVisible(!isVisible);
    }
  };

  const handleSelectPalette = (_value) => (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      onChange(_value);
    }
  };

  return (
    <ColorSwatches
      onClick={handleTrigger}
      onKeyDown={handleTrigger}
      colors={value.colors}
      className="has-dropdown"
      onChange={(_colors) => onChange({ ...value, colors: _colors })}
    >
      <div className="cw__dropdown-button-wrapper">
        <Popover
          className="cw__color-palettes-popover"
          content={
            <ColorPaletteOptions className="cw__color-palette-options">
              {colorPalettes &&
                colorPalettes.map((palette, i) => {
                  return (
                    <div
                      key={i}
                      className="cw__color-palette-option"
                    >
                      <label className="cw__palette-label">
                        {palette.name}
                      </label>
                      <ColorSwatches
                        className={
                          palette.name === value.name ? "selected" : ""
                        }
                        colors={palette.colors}
                        onClick={handleSelectPalette(palette)}
                        onKeyDown={handleSelectPalette(palette)}
                      />
                    </div>
                  );
                })}
            </ColorPaletteOptions>
          }
        >
          <button className="dropdown-button">{Icons.chevronDown}</button>
        </Popover>
      </div>
    </ColorSwatches>
  );
};

export default (props) => {
  return ControlContainer(ColorPalettes)(props);
};
