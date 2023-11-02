import { useEffect, useState } from "react"
import { getJobs } from "../api"
import { TResource } from "../types"
import ResourceTable from "../components/ResourceTable"

export default function Jobs(){
	const [jobs, setJobs] = useState<TResource[]>([])

	useEffect(()=>{
		async function initJobs(){
			const new_jobs:TResource[] = await getJobs()
			setJobs(new_jobs)
		}

		initJobs()
	}, [])

	return (
		<>
			<h1>Jobs</h1>
			<ResourceTable resource_arr={jobs}/>
		</>
	)
}