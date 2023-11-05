import "./Comment.scss"
import { TComment } from "../../types"

interface ICommentProps{
    comment:TComment
}

export default function Comment(props:ICommentProps){
	const { comment } = props

	const {user, time_ago, title, content} = comment

	function decodeHtmlEntities(text:string) {
		const textArea = document.createElement("textarea")
		textArea.innerHTML = text
		return textArea.value
	}
	
	const decodedText = decodeHtmlEntities(content)

	return (
		<div className="comment-card">
			<div className="comment-card-header">
				<span className="text-small">From <b>{user ? user : "Anonymous"}</b></span>
				<span className="comment-time text-small text-support">{time_ago}</span>
			</div>
			<div className="comment-card-content">
				<p className="text-medium"><b>{title ? title : "No title"}</b></p>
				<p dangerouslySetInnerHTML={{__html:decodedText}} className="text-content"></p>
			</div>
		</div>
	)
}