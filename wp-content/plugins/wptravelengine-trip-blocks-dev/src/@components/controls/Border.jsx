import { InputNumber, SingleColorPicker, Select } from '../'
import ControlContainer from '../containers/ControlContainer'
import styled from '@emotion/styled'
import { Popover, PopoverButton } from '../components'
import Icons from '../assets/Icons'

const BorderStyle = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
`

const PopoverContent = ({ value, onChange }) => {
    const { width, style } = value
    return (
        <>
            <InputNumber
                label="Border Width"
                direction="horizontal"
                value={width}
                onChange={(_width) => onChange({ ...value, width: _width })}
                min={0}
                isChildren
            />
            <Select
                label="Border Style"
                options={[
                    { value: 'none', label: 'None', icon: Icons.none },
                    { value: 'solid', label: 'Solid', icon: Icons.minus },
                    { value: 'dashed', label: 'Dash', icon: Icons.dashed },
                    { value: 'double', label: 'Double', icon: Icons.menu },
                    { value: 'dotted', label: 'Dot', icon: Icons.ellipsis },
                ]}
                value={style}
                onChange={(_style) => onChange({ ...value, style: _style })}
                isChildren
            />
        </>
    )
}

const Border = ({
                    colorPalette,
                    changed,
                    value,
                    onChange,
                    ...ControlContainer
                }) => {
    const { color } = value
    return (
        <BorderStyle>
            <SingleColorPicker
                colorPalette={colorPalette}
                title="Border Color"
                value={color}
                onChange={(color) => onChange({ ...value, color: color })}
                {...ControlContainer}
            />
            <Popover
                content={
                    <PopoverContent value={value} onChange={onChange} {...ControlContainer} />
                }
            >
                <PopoverButton changed={changed} />
            </Popover>
        </BorderStyle>
    )
}

export default (props) => {
    return ControlContainer(Border)({ ...props, direction: 'horizontal' })
};
