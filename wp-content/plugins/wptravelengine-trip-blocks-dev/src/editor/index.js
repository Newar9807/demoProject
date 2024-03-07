import { registerBlockCollection } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import initBlock from '@utils/init-block'

const blockContext = require.context('../@blocks', true, /block\.js$/)

import '../assets/sass/common.scss'
import '../assets/sass/components.scss'

const __return_null = () => null

blockContext.keys().forEach(blockPath => {
    if (!blockPath.split('/').includes('block.js')) return
    const { edit, metadata, save } = blockContext(blockPath)

    initBlock({
        name: metadata.name,
        metadata,
        settings: {
            edit,
            save: save ?? __return_null,
        },
    })
})

registerBlockCollection('wptravelenginetripblocks', {
    title: __('WP Travel Engine - Trip Blocks ', 'wptravelengine-trip-blocks'),
})
