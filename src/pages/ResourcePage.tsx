import { useEffect, useState } from "react"
import { TResource } from "../types"
import ResourceTable from "../components/ResourceTable/ResourceTable"

interface IResourcePageProps{
    resourceName: "Jobs" | "News" | "Shows",
    getResources: ()=>Promise<TResource[]>
}

export default function ResourcePage(props:IResourcePageProps){
	const [resources, setResources] = useState<TResource[]>([])
	const { getResources, resourceName } = props

	useEffect(()=>{
		async function initJobs(){
			const newResources:TResource[] = await getResources()
			setResources(newResources)
		}

		initJobs()
	}, [getResources, resourceName])

	return (
		<>
			<div className="text-large" style={{padding:"10px"}}>{ resourceName }</div>
			<ResourceTable resourcesArray={ resources }/>
		</>
	)
}