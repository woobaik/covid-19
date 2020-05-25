import axios from "axios"

export const fetchCovidCardData = async (country) => {
	const url = "https://api.covid19api.com/summary"
	const response = await axios.get(url)

	const { data } = response
	if (country) {
		console.log("country", country)
	} else {
		return data
	}
	console.log("api", data)
	return data
}
