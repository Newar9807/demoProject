import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor'
import styleFromAttributes from '@utils/style-from-attributes.js'

export default ({ attributes }) => {
    const { padding, margin, border, borderRadius, boxShadow } = attributes
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
    return <div {...useBlockProps.save()}>
        <div className="widget wpte-booking-area wpte-bf-outer">
            <div className="wpte-booking-inner-wrapper"
                 style={styleFromAttributes(attributes, {
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
                     boxShadow: boxShadowValue
                 })
                 }
            >
                <div {...useInnerBlocksProps.save()} />
            </div>
        </div>
    </div>
}
