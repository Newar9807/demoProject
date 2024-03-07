import ServerSideRender from "@wordpress/server-side-render"
import { useBlockProps } from "@wordpress/block-editor"
import { InspectorControls } from "@components/editor"

const Reviews = (...args) => {
    const props = args[0];
    const { attributes, setAttributes } = props;
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            {/* <ServerSideRender
                block="wptravelenginetripblocks/reviewer-gallery"
                attributes={{ ...attributes, editor: true }}
            /> */}
            <figure className="trip-block-reviewer-gallery">
                <figure className="trip-block-reviewer-image">
                    <img src="https://images.unsplash.com/photo-1709625862206-84f82e0754a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </figure>
                <figure className="trip-block-reviewer-image">
                    <img src="https://images.unsplash.com/photo-1709625862206-84f82e0754a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </figure>
                <figure className="trip-block-reviewer-image">
                    <img src="https://images.unsplash.com/photo-1709625862206-84f82e0754a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </figure>
                <figure className="trip-block-reviewer-image">
                    <img src="https://images.unsplash.com/photo-1709625862206-84f82e0754a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </figure>
            </figure>
            <InspectorControls group="styles" {...props} />
        </div>
    );
}

export default Reviews