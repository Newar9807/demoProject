import { Panel as WPPanel, PanelBody } from '@wordpress/components'
import { useSelect } from '@wordpress/data'
import {
    BoxShadow,
    ControlGroup,
    MultiColorPicker,
    Border,
    Typography,
    SelectButtonGroup,
    Icons,
    Select,
    Text,
    Switch,
    InputNumber,
    RangeSlider,
    TokenField,
    Spacing,
    Textarea,
} from '@components'
import { isString } from 'lodash'

export default function Panel({ header, title, ...props }) {

    const paletteColors = useSelect((select) => select('core/block-editor').getSettings().colors)
    const { initialOpen, controls, children, attributes, setAttributes } = props

    return <WPPanel header={header || null}>
        <PanelBody title={title} initialOpen={initialOpen}>
            {/*<ControlGroup>*/}
                {
                    controls.map(([attribute, value]) => {
                        const {
                            type: attributeType,
                            default: defaultValue,
                            label,
                            control: { labels, type: controlType, style, settings, controlAttribute, ...options },
                        } = value

                        switch (controlType) {
                            case 'background':
                            case 'color':
                                const _colors = Object.entries(labels || { [attribute]: label })
                                    .map(([name, title]) => ({ name, title: (isString(title) ? title : title.label), colorPalette: paletteColors }))

                                const _value = isString(attributes[attribute]) ? { [attribute]: attributes[attribute] } : attributes[attribute]

                                return <MultiColorPicker
                                    label={label}
                                    direction="horizontal"
                                    colors={_colors}
                                    defaultValue={defaultValue}
                                    onChange={(value) => {
                                        setAttributes(attributeType === 'object' ? { [attribute]: value } : value)
                                    }}
                                    value={_value}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                />
                            case 'border':
                                return <Border
                                    label={label}
                                    defaultValue={defaultValue}
                                    onChange={(value) => {
                                        setAttributes({ [attribute]: value })
                                    }}
                                    value={attributes[attribute]}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...options}
                                />
                            case 'box-shadow':
                                return <BoxShadow
                                    label={label}
                                    defaultValue={defaultValue}
                                    onChange={(value) => {
                                        setAttributes({ [attribute]: value })
                                    }}
                                    value={attributes[attribute]}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...options}
                                />
                            case 'border-radius':
                            case 'spacing':
                                return <Spacing
                                    label={label}
                                    onChange={(value) => {
                                        setAttributes({ [attribute]: value })
                                    }}
                                    value={attributes[attribute]}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...controlAttribute}
                                />
                            case 'typography':
                                return <Typography
                                    label={label}
                                    value={attributes[attribute]}
                                    onChange={(value) => setAttributes({ [attribute]: value })}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    fontFamilies={[{ value: 'default', label: 'Default' }]}
                                    fontWeights={[{ value: 'normal', label: 'Normal' }]}
                                    {...options}
                                />
                            case 'alignment':
                                return <SelectButtonGroup
                                    label={label}
                                    value={attributes[attribute]}
                                    onChange={(value) => setAttributes({ [attribute]: value })}
                                    options={[
                                        { value: controlAttribute?.flex ? 'flex-start' : 'left', icon: Icons.leftAlignment, title: 'Left' },
                                        { value: 'center', icon: Icons.centerAlignment, title: 'Center' },
                                        { value: controlAttribute?.flex ? 'flex-end' : 'right', icon: Icons.rightAlignment, title: 'Right' },
                                    ]}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...controlAttribute}
                                />
                            case 'range':
                                return <RangeSlider
                                    label={label}
                                    onChange={(value) => setAttributes({ [attribute]: value })}
                                    value={attributes[attribute]}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...controlAttribute}
                                />
                            case 'select':
                                return <Select
                                    label={label}
                                    onChange={(value) => setAttributes({ [attribute]: value })}
                                    value={attributes[attribute]}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...options}
                                />
                            case 'text':
                                return <Text
                                    label={label}
                                    onChange={(value) => setAttributes({ [attribute]: value })}
                                    value={attributes[attribute]}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...options}
                                />
                            case 'textarea':
                                return <Textarea
                                    label={label}
                                    onChange={(value) => setAttributes({ [attribute]: value })}
                                    value={attributes[attribute]}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...options}
                                />
                            case 'switch':
                                return <Switch
                                    label={label}
                                    onChange={(value) => setAttributes({ [attribute]: value })}
                                    value={attributes[attribute]}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...options}
                                />
                            case 'select-button':
                                return <SelectButtonGroup
                                    label={label}
                                    value={attributes[attribute]}
                                    onChange={(value) => setAttributes({ [attribute]: value })}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...controlAttribute}
                                />
                            case 'input-number':
                                return <InputNumber
                                    label={label}
                                    value={attributes[attribute]}
                                    onChange={(value) => setAttributes({ [attribute]: value })}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...options}
                                />
                            case 'token-field':
                                return <TokenField
                                    label={label}
                                    value={attributes[attribute]}
                                    onChange={(value) => setAttributes({ [attribute]: value })}
                                    divider={attribute !== controls[0][0] ? 'top' : ''}
                                    {...options}
                                />
                        }
                    })
                }
            {/*</ControlGroup>*/}
        </PanelBody>
        {
            children
        }
    </WPPanel>
}
