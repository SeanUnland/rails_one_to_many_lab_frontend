import React from 'react'
import Chart from 'chart.js'

const BarChart = () => {

    React.useEffect(() => {
        const makeAPICall = async () => {
            try {
                const res = await fetch('http://localhost:3000/stocks/1')
                const json = await res.json()
                const formattedData = prepareData(json)
                createChart(formattedData)
                console.log('BarChart - json', json)
            } catch (err) {
                console.log(err)
            }
        }
        makeAPICall()
    })

    const prepareData = data => {
        const chartData = {
            labels: [],
            datasets: [{label: 'average prices', data: []}]
        }
        data.average_prices.forEach(average_price => {
            chartData.labels.push(average_price.id)
            chartData.datasets[0].data.push(average_price.price)
        })
        console.log(chartData)
        return chartData
    }

    const createChart = (data) => {
        const ctx = document.querySelector('#average_prices')
        const pricesChart = new Chart(ctx, {
            type: 'line',
            data: data
        })
    }

    return (
        <>
            <h1>Average Prices</h1>
            <canvas id="averagePrices" width="300" height = "100"></canvas>
        </>
    )
}

export default BarChart