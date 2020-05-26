import React, { Fragment } from "react"
import { fetchCovidCardData } from "../api/corona19api"

import { Container } from "semantic-ui-react"

import CardContainer from "./card/CardContainer"
import NavBar from "./header/NavBar"

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

		return (
			<Fragment>
				<NavBar />
				<Container>
					<CardContainer cardData={cardData} />
				</Container>
			</Fragment>
		)
	}
}

export default App
