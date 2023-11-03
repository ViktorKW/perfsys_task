import "./HomePage.scss"
import { Link } from "react-router-dom"

export default function Home() {
	return (
		<div className="menu">
			<div className="menu-option-container">
				<Link className="menu-option text-medium" to="/jobs">
					Jobs
				</Link>
				<Link className="menu-option text-medium" to="/news">
					News
				</Link>
				<Link className="menu-option text-medium" to="/shows">
					Shows
				</Link>
			</div>
		</div>
	)
}