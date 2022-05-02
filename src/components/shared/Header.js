
import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: '#F2DB94',
    textDecoration: 'none',	
}
const authenticatedOptions = (
	<>
		{/* links to display if a user is signed in */}
		<Navbar.Brand>
			<Link to='/exhibitions' className= 'm-2' style={linkStyle}>
				Exhibition
			</Link>
        </Navbar.Brand>	
		<Nav.Item className="m-2">
			<Link  to='/exhibitions' style={linkStyle}>All Exhibitions</Link>
		</Nav.Item>
		<Nav.Item className="m-2">
		    <Link to='addExhibition' style={linkStyle}>Add Exhibition</Link>
        </Nav.Item>
		<Nav.Item className="m-2">
		    <Link to='/exhibitions/mine' style={linkStyle}>My Exhibitions</Link>
        </Nav.Item>
		<Nav.Item className="m-2">
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className="m-2">
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
	{/* links to display if not signed in */}
		<Navbar.Brand>
			<Link to='/sign-in' className= 'm-2' style={linkStyle}>
			 Exhibitions
			</Link>
        </Navbar.Brand>
        <Nav.Item className="m-2">
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item className="m-2">
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)



const Header = ({ user }) => (
	<Navbar sticky='top' className='custom-nav' bg='myBlue' variant='light' expand='md'>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user ? authenticatedOptions : unauthenticatedOptions}
				{user && (
					<span className='m-2'  style={{color: 'white', margin: 'auto'}}>Welcome, {user.email}</span>
					
					)}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
