import { RichText, useBlockProps } from '@wordpress/block-editor'

import { InspectorControls } from '@components/editor'
import styleFromAttributes from '@utils/style-from-attributes.js'

const alignments = {
    'left': 'flex-start',
    'center': 'center',
    'right': 'flex-end',
}

export default function Edit(props) {
    const { attributes: { text, alignment, fullWidth, padding, margin, border, borderRadius, textColor, background, boxShadow }, setAttributes } = props
    const properties = ['position', 'xOffset', 'yOffset', 'blur', 'spread', 'color'];
    const _value = properties.map(property => {
        if (property === 'position') {
            return boxShadow[property] !== 'inset' ? '' : 'inset';
        }

        if (property === 'color') {
            return boxShadow[property] ?? '';
        }

        const propertyValue = boxShadow[property] ?? '';

        return propertyValue !== '' ? propertyValue : 0;
    });
    const boxShadowValue = _value.join(' ');

    return <div style={{ display: 'flex', textAlign: 'center', justifyContent: alignments[alignment] ?? 'center' }}>
        <RichText
            {...useBlockProps()}
            style={styleFromAttributes(props.attributes,
                {
                    width: fullWidth ? '100%' : 'auto',
                    borderWidth: border.width,
                    borderColor: border.color,
                    borderStyle: border.style,
                    borderTopLeftRadius: borderRadius.top,
                    borderTopRightRadius: borderRadius.right,
                    borderBottomLeftRadius: borderRadius.left,
                    borderBottomRightRadius: borderRadius.bottom,
                    paddingTop: padding.top,
                    paddingBottom: padding.bottom,
                    paddingLeft: padding.left,
                    paddingRight: padding.right,
                    marginTop: margin.top,
                    marginBottom: margin.bottom,
                    marginLeft: margin.left,
                    marginRight: margin.right,
                    color: textColor.initial,
                    background: background.initial,
                    '--text-hover-color':textColor.hover,
                    '--background-hover-color':background.hover,
                    boxShadow: boxShadowValue
                },
            )}
            className={'wpte-bf-btn wte-book-now'}
            onChange={(text) => setAttributes({ text })}
            value={text}
            placeholder="Add text..."
        />
        <InspectorControls {...props} />
    </div>
}
