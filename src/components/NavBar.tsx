import { Link } from "react-router-dom"

export default function NavBar() {
	return (
		<div className='navbar'>
			<nav className='nav-links'>
				<Link to='/'>Home</Link>
				<Link to='news'>News</Link>
				<Link to='shows'>Shows</Link>
				<Link to='jobs'>Jobs</Link>
			</nav>
		</div>
	)
}
