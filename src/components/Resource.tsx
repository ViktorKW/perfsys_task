import { Link } from "react-router-dom"
import { TResource } from "../types"

interface IResourceProps{
    resource:TResource
}

export default function Resource(props:IResourceProps){
	const { resource } = props

	return (
		<Link to={`comments/${resource.id}`}>
			<tr key={resource.id}>
				<td>{resource.title}</td>
				<td>{resource.time}</td>
				<td>{resource.domain}</td>
			</tr>
		</Link>
	)
}