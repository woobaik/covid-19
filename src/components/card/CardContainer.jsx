import React from "react"
import StatusCard from "./StatusCard"

const cardRender = (obj) => {}

const CardContainer = ({ cardData: { Global, Date } }) => {
	//in case its just global
	console.log("wtf", Global)
	return (
		<div>
			<StatusCard
				cardData={Global && Global.NewConfirmed}
				date={Date}
				title="New Confirmed"
			/>
			<StatusCard
				cardData={Global && Global.NewDeaths}
				date={Date}
				title="New Deaths"
			/>
			<StatusCard
				cardData={Global && Global.NewRecovered}
				date={Date}
				title="New Recovered"
			/>
			<StatusCard
				cardData={Global && Global.TotalConfirmed}
				date={Date}
				title="Total Confirmed"
			/>
			<StatusCard
				cardData={Global && Global.TotalDeaths}
				date={Date}
				title="Total Deaths"
			/>
			<StatusCard
				cardData={Global && Global.TotalRecovered}
				date={Date}
				title="Total Recovered"
			/>
		</div>
	)
}

export default CardContainer
