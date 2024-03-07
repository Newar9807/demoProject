import { useBlockProps } from '@wordpress/block-editor'
import ServerSideRender from '@wordpress/server-side-render'
import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@components/editor'

const TripDiscount = ( ...args) => {
    const props = args[0]
    const { attributes } = props
    const blockProps = useBlockProps()
    return <div {...blockProps}>
    <ServerSideRender
        block="wptravelenginetripblocks/trip-discount-badge"
        attributes={{ ...attributes, editor: true }}
    />
    <InspectorControls group="styles" {...props} />
    </div>
}
export default TripDiscount
