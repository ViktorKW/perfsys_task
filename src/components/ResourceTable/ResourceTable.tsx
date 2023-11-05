import "./ResourceTable.scss"
import { useState } from "react"
import { TResource } from "../../types"
import Resource from "../Resource/Resource"

interface IResourceTableProps{
    resourcesArray:TResource[]
}

export default function ResourceTable(props:IResourceTableProps){
	const { resourcesArray } = props

	const sortedResources:TResource[] = [...resourcesArray]

	type TSortConfig = { 
		key: keyof TResource | "default",
		direction: "ascending" | "descending"
	}

	const [sortConfig, setSortConfig] = useState<TSortConfig>({key:"default", direction:"ascending"})

	const { key, direction } = sortConfig
	if (key !== "default") {
		sortedResources.sort((a, b) => {
			if (a[key] < b[key]) {
				return direction === "ascending" ? -1 : 1
			}
			if (a[key] > b[key]) {
				return direction === "ascending" ? 1 : -1
			}
			return 0
		})
	}

	const requestSort = (key:keyof TResource) => {
		let direction:"ascending"|"descending" = "ascending"

		if (sortConfig.key === key && sortConfig.direction === "ascending") {
			direction = "descending"
		}
		setSortConfig({ key, direction })
	}

	return (
		<div className="table-container">
			<table className="resource-table">
				<thead className="table-header">
					<tr className="text-medium">
						<th onClick={() => requestSort("title")}>           
					Title
						</th>
						<th onClick={() => requestSort("time")}>
					Time
						</th>
						<th onClick={() => requestSort("domain")}>
					Domain
						</th>
					</tr>
				</thead>
				<tbody>
					{sortedResources.map(resource => <Resource key={resource.id} resource={resource}/>)}
				</tbody>
			</table>
		</div>
	)
}