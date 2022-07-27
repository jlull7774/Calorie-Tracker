import React from "react"
import NavBar from "../componenets/Navbar"

const Layout = () => (
	<div>
		<NavBar />
		{props.children}
	</div>
)

export default Layout
