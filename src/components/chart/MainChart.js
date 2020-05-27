import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"

const MainChart = ({ chartData }) => {
	console.log("deal with this", chartData)
	const { date, confirmed, recovered, deaths } = chartData

	const chart = () => {
		return {
			labels: chartData.map((daily) => daily.date),
			datasets: [
				{
					label: "Confirmed",
					data: chartData.map((daily) => daily.confirmed),
					backgroundColor: ["rgba(75,192,192,0.5)"],
					borderWidth: 4,
				},

				{
					label: "Deaths",
					data: chartData.map((daily) => daily.deaths),
					backgroundColor: ["red"],
					borderWidth: 4,
				},
			],
		}
	}

	return (
		<Line
			data={chart}
			options={{
				responsive: true,
			}}
		/>
	)
}

export default MainChart
