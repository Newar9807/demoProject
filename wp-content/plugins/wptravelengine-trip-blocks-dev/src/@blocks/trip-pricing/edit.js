import { useBlockProps, InspectorControls as WPInspectorControl } from '@wordpress/block-editor'
import ServerSideRender from '@wordpress/server-side-render'
import { useEffect } from '@wordpress/element'
import { useSelect } from '@wordpress/data'
import apiFetch from '@wordpress/api-fetch'
import { __ } from '@wordpress/i18n'
import { Panel, PanelBody } from '@wordpress/components'
import { ControlGroup, Select } from '@components'
import { InspectorControls } from '@components/editor'

const TripPrices = ({ attributes, setAttributes }) => {
    const { packageCategories, priceCategory } = attributes
    const tripID = useSelect((select) => select('core/editor').getCurrentPostId())
    
    useEffect(() => {
        const fetchPackageCategories = async () => {
            try {
                const response = await apiFetch({ path: `wp/v2/package-categories` })
                const packages = response.map(category => ({
                    value: category.id,
                    label: category.name,
                }))
                setAttributes({ packageCategories: packages })
                const primaryCategory = response.find(category => category['is-primary'])
                if (primaryCategory) {
                    setAttributes({ priceCategory: [primaryCategory.id] })
                }
            } catch (error) {
                console.error('Error fetching package categories:', error)
            }
        }
        
        fetchPackageCategories()
    }, [tripID])

    const blockProps = useBlockProps()
    
    return (
        <div {...blockProps}>
            <ServerSideRender
                block="wptravelenginetripblocks/trip-pricing"
                attributes={{ ...attributes, editor: true }}
            />
            <InspectorControls group="styles" {...{ attributes, setAttributes }} />
            <WPInspectorControl>
                <Panel>
                    <PanelBody title={__('Pricing Categories', 'wptravelengine-trip-blocks')}>
                        <ControlGroup>
                            {packageCategories && packageCategories.length > 0 ? (
                                <Select
                                    label={__('Categories', 'wptravelengine-trip-blocks')}
                                    help={__('Select package categories you wish to show. This only works for actual data.', 'wptravelengine-trip-blocks')}
                                    isMultiple
                                    value={priceCategory}
                                    options={packageCategories}
                                    onChange={(value) => setAttributes({ priceCategory: value })}
                                    divider="bottom"
                                />
                            ) : (
                                <p>{__('Loading categories...', 'wptravelengine-trip-blocks')}</p>
                            )}
                        </ControlGroup>
                    </PanelBody>
                </Panel>
            </WPInspectorControl>
        </div>
    )
}

export default TripPrices
