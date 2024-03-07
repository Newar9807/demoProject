import { InspectorControls as WPInspectorControls, useBlockEditContext } from '@wordpress/block-editor'
import { createSlotFill } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import { useSelect } from '@wordpress/data'
import { Border } from '@components'

// Custom Components
import Panel from './Panel'


const { Fill, Slot } = createSlotFill('WPTravelEngineTripBlocksInspectorControls')

const defaultPanelLabels = {
    'color': {
        title: __('Colors'),
        icon: 'admin-appearance',
    },
    'border': {
        title: __('Border'),
        icon: 'admin-appearance',
    },
    'dimensions': {
        title: __('Dimensions'),
        icon: 'admin-appearance',
    },
}

export default ({ children, controls, ...props }) => {
    const { attributes, setAttributes } = props
    const { name } = useBlockEditContext()

    const { getBlockType } = useSelect(select => select('core/blocks'), [])

    const { attributes: blockAttributes, supports: { wptravelenginetripblocks } } = getBlockType(name)

    let controlsPanel = {
        'default': {},
        'styles': {},
    }

    Object.entries(blockAttributes).forEach(([key, value]) => {
        const panel = value.panel || value.control?.type
        if (!panel) return
        if (panel.match(/^(-[\w-]+-)$/)) {
            controlsPanel['default'] = {
                ...controlsPanel['default'],
                [panel]: [...(controlsPanel['default']?.[panel] || []), [key, value]],
            }
        } else {
            controlsPanel['styles'] = {
                ...controlsPanel['styles'],
                [panel]: [...(controlsPanel['styles']?.[panel] || []), [key, value]],
            }
        }

    })

    const panelLabels = {
        ...defaultPanelLabels,
        ...(wptravelenginetripblocks?.panels || {}),
    }

    const defaultInspectorControls = Object.entries(controlsPanel['default'])
    const stylesInspectorControls = Object.entries(controlsPanel['styles'])

    return <>
        <WPInspectorControls group="styles">
            {stylesInspectorControls.map(([panel, controls]) => {
                return <Panel
                    initialOpen={panel === stylesInspectorControls[0][0]}
                    title={panelLabels[panel]?.title || null}
                    key={panel}
                    {...{ panel, controls, attributes, setAttributes }}
                />
            })}
        </WPInspectorControls>
        <WPInspectorControls group="default">
            {
                defaultInspectorControls.map(([panel, controls]) => {
                    return <Panel
                        initialOpen={panel === defaultInspectorControls[0][0]}
                        title={panelLabels[panel]?.title || null}
                        key={panel}
                        {...{ panel, controls, attributes, setAttributes }}
                    />
                })
            }
        </WPInspectorControls>
        {children}
    </>
}