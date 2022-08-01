import React, { useEffect } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getCalories } from "../../actions/nutrition"
import "chart.js/auto"
import { Doughnut } from "react-chartjs-2"

const TotalCalories = () => {
	const auth = useSelector((state) => state.auth)
	const total = useSelector((state) => state.nutrition.calories)
	const dispatch = useDispatch()

	useEffect(() => {
		if (auth.isAuthenticated) {
			dispatch(getCalories())
		} else {
			console.log("User Not Authenticated")
		}
	}, [])

	const dataSet = {
		labels: ["Fat", "Protein", "Carbs"],
		datasets: [
			{
				label: "Calorie breakdown",
				backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00"],
				data: [total.fat, total.protein, total.carbs],
			},
		],
	}

	return (
		<>
			<h1 className='text-center mt-3'>Today's Calorie Breakdown!</h1>
			<Container fluid className='mt-3'>
				<Row>
					<Col xs={12} md={{ span: 8, offset: 2 }}>
						<Card body className='border-0'>
							<Row>
								<Doughnut
									data={dataSet}
									height={75}
									options={{
										legend: {
											display: true,
											position: "bottom",
										},
										maintainAspectRatio: false,
									}}
								/>
							</Row>
						</Card>
					</Col>

					<Col xs={12} md={{ span: 2, offset: 5 }}>
						<Card body className='text-center'>
							<h4>Daily Total Calories</h4>
							<h6>You've Had This Many Calories Today: <span></span>{total.total ? total.total : 0}</h6>
							<hr />
							<h6>Daily Calorie Goal: <span></span>{auth.userCalorieGoal.daily_calories}</h6>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default TotalCalories
