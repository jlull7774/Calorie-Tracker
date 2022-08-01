import "./App.css"
import {
	BrowserRouter,
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom"
import PrivateRoute from "./util/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Header from "./componenets/Navbar/Header"

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<AuthProvider>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/login' element={<LoginPage />} />
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
