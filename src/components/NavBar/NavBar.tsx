import "./NavBar.scss"
import { Link } from "react-router-dom"

export default function NavBar() {
	return (
		<div className='navbar'>
			<nav className='nav-links'>
				<Link className="text-large" to='/'>Home</Link>
				<Link className="text-large" to='/news'>News</Link>
				<Link className="text-large" to='/shows'>Shows</Link>
				<Link className="text-large" to='/jobs'>Jobs</Link>
			</nav>
		</div>
	)
}
