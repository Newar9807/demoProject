import { __ } from '@wordpress/i18n';
import { Panel } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render'
import { InspectorControls } from '@components/editor'

export default (...args) => {
	const blockProps = useBlockProps();
	const props = args[0]
	const { attributes, setAttributes } = props
	return (
		<div {...blockProps}>
			<ServerSideRender
                block="wptravelenginetripblocks/trip-highlights"
                attributes={{ ...attributes, editor: true }}
			/>
			<InspectorControls group="styles" {...props} />
		</div>
	);
};
