import React from "react"
import { connect } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import Alerts from "./Alerts.js"
import Register from "./components/accounts/Register"
import Login from "./components/accounts/Login"
import { loadUser } from "./actions/auth"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/home/Home"
import NavBar from "./components/NavBar"
import { Routes } from "react-router-dom"

// Alert options
const alertOptions = {
	timeout: 3000,
	position: "top center",
}

class App extends React.Component {
	componentDidMount() {
		this.props.loadUser()
	}

	render() {
		return (
			<BrowserRouter>
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<NavBar />
					<Alerts />
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</AlertProvider>
			</BrowserRouter>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	}
}

export default connect(mapStateToProps, {
	loadUser,
})(App)
