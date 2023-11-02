import { TComment } from "../types"

interface ICommentProps{
    comment:TComment
}

export default function Comment(props:ICommentProps){
	const { comment } = props

	return (
		<ul key={comment.id}>
			<li>{comment.user}</li>
			<li>{comment.content}</li>
			<li>{comment.title}</li>
			<li>{comment.time_ago}</li>
		</ul>
	)
}