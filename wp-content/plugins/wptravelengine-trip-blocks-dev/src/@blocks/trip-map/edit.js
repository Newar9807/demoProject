import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render'
import { useBlockProps} from '@wordpress/block-editor'
import { InspectorControls } from '@components/editor'

export default (...args) => {
	const blockProps = useBlockProps();
    const props = args[0];
    const {attributes, setAttributes} = props;
	return (
		<div {...blockProps}>
			<ServerSideRender
                block="wptravelenginetripblocks/trip-map"
                attributes={{ ...attributes, editor: true }}
			/>
            <InspectorControls {...props} group="styles" />
		</div>
	);
};
