import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor'

import { InspectorControls } from '@components/editor'
import styleFromAttributes from '@utils/style-from-attributes.js'

const allowedBlocks = [
    ...['heading', 'paragraph', 'buttons', 'columns', 'list', 'separator'].map(n => `core/${n}`),
    ...['trip-pricing', 'discount', 'booking-button'].map(n => `wptravelenginetripblocks/${n}`),
]

const TEMPLATE = [
    ['wptravelenginetripblocks/trip-discount-badge'],
    ['wptravelenginetripblocks/trip-pricing'],
    ['wptravelenginetripblocks/trip-booking-button', { text: 'Check Availability' }],
    ['core/paragraph', {
        content: 'Need help with booking? <a style="color:#147DFE" href="#wte_enquiry_form_scroll_wrapper">Send Us A Message</a>',
        align: 'center',
    }],
]
export default (props) => {
    const { attributes: { padding, margin, border, borderRadius, boxShadow } } = props
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
    const blockProps = useBlockProps()
    const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, { allowedBlocks, template: TEMPLATE })
    return (
        <div {...innerBlocksProps}>
            <div className="widget wpte-booking-area wpte-bf-outer">
                <div className="wpte-booking-inner-wrapper"
                     style={styleFromAttributes(props.attributes,
                         {
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
                         },
                     )}>
                    <InnerBlocks {...{ allowedBlocks, template: TEMPLATE }} />
                </div>
            </div>
            <InspectorControls {...props} />
        </div>
    )
};
