import { __ } from "@wordpress/i18n"
import { useBlockProps } from "@wordpress/block-editor"
import { InspectorControls } from "@components/editor"
import { useEffect, useRef } from '@wordpress/element'

const TripItineraryChart = (...args) => {

    const props = args[0]
    const { attributes, setAttributes } = props
    const blockProps = useBlockProps()
    const {
        border, borderRadius, boxShadow,
        margin, padding, textColor,
        background, altitudeUnit, showAltitudeUnit,
        altitudeUnitLabel, showX, showY,
        showLG, xScaleLabel, yScaleLabel,
        tension, themeColor
    } = attributes

    const properties = ['position', 'xOffset', 'yOffset', 'blur', 'spread', 'color']
    const _value = properties.map(property => {
        if ('position' === property) {
            return boxShadow[property] !== 'inset' ? '' : 'inset'
        }
        if ('color' === property) {
            return boxShadow[property] ?? ''
        }
        const propertyValue = boxShadow[property] ?? ''
        return '' !== propertyValue ? propertyValue : 0;
    });
    const boxShadowValue = _value.join(' ')

    const labels = {
        'm': __('M', 'wptravelengine-trip-blocks'),
        'ft': __('FT.', 'wptravelengine-trip-blocks'),
    };

    const defaultLabelsData = ['Kathmandu', 'Ulleri', 'Ghorepani', 'Tadapani', 'Chomrong', 'Dobhan', 'Deurali'];

    const getDefaultAltitudeData = (unit) => {
        const defaultMeterData = [426, 557, 714, 653, 690, 558, 464];
        const defaultFootData = defaultMeterData.map(value => Math.round(value * 3.28084));
        return 'm' === unit ? defaultMeterData : defaultFootData;
    };

    const getGridLineColor = () => {
        return themeColor + "33" || 'var(--primary-color)';
    };

    const getChartBackgroundColor = () => {
        return themeColor || 'var(--primary-color)';
    };

    const getLegendFontColor = () => {
        return themeColor || 'var(--primary-color)';
    };

    const ref = useRef(null)

    useEffect(() => {
        if (ref.current && typeof Chart !== 'undefined') {
            const altitudeUnitData = getDefaultAltitudeData(altitudeUnit);
            new Chart(ref.current, {
                type: 'line',
                data: {
                    labels: defaultLabelsData,
                    datasets: [{
                        data: altitudeUnitData,
                        borderWidth: 1,
                        tension: (tension/10),
                        fill: showLG
                    }]
                },
                options: {
                    showAllToolTips: true,
                    scales: {
                        xAxes: [{
                            display: showX,
                            scaleLabel: {
                                display: true,
                                labelString: xScaleLabel
                            },
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                borderDash: [8, 4],
                                color: getGridLineColor(),
                            }
                        }],
                        yAxes: [{
                            display: showY,
                            scaleLabel: {
                                display: true,
                                labelString: yScaleLabel
                            },
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: false,
                                color: getGridLineColor(),
                            }
                        }]
                    },
                    plugins: {
                        datalabels: {
                            color: getChartBackgroundColor(),
                            offset: 10,
                            align: "top",
                            padding: 4,
                            formatter: function (value, ctx) {
                                const index = ctx.dataIndex
                                const label = defaultLabelsData[index]
                                const unit  = 'm' === altitudeUnit ? 'm' : 'ft'
                                return label.concat(" ", value, " ").concat(unit, ".");
                            },
                            font: {
                                size: 12,
                                weight: "bold",
                                color: "#147dfe"
                            },
                        }
                    },
                    elements: {
                        point: {
                            backgroundColor: getChartBackgroundColor()
                        },
                        line: {
                            tension: 0
                        }
                    },
                    layout: {
                        padding: {
                            left: 10,
                            right: 50,
                            top: 50,
                            bottom: 0
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: !1,
                    legend: {
                        fontColor: getLegendFontColor(),
                        display: 0,
                    },
                },
            })
        }
    }, [attributes])

    return <div {...blockProps}>
        <div className="altitude-chart-container" style={{
            border: border ? `${border.width || 0}px ${border.style || 'solid'} ${border.color || 'transparent'}` : 'none',
            borderRadius: borderRadius ? `${borderRadius.bottom || 0} ${borderRadius.left || 0} ${borderRadius.right || 0} ${borderRadius.top || 0}` : 'none',
            boxShadow: boxShadow?.enable ? boxShadowValue : 'none',
            paddingTop: padding.top,
            paddingBottom: padding.bottom,
            paddingLeft: padding.left,
            paddingRight: padding.right,
            marginTop: margin.top,
            marginBottom: margin.bottom,
            marginLeft: margin.left,
            marginRight: margin.right,
            color: textColor || 'var(--primary-color)',
            background: background || '',
        }}>
            {showAltitudeUnit && (
                <div className="altitude-unit-switcher">
                    <label className="altitude-unit-label">{altitudeUnitLabel}: </label>
                    <div className="altitude-unit-switches">
                        <span><input type="radio" value="m" name="altitude-unit" id="altitude-unit-m" checked={'m' === altitudeUnit} /><label htmlFor="altitude-unit-m">{labels['m']}</label></span>
                        <span><input type="radio" value="ft" name="altitude-unit" id="altitude-unit-ft" checked={'ft' === altitudeUnit} /><label htmlFor="altitude-unit-ft">{labels['ft']}</label></span>
                    </div>
                </div>
            )}
            <div>
                <div id="altitude-chart-screen">
                    <canvas id="altChart" className="ate-alt-chart" ref={ref} style={{
                        display: 'block',
                        width: 'auto',
                        height: '350px'
                    }}></canvas>
                </div>
            </div>
        </div>
        <InspectorControls group="styles" {...props} />
    </div>
}

export default TripItineraryChart