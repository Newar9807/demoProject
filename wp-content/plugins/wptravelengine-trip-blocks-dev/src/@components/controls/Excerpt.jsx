import { Popover, PopoverButton } from "../components"
import ControlContainer from "../containers/ControlContainer"
import { InputNumber, Select } from ".."

const PopoverContent = ({ value, onChange, ...rest }) => {
    const { postContent, length } = value;
    return <>
        <Select
            label="Post Content"
            direction="horizontal"
            value={postContent}
            onChange={content => onChange({ ...value, postContent: content })}
            options={[
                {value: "excerpt", label: "Excerpt"},
                {value: "content", label: "Content"},
            ]}
            variant="solid"
            divider="bottom"
            isChildren
        />
        <InputNumber
            label="Length"
            direction="horizontal"
            value={length}
            onChange={len => onChange({ ...value, length: len })}
            isChildren
        />
    </>
}

const Excerpt = ({ changed, ...ControlContainer }) => {
    return <Popover content={<PopoverContent {...ControlContainer} />}>
        <PopoverButton changed={changed} />
    </Popover>
}

export default (props) => {
    return ControlContainer(Excerpt)(props)
}
