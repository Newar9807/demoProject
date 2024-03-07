import { ControlGroup, MultiColorPicker } from '@components';
import { isBoolean } from 'lodash';

export default function Colors({ settings, attributes, setAttributes }) {
    const { text, link, background } = isBoolean(settings) ? { text: true, link: true, background: true } : settings;
    console.debug(attributes)
    return <ControlGroup>
        {text && <MultiColorPicker
            label="Text"
            direction="horizontal"
            colors={[
                {
                    name: 'color',
                    title: 'Color',
                },
            ]}
            value={text}
        />}
        {link && <MultiColorPicker
            label="Link"
            direction="horizontal"
            colors={[
                {
                    name: 'color',
                    title: 'Initial',
                },
                {
                    name: 'hover',
                    title: 'Hover',
                },
            ]}
            value={link}
            divider={text ? 'top' : ''}
        />}
        {background && <MultiColorPicker
            label="Background"
            direction="horizontal"
            colors={[
                {
                    name: 'color',
                    title: 'Background Color',
                },
            ]}
            value={attributes.background}
            onChange={newValue => {
                setAttributes({ background: newValue })
            }}
            divider={text || link ? 'top' : ''}
        />}
    </ControlGroup>
}