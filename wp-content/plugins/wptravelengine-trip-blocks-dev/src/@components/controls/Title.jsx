import { Popover, PopoverButton } from "../components"
import ControlContainer from "../containers/ControlContainer"
import RangeSlider from "./RangeSlider";
import Select from "./Select"

const PopoverContent = ({ value, onChange, ...rest }) => {
    const { headingTag, fontSize } = value;
    return <>
        <Select
            label="Heading Tag"
            direction="horizontal"
            value={headingTag}
            onChange={tag => onChange({ ...value, headingTag: tag })}
            options={[
                { value: "h1", label: "H1" },
                { value: "h2", label: "H2" },
                { value: "h3", label: "H3" },
                { value: "h4", label: "H4" },
                { value: "h5", label: "H5" },
                { value: "h6", label: "H6" },
            ]}
            variant="solid"
            isChildren
        />
        <RangeSlider
            label="Font Size"
            value={fontSize}
            onChange={size => onChange({ ...value, fontSize: size })}
            units={["px", "em", "rem", "vw"]}
            max={fontSize?.unit === "px" ? 100 : 10}
            divider="top"
            isChildren
        />
    </>
}

const Title = ({ changed, ...ControlContainer }) => {
    return <Popover content={<PopoverContent {...ControlContainer} />}>
        <PopoverButton changed={changed} />
    </Popover>
}

export default (props) => {
    return ControlContainer(Title)(props)
}
