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
	const [isLoaded, setIsLoaded] = useState<boolean>(false)
	const [error, setError] = useState<string|null>(null)

	useEffect(()=>{
		async function initJobs(){
			setError(null)

			const newResources:TResource[] = await getResources()
			if(newResources.length === 0){
				setError("No items has been retrieved")
			}
			
			setResources(newResources)
			setIsLoaded(true)
		}

		initJobs()
	}, [getResources, resourceName])

	const renderResourceTable = ():JSX.Element=>{
		if(isLoaded === false){
			return <p className="pad-10 text-medium support-color">Loading...</p>
		} else if(isLoaded === true && error === null){
			return <ResourceTable resourcesArray={ resources }/>
		} else if(isLoaded === true && error !== null){
			return <p className="pad-10 text-large warning-color">{ error }</p>
		} else {
			return <p className="pad-10 text-large warning-color">Unknown Error</p>
		}
	}

	return (
		<div className="resource-page">
			<div className="pad-10 text-large">{ resourceName }</div>
			{renderResourceTable()}
		</div>
	)
}