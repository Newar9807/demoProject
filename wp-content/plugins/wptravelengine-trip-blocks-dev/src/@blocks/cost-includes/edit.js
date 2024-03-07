import ServerSideRender from '@wordpress/server-side-render'
import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'
import { InspectorControls } from '@components/editor'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/animations/shift-away.css'

export default (...args) => {

    const props = args[0]
    const { attributes, setAttributes } = props
    const blockProps = useBlockProps()

    return (
        <div {...blockProps}>
            <ServerSideRender
                block="wptravelenginetripblocks/cost-includes"
                attributes={{ ...attributes, editor: true }}
            />
            <InspectorControls group="styles" {...props}/>
        </div>
    )
}

