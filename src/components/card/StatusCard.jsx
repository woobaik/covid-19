import React from "react"
import { Card, Icon } from "semantic-ui-react"
import AnimatedNumber from "animated-number-react"

const StatusCard = ({ cardData, title, date, color }) => {
	console.log("Card", cardData)
	//this is a functionfor AnimatedNumber, without this function, it will display so many decimal points.
	const formatValue = (value) => {
		return `${value.toFixed(0)}`
	}
	console.log(date)
	return (
		<Card color={color}>
			<Card.Content header={title} textAlign="center" />
			<Card.Content textAlign="center">
				<AnimatedNumber
					value={cardData}
					duration={2000}
					easing="linear"
					formatValue={formatValue}
				/>
			</Card.Content>
			<Card.Content extra textAlign="center">
				<Icon name="user" /> updated at{" "}
				{`${date && date.split("T")[0]} at ${
					date && date.split("T")[1].slice(0, 5)
				}`}
			</Card.Content>
		</Card>
	)
}

export default StatusCard
