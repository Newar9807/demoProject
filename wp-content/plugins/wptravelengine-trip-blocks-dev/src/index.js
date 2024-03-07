import './assets/sass/common.scss'

function hasWordPressBlock(blockName) {
    var blocks = document.querySelectorAll('.wp-block-' + blockName)
    return blocks.length > 0
}

function initFaqToggle() {
    // Ensure the script runs after all other scripts have executed.
    setTimeout(function() {
        // Select all FAQ content divs.
        var faqContents = document.querySelectorAll('.faq-content')

        // Loop through each FAQ content div.
        faqContents.forEach(function(content, index) {
            // Add 'show' class to the first FAQ content div.
            if (0 === index) {
                content.classList.add('show')
                content.style.display = 'block'
            } else {
                content.style.display = 'none'
            }
        })
    })
}

function initOwlCarousel() {
    $(function() { // jQuery function wrapper
        const galleryContainers = document.querySelectorAll('.wpte-trip-feat-img-gallery')
        if (galleryContainers.length) {
            galleryContainers.forEach(container => {
                $(container).owlCarousel({
                    nav: true,
                    navigationText: ['&lsaquo;', '&rsaquo;'],
                    items: 1,
                    autoplay: true,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    center: true,
                    loop: true,
                    dots: true,
                })
            })
        }
    })
}

export function initAltitudeChart(chartData) {

    var ctx = document.getElementById('altChart')

    if (ctx && typeof Chart !== 'undefined') {
        var altitudeUnitData = chartData.altitudeUnitData
        var altitudeLabelsData = chartData.altitudeLabelsData
        var altitudeUnit = chartData.altitudeUnit
        var showLG = '' !== chartData.showLG
        var showX = '' !== chartData.showX
        var showY = '' !== chartData.showY
        var themeColor = chartData.themeColor
        var xScaleLabel = chartData.xScaleLabel
        var yScaleLabel = chartData.yScaleLabel
        var lineTension = (chartData.tension / 10)
        var tempAltitudeData = altitudeUnitData
        var tempUnit = altitudeUnit

        const chartOptions = {
            type: 'line',
            data: {
                labels: altitudeLabelsData,
                datasets: [{
                    data: altitudeUnitData,
                    borderWidth: 1,
                    tension: lineTension,
                    fill: showLG,
                }],
            },
            options: {
                showAllToolTips: true,
                scales: buildAxes(showX, showY, themeColor, xScaleLabel, yScaleLabel),
                plugins: {
                    datalabels: buildDatalabels(themeColor, altitudeLabelsData, altitudeUnit),
                },
                elements: {
                    point: {
                        backgroundColor: themeColor,
                    },
                    line: {
                        tension: 0,
                    },
                },
                layout: {
                    padding: {
                        left: 10,
                        right: 50,
                        top: 50,
                        bottom: 0,
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    fontColor: themeColor,
                    display: false,
                },
            },
        }

        const chartInstance = new Chart(ctx, chartOptions)

        // Set the checked property of radio button based on altitude unit.
        document.getElementById('altitude-unit-m').checked = 'm' === altitudeUnit
        document.getElementById('altitude-unit-ft').checked = 'ft' === altitudeUnit

        // Update the altitudeUnitData based on selected unit.
        function updateAltitudeUnitData(selectedUnit) {
            if (selectedUnit !== tempUnit) {
                var units = {
                    m: selectedUnit !== 'm' ? 1 : 0.3048,
                    ft: selectedUnit !== 'ft' ? 1 : 3.28084,
                }
                altitudeUnitData = altitudeUnitData.map(altitude => Math.floor(altitude * units[selectedUnit]))
            } else {
                altitudeUnitData = tempAltitudeData
            }
            chartInstance.data.datasets[0].data = altitudeUnitData
            chartOptions.options.plugins.datalabels = buildDatalabels(themeColor, altitudeLabelsData, selectedUnit)
            chartInstance.update()
            return altitudeUnitData
        }

        document.querySelectorAll('input[name="altitude-unit"]')?.forEach(function(unit) {
            unit.addEventListener('change', function() {
                this.checked && updateAltitudeUnitData(this.value)
            })
        })
    }
}

function buildAxes(showX, showY, themeColor, xScaleLabel, yScaleLabel) {
    return {
        xAxes: [{
            display: showX,
            scaleLabel: {
                display: true,
                labelString: xScaleLabel,
            },
            ticks: {
                beginAtZero: true,
            },
            gridLines: {
                borderDash: [8, 4],
                color: themeColor,
            },
        }],
        yAxes: [{
            display: showY,
            scaleLabel: {
                display: true,
                labelString: yScaleLabel,
            },
            ticks: {
                beginAtZero: true,
            },
            gridLines: {
                display: false,
                color: themeColor,
            },
        }],
    }
}

function buildDatalabels(themeColor, altitudeLabelsData, altitudeUnit) {
    return {
        color: themeColor,
        offset: 10,
        align: 'top',
        padding: 4,
        formatter: function(value, ctx) {
            const index = ctx.dataIndex
            const label = altitudeLabelsData[index]
            const unit = altitudeUnit === 'm' ? 'm' : 'ft'
            return label.concat(' ', value, ' ').concat(unit, '.')
        },
        font: {
            size: 12,
            weight: 'bold',
            color: '#147dfe',
        },
    }
}