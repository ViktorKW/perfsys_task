import { Link } from "react-router-dom"
import { TResource } from "../types"

interface IResourceProps{
    resource:TResource
}

export default function Resource(props:IResourceProps){
	const { resource } = props

	function formatDate(dateNumber: number) {
		const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" }
		const date = new Date(dateNumber * 1000)
		return date.toLocaleDateString("en-US", options)
	}

	const {id, title, time, domain} = resource
	return (
		<tr key={id}>
			<td><Link to={`comments/${id}`}>{title}</Link></td>
			<td>{formatDate(time)}</td>
			<td>{domain}</td>
		</tr>
	)
}