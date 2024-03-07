import { Popover, PopoverButton } from "../components"
import ControlContainer from "../containers/ControlContainer"
import Spacing from "./Spacing"

const PopoverContent = ({ value, onChange, ...rest }) => {
    const { margin } = value;
    return <>
        <Spacing
            label="Margin"
            value={margin}
            onChange={m => onChange({ ...value, margin: m })}
            isChildren
            {...rest}
        />
    </>
}

const Divider = ({ changed, ...ControlContainer }) => {
    return <Popover content={<PopoverContent {...ControlContainer} />}>
        <PopoverButton changed={changed} />
    </Popover>
}

export default (props) => {
    return ControlContainer(Divider)(props)
}
