import React from "react"
import { fetchCovidCardData } from "../api/corona19api"

class App extends React.Component {
	async componentDidMount() {
		const response = await fetchCovidCardData()
		console.log("app s", response)
	}

	render() {
		return <div>hello</div>
	}
}

export default App
