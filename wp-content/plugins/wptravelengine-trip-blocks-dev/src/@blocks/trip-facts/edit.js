import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'
import ServerSideRender from '@wordpress/server-side-render'
import { InspectorControls } from '@components/editor'

const TripFacts = (...args) => {
    const props = args[0]
    const { attributes, setAttributes } = props
    const blockProps = useBlockProps()

    return (
        <div {...blockProps}>
            <ServerSideRender
                block="wptravelenginetripblocks/trip-facts"
                attributes={{ ...attributes, editor: true }}
            />

            <InspectorControls group="styles" {...props} />
        </div>
    )
}

export default TripFacts
