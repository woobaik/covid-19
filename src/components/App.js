import React, { Fragment } from "react"
import { fetchCovidCardData, fetchGlobalChartData } from "../api/corona19api"
import "./App.css"
import { COUNTRIES_DATA } from "../api/countries"

import { Container } from "semantic-ui-react"

import CardContainer from "./card/CardContainer"
import NavBar from "./header/NavBar"
import MainChart from "./chart/MainChart"

class App extends React.Component {
	state = {
		cardData: {},
		chartData: [],
		country: COUNTRIES_DATA,
	}
	async componentDidMount() {
		const cardResponse = await fetchCovidCardData()
		const chartResponse = await fetchGlobalChartData()

		this.setState({ cardData: cardResponse, chartData: chartResponse })
		console.log("hahahah", this.state)
	}

	render() {
		const { cardData, chartData } = this.state

		return (
			<Fragment>
				<NavBar />

				<Container>
					<CardContainer cardData={cardData} />
					<MainChart chartData={chartData} />
				</Container>
			</Fragment>
		)
	}
}

export default App
