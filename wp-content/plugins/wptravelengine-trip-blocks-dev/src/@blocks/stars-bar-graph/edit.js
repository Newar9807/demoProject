import ServerSideRender from "@wordpress/server-side-render"
import { useBlockProps } from "@wordpress/block-editor"
import { InspectorControls } from "@components/editor"

const Reviews = (...args) => {
    const props = args[0];
    const { attributes, setAttributes } = props;
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <ServerSideRender
                block="wptravelenginetripblocks/stars-bar-graph"
                attributes={{ ...attributes, editor: true }}
            />
            <InspectorControls group="styles" {...props} />
        </div>
    );
}

export default Reviews