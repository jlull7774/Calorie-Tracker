import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./containers/Home"
import Login from "./containers/Login"
import Signup from "./containers/Signup"
import Activate from "./containers/Activate"
import ResetPassword from "./containers/ResetPassword"
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm"

import Layout from "./hoc/Layout"

const App = () => (
	<Router>
		<Layout>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
				<Route path='/reset_password' component={ResetPassword} />
				<Route
					path='/password/reset/confirm/:uid/:token'
					component={ResetPasswordConfirm}
				/>
				<Route path='/activate/:uid/:token' component={Activate} />
			</Routes>
		</Layout>
	</Router>
)

export default App
