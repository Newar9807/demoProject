import ServerSideRender from '@wordpress/server-side-render'

export default () => {


    return <ServerSideRender
        block="wptravelenginetripblocks/description"
        attributes={{ ...attributes, editor: true }}
    />
}