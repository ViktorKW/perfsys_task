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
			const valueA = a[key] === undefined ? "" : a[key]
			const valueB = b[key] === undefined ? "" : b[key]

			if (valueA < valueB) {
				return direction === "ascending" ? -1 : 1
			}
			if (valueA > valueB) {
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

	const triangleUpDown = (thKey:"title" | "time" | "domain")=>{
		return key === thKey 
			?  direction ==="ascending" ? <span className="triangle">▲</span> : <span className="triangle">▼</span>
			: <></>
	}

	return (
		<table className="resource-table">
			<thead className="table-header">
				<tr className="text-medium">
					<th className="title" onClick={() => requestSort("title")}>           
						<span>Title</span>{triangleUpDown("title")}
					</th>
					<th className="time" onClick={() => requestSort("time")}>
						<span>Time</span>{triangleUpDown("time")}
					</th>
					<th className="domain" onClick={() => requestSort("domain")}>
						<span>Domain</span>{triangleUpDown("domain")}
					</th>
				</tr>
			</thead>
			<tbody>
				{sortedResources.map(resource => <Resource key={resource.id} resource={resource}/>)}
			</tbody>
		</table>
	)
}