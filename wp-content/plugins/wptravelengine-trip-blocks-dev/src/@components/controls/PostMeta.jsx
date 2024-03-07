import { ControlTitle, Popover, PopoverButton } from "../components"
import ControlContainer from "../containers/ControlContainer"
import { InputNumber, Select, SelectButtonGroup, Switch, Text } from "..";
import Icons from "../assets/Icons";

const PopoverContent = ({ value, onChange, ...rest }) => {
    const {
        query,
        separator,
        authorLabel,
        showAvatar,
        wordsPerMinute,
        showUpdatedDateLabel,
        updatedDateLabel
    } = value;
    return <>
        <Select
            value={query}
            onChange={_query => onChange({ ...value, query: _query })}
            options={[
                { value: "author", label: "Author" },
                { value: "published-date", label: "Published Date" },
                { value: "comments", label: "Comments" },
                { value: "reading-time", label: "Reading Time" },
                { value: "updated-date", label: "Updated Date" },
            ]}
            divider="bottom"
            isMultiple
            isChildren
        />
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
            divider="bottom"
            isChildren
        />
        <ControlTitle title="AUTHOR SETTINGS" />
        <Text
            label="Author Label"
            value={authorLabel}
            onChange={author => onChange({ ...value, authorLabel: author })}
            divider="bottom"
            isChildren
        />
        <Switch
            label="Show Avatar"
            direction="horizontal"
            value={showAvatar}
            onChange={av => onChange({ ...value, showAvatar: av })}
            divider="bottom"
            isChildren
        />
        <ControlTitle title="READING TIME SETTINGS" />
        <InputNumber
            label="Words Per Minute"
            direction="horizontal"
            value={wordsPerMinute}
            onChange={minute => onChange({ ...value, wordsPerMinute: minute })}
            divider="bottom"
            isChildren
        />
        <ControlTitle title="UPDATED DATE SETTINGS" />
        <Switch
            label="Show Updated Date Label"
            direction="horizontal"
            value={showUpdatedDateLabel}
            onChange={date => onChange({ ...value, showUpdatedDateLabel: date })}
            divider="bottom"
            isChildren
        />
        <Text
            label="Udated Date Label"
            value={updatedDateLabel}
            onChange={updatedDate => onChange({ ...value, updatedDateLabel: updatedDate })}
            isChildren
        />
    </>
}

const PostMeta = ({ changed, ...ControlContainer }) => {
    return <Popover content={<PopoverContent {...ControlContainer} />} placement="bottom">
        <PopoverButton changed={changed} />
    </Popover>
}

export default (props) => {
    return ControlContainer(PostMeta)(props)
}
