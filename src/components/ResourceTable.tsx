import { TResource } from "../types"
import Resource from "./Resource"

interface ResourceTableProps{
    resource_arr:TResource[]
}

export default function ResourceTable(props:ResourceTableProps){
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