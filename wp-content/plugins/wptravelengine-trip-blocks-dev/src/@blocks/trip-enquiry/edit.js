import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render'
import { InspectorControls } from '@components/editor';

const TripEnquiry = ( ...args) => {
    const props = args[0]
    const { attributes } = props
    const blockProps = useBlockProps()
    return <div {...blockProps}>
        <ServerSideRender
            block="wptravelenginetripblocks/trip-enquiry"
            attributes={{ ...attributes, editor: true }}
        />
        <InspectorControls group="styles" {...props} />
    </div>
}
export default TripEnquiry
