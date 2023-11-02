import { TResource } from "../types"
import Resource from "./Resource"

interface IResourceTableProps{
    resource_arr:TResource[]
}

export default function ResourceTable(props:IResourceTableProps){
	const { resource_arr } = props

	return (
		<table>
			<caption>Our items</caption>
			<thead>
				<tr>
					<th>Title</th>
					<th>Time</th>
					<th>Domain</th>
				</tr>
			</thead>
			<tbody>
				{resource_arr.map(resource => <Resource resource={resource}/>)}
			</tbody>
		</table>
	)
}