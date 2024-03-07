import { ControlGroup, Spacing } from '@components'
import { isBoolean } from 'lodash'

export default function Dimensions({ settings }) {
    const { padding, margin } = isBoolean(settings) ? { padding: true, margin: true } : settings
    return <ControlGroup>
        {margin && <Spacing label="Margin" value={margin} />}
        {padding &&
            <Spacing label="Padding" value={padding}
                     divider={margin ? 'top' : ''} />}
    </ControlGroup>
}