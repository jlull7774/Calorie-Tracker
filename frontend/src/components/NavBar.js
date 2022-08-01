import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Navbar, Nav, Button } from "react-bootstrap"
import { logout } from "../actions/auth"
const NavBar = () => {
	const auth = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	return (
		<>
			<Navbar variant='light' style={{ backgroundColor: "rgb(65, 105, 225)" }}>
				{auth.isAuthenticated ? (
					<>
						<Navbar.Brand className='mx-5' href='/'>
							<h4 className='text-white'>Welcome,</h4>
							<h5 className='text-white'>{auth.user.username}</h5>{" "}
						</Navbar.Brand>
						<Nav.Link href='/' onClick={() => dispatch(logout())}>
							<h4 className='text-white'>Logout</h4>
						</Nav.Link>
					</>
				) : (
					<>
						<Navbar.Brand className='mx-5 text-white' href='/'>
							<h4>Welcome</h4>
						</Navbar.Brand>
						<Nav.Link className='text-white mx-3' href='/register'>
							<h5>Sign Up</h5>
						</Nav.Link>
						<Nav.Link className='text-white mx-3' href='/login'>
                        <h5>Login{" "}</h5>
						</Nav.Link>
					</>
				)}
			</Navbar>
		</>
	)
}

export default NavBar
