import { ControlGroup, Border, RangeSlider, BoxShadow } from '@components'
import { isBoolean } from 'lodash'

export default function BorderControl({ settings, attributes, setAttributes }) {
    const {
        border,
        boxShadow,
        roundness,
    } = (isBoolean(settings) && settings) ? { border: true, boxShadow: true, roundness: true } : settings
    return <>
        {border && <Border
            label="Border"
            value={attributes.border}
            onChange={newValue => {
                setAttributes({
                    border: newValue,
                })
            }}
        />}
        {boxShadow && <BoxShadow
            label="Box Shadow"
            value={attributes.border}
            divider={border ? 'top' : ''}
            onChange={newValue => {
                setAttributes({
                    boxShadow: newValue,
                })
            }}
        />}
        {roundness && <RangeSlider label="Roundness" value={roundness} divider={border || boxShadow ? 'top' : ''} />}
    </>
}