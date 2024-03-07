import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'
import ServerSideRender from '@wordpress/server-side-render'
import { InspectorControls } from '@components/editor'

export default (...args) => {
    const blockProps = useBlockProps()
    const props = args[0]
    const { attributes } = props

    return (
        <div {...blockProps}>
            <ServerSideRender
                block="wptravelenginetripblocks/trip-description"
                attributes={{ ...attributes, editor: true }}
            />
            <InspectorControls group="styles" {...props} />
        </div>
    )
}
