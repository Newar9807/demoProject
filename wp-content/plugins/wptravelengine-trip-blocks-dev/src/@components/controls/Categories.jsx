import Icons from "../assets/Icons"
import { Popover, PopoverButton } from "../components"
import ControlContainer from "../containers/ControlContainer"
import { SelectButtonGroup } from ".."

const PopoverContent = ({ value, onChange }) => {
    const { separator } = value;
    return <>
        <SelectButtonGroup
            label="Separator"
            direction="horizontal"
            size="sm"
            value={separator}
            onChange={(val) => onChange({ ...value, separator: val })}
            options={[
                { value: "dot", icon: Icons.dot },
                { value: "dash", icon: Icons.minus },
                { value: "pipe", icon: Icons.pipe },
                { value: "slash", icon: Icons.slash }
            ]}
            isChildren
        />
    </>
}

const Categories = ({ changed, ...ControlContainer }) => {
    return <Popover content={<PopoverContent {...ControlContainer} />}>
        <PopoverButton changed={changed} />
    </Popover>
}

export default (props) => {
    return ControlContainer(Categories)(props)
}
