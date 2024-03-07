import ServerSideRender from "@wordpress/server-side-render"
import { useBlockProps } from "@wordpress/block-editor"
import { InspectorControls } from "@components/editor"

const Ratings = (...args) => {
    const props = args[0];
    const { attributes, setAttributes } = props;
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <ServerSideRender
                block="wptravelenginetripblocks/trip-ratings"
                attributes={{ ...attributes, editor: true }}
            />
            <InspectorControls group="styles" {...props} />
        </div>
    );
}

export default Ratings