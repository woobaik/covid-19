import React from "react"
import StatusCard from "./StatusCard"
import { Card } from "semantic-ui-react"

const cardRender = (obj) => {}

const CardContainer = ({ cardData }) => {
	//in case its just global
	const { Global, Date } = cardData

	return (
		<Card.Group itemsPerRow={3}>
			<StatusCard
				cardData={Global && Global.NewConfirmed}
				date={Date}
				title="New Confirmed"
				color="yellow"
			/>
			<StatusCard
				cardData={Global && Global.NewDeaths}
				date={Date}
				title="New Deaths"
				color="orange"
			/>
			<StatusCard
				cardData={Global && Global.NewRecovered}
				date={Date}
				title="New Recovered"
				color="green"
			/>
			<StatusCard
				cardData={Global && Global.TotalConfirmed}
				date={Date}
				title="Total Confirmed"
				color="purple"
			/>
			<StatusCard
				cardData={Global && Global.TotalDeaths}
				date={Date}
				title="Total Deaths"
				color="red"
			/>
			<StatusCard
				cardData={Global && Global.TotalRecovered}
				date={Date}
				title="Total Recovered"
				color="teal"
			/>
		</Card.Group>
	)
}

export default CardContainer
