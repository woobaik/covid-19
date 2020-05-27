import axios from "axios"

export const fetchCovidCardData = async (country) => {
	const url = "https://api.covid19api.com/summary"
	try {
		const response = await axios.get(url)
		const { data } = response
		if (country) {
		} else {
			return data
		}
	} catch (error) {
		console.error(error)
	}
}

export const fetchGlobalChartData = async (asynce) => {
	const url = "https://covid19.mathdro.id/api/daily"

	try {
		const response = await axios.get(url)
		const { data } = response
		console.log("X-Man", data)
		const modifiedData = data.map((dailyData) => {
			return {
				confirmed: dailyData.confirmed.total,
				deaths: dailyData.deaths.total,
				date: dailyData.reportDate,
			}
		})
		return modifiedData
	} catch (error) {
		console.error(error)
	}
}
