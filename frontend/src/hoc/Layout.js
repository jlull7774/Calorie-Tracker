import React from "react"
import NavBar from "../componenets/Navbar/NavBar"

const Layout = (props) => (
	<div>
		<NavBar />

		{props.children}
	</div>
)

export default Layout
