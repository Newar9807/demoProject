import { __ } from '@wordpress/i18n'
import ServerSideRender from '@wordpress/server-side-render'
import { useBlockProps } from '@wordpress/block-editor'
import { InspectorControls } from '@components/editor'

export default ( props ) => {
    const { attributes } = props
    const blockProps = useBlockProps()

    return (
        <div {...blockProps}>
            <ServerSideRender
                block="wptravelenginetripblocks/faqs"
                attributes={{ ...attributes, editor: true }}
            />
            <InspectorControls {...props}/>
        </div>
    )
}
