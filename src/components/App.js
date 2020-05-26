import React from "react"
import { fetchCovidCardData } from "../api/corona19api"

import CardContainer from "./card/CardContainer"

class App extends React.Component {
	state = {
		cardData: {},
	}
	async componentDidMount() {
		const response = await fetchCovidCardData()

		this.setState({ cardData: response })
		console.log(this.state)
	}

	render() {
		const { cardData } = this.state
		console.log("App", cardData)

		return <CardContainer cardData={cardData} />
	}
}

export default App
