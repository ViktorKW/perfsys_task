import "./Resource.scss"
import { useNavigate } from "react-router-dom"
import { TResource } from "../../types"
import { MouseEvent } from "react"

interface IResourceProps{
    resource:TResource
}

export default function Resource(props:IResourceProps){
	const { resource } = props
	const navigate = useNavigate()

	function formatDate(dateNumber: number) {
		const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" }
		const date = new Date(dateNumber * 1000)
		return date.toLocaleDateString("en-US", options)
	}

	const {id, title, time, domain} = resource

	const handleOnClick = ()=>{
		navigate(`comments/${id}`)
	}

	const handleLinkOnClick = (e:MouseEvent<HTMLTableCellElement>)=>{
		e.stopPropagation()
	}

	return (
		<tr className="item text-content" key={id} onClick={handleOnClick}>
			<td className="title">{title}</td>
			<td className="time">{formatDate(time)}</td>
			<td className="domain" onClick={handleLinkOnClick}>
				{domain ? <a href={`https://${domain}`} target="_blank" rel="noopener noreferrer">{domain}</a> : "No URL"}
			</td>
		</tr>
	)
}